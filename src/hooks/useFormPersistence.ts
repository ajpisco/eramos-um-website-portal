import { useEffect, useCallback, useRef } from 'react';
import { AdmissionFormData } from '@/components/AdmissionFormHTML';

interface FormPersistenceOptions {
  storageKey: string;
  debounceMs?: number;
  excludeFields?: (keyof AdmissionFormData)[];
  onRestore?: (data: Partial<AdmissionFormData>, extraData?: any) => void;
  onSave?: (data: Partial<AdmissionFormData>, extraData?: any) => void;
}

export const useFormPersistence = (
  formData: AdmissionFormData,
  setFormData: (data: AdmissionFormData) => void,
  options: FormPersistenceOptions,
  extraData?: any // For additional state like guardianDataSource
) => {
  const {
    storageKey,
    debounceMs = 1000,
    excludeFields = ['studentPhoto', 'submissionDate'], // Don't persist files and submission date
    onRestore,
    onSave
  } = options;

  const debounceRef = useRef<NodeJS.Timeout>();
  const hasInitialized = useRef(false);

  // Save data to localStorage with debouncing
  const saveData = useCallback((data: AdmissionFormData, extra?: any) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      try {
        // Filter out excluded fields and non-serializable data
        const dataToSave: Record<string, any> = {};
        
        Object.entries(data).forEach(([key, value]) => {
          if (!excludeFields.includes(key as keyof AdmissionFormData)) {
            // Handle different value types
            if (value instanceof File) {
              // Don't save files
              return;
            } else if (value instanceof Date) {
              dataToSave[key] = value.toISOString();
            } else if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
              dataToSave[key] = value;
            } else if (value === null || value === undefined) {
              dataToSave[key] = value;
            }
          }
        });

        const persistenceData = {
          formData: dataToSave,
          extraData: extra || {},
          savedAt: new Date().toISOString(),
          version: '1.0'
        };

        localStorage.setItem(storageKey, JSON.stringify(persistenceData));
        onSave?.(dataToSave, extra);
      } catch (error) {
        console.warn('Failed to save form data:', error);
      }
    }, debounceMs);
  }, [storageKey, debounceMs, excludeFields, onSave]);

  // Restore data from localStorage
  const restoreFormData = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (!savedData) return null;

      const parsedData = JSON.parse(savedData);
      
      // Check if data is not expired (7 days)
      const savedAt = new Date(parsedData.savedAt);
      const now = new Date();
      const daysDiff = (now.getTime() - savedAt.getTime()) / (1000 * 3600 * 24);
      
      if (daysDiff > 7) {
        localStorage.removeItem(storageKey);
        return null;
      }

      // Merge saved data with current form data
      const restoredFormData = {
        ...formData,
        ...parsedData.formData
      };

      setFormData(restoredFormData);
      onRestore?.(parsedData.formData, parsedData.extraData);
      
      return { formData: parsedData.formData, extraData: parsedData.extraData };
    } catch (error) {
      console.warn('Failed to restore form data:', error);
      localStorage.removeItem(storageKey);
      return null;
    }
  }, [storageKey, formData, setFormData, onRestore]);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.warn('Failed to clear saved data:', error);
    }
  }, [storageKey]);

  // Check if there's saved data
  const hasSavedData = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (!savedData) return false;

      const parsedData = JSON.parse(savedData);
      const savedAt = new Date(parsedData.savedAt);
      const now = new Date();
      const daysDiff = (now.getTime() - savedAt.getTime()) / (1000 * 3600 * 24);
      
      return daysDiff <= 7;
    } catch {
      return false;
    }
  }, [storageKey]);

  // Get saved data info for display
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
    } catch {
      return null;
    }
  }, [storageKey]);

  // Auto-save when form data changes
  useEffect(() => {
    if (hasInitialized.current) {
      saveData(formData, extraData);
    }
  }, [formData, extraData, saveData]);

  // Mark as initialized after first render
  useEffect(() => {
    hasInitialized.current = true;
  }, []);

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