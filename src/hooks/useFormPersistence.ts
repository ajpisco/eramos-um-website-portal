import { useEffect, useCallback, useRef } from 'react';
import { AdmissionFormData } from '@/components/AdmissionFormHTML';

interface FormPersistenceOptions {
  storageKey: string;
  debounceMs?: number;
  excludeFields?: (keyof AdmissionFormData)[];
  onRestore?: (data: Partial<AdmissionFormData>) => void;
  onSave?: (data: Partial<AdmissionFormData>) => void;
}

export const useFormPersistence = (
  formData: AdmissionFormData,
  setFormData: (data: AdmissionFormData) => void,
  options: FormPersistenceOptions
) => {
  const {
    storageKey,
    debounceMs = 1000,
    excludeFields = ['studentPhoto', 'submissionDate'], // Don't persist files and submission date
    onRestore,
    onSave
  } = options;

  const debounceRef = useRef<NodeJS.Timeout>();
  const initialLoadRef = useRef(false);

  // Save form data to localStorage with debouncing
  const saveFormData = useCallback((data: AdmissionFormData) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      try {
        // Create a copy of the data excluding specified fields
        const dataToSave: Record<string, any> = {};
        
        (Object.keys(data) as (keyof AdmissionFormData)[]).forEach(key => {
          if (!excludeFields.includes(key)) {
            const value = data[key];
            // Only save serializable data (exclude File objects)
            if (!(value instanceof File)) {
              dataToSave[key] = value;
            }
          }
        });

        // Add metadata
        const persistedData = {
          formData: dataToSave,
          savedAt: new Date().toISOString(),
          version: '1.0' // For future compatibility
        };

        localStorage.setItem(storageKey, JSON.stringify(persistedData));
        onSave?.(dataToSave as Partial<AdmissionFormData>);
        
        console.log('Form data saved to localStorage');
      } catch (error) {
        console.error('Failed to save form data to localStorage:', error);
      }
    }, debounceMs);
  }, [storageKey, debounceMs, excludeFields, onSave]);

  // Restore form data from localStorage
  const restoreFormData = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      
      if (!savedData) {
        return false;
      }

      const parsedData = JSON.parse(savedData);
      
      // Validate the structure
      if (!parsedData.formData || !parsedData.savedAt) {
        console.warn('Invalid form data structure in localStorage');
        return false;
      }

      // Check if data is not too old (optional: 7 days)
      const savedAt = new Date(parsedData.savedAt);
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      
      if (savedAt < weekAgo) {
        console.log('Saved form data is too old, clearing...');
        clearSavedData();
        return false;
      }

      // Merge with current form data, preserving excluded fields
      const restoredData: AdmissionFormData = {
        ...formData,
        ...parsedData.formData
      };

      setFormData(restoredData);
      onRestore?.(parsedData.formData);
      
      console.log('Form data restored from localStorage');
      return true;
    } catch (error) {
      console.error('Failed to restore form data from localStorage:', error);
      return false;
    }
  }, [storageKey, formData, setFormData, onRestore]);

  // Clear saved form data
  const clearSavedData = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
      console.log('Saved form data cleared from localStorage');
    } catch (error) {
      console.error('Failed to clear saved form data:', error);
    }
  }, [storageKey]);

  // Check if there's saved data available
  const hasSavedData = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      return !!savedData;
    } catch (error) {
      return false;
    }
  }, [storageKey]);

  // Get saved data info without restoring
  const getSavedDataInfo = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (!savedData) return null;

      const parsedData = JSON.parse(savedData);
      return {
        savedAt: parsedData.savedAt,
        studentName: parsedData.formData?.studentName || 'Unknown',
        version: parsedData.version || '1.0'
      };
    } catch (error) {
      return null;
    }
  }, [storageKey]);

  // Effect to restore data on initial load
  useEffect(() => {
    if (!initialLoadRef.current) {
      initialLoadRef.current = true;
      // Don't auto-restore, let the component decide
    }
  }, []);

  // Effect to save data when formData changes
  useEffect(() => {
    if (initialLoadRef.current) {
      // Only save if the form has some meaningful data
      const hasData = Object.values(formData).some(value => 
        value && value !== '' && value !== false
      );
      
      if (hasData) {
        saveFormData(formData);
      }
    }
  }, [formData, saveFormData]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return {
    restoreFormData,
    clearSavedData,
    hasSavedData,
    getSavedDataInfo
  };
}; 