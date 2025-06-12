// Simple Template Engine
// Handles variable substitution in email templates

export interface TemplateVariables {
  [key: string]: string | undefined | null;
}

/**
 * Replaces template variables in the format {{variableName}} with actual values
 * @param template - The template string with placeholders
 * @param variables - Object containing variable values
 * @returns The template with variables replaced
 */
export const renderTemplate = (template: string, variables: TemplateVariables): string => {
  let result = template;

  // Replace all {{variableName}} placeholders
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    const replacementValue = value || 'Não fornecido';
    result = result.replace(placeholder, replacementValue);
  });

  // Handle conditional blocks {{#if variableName}}...{{/if}}
  result = processConditionalBlocks(result, variables);

  return result;
};

/**
 * Processes conditional blocks in templates
 * Supports {{#if variableName}}...{{/if}} syntax
 */
const processConditionalBlocks = (template: string, variables: TemplateVariables): string => {
  const conditionalRegex = /{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g;
  
  return template.replace(conditionalRegex, (match, variableName, content) => {
    const variableValue = variables[variableName];
    // Show content if variable exists and is not empty
    if (variableValue && variableValue.trim() !== '') {
      return content;
    }
    return ''; // Hide content if variable is empty or undefined
  });
};

/**
 * Sanitizes variables to prevent XSS attacks in email content
 * @param variables - Raw variables object
 * @returns Sanitized variables object
 */
export const sanitizeVariables = (variables: TemplateVariables): TemplateVariables => {
  const sanitized: TemplateVariables = {};
  
  // Variables that contain safe HTML and should not be sanitized
  const safeHtmlVariables = ['studentPhotoDisplay'];
  
  Object.entries(variables).forEach(([key, value]) => {
    if (value) {
      if (safeHtmlVariables.includes(key)) {
        // Don't sanitize safe HTML variables
        sanitized[key] = value;
      } else {
        // Basic HTML escape for email safety
        sanitized[key] = value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          // Convert line breaks to HTML for email display
          .replace(/\n/g, '<br>');
      }
    } else {
      sanitized[key] = value;
    }
  });
  
  return sanitized;
};

/**
 * Renders an email template with variables and sanitization
 * @param template - The HTML template string
 * @param variables - Variables to substitute
 * @param sanitize - Whether to sanitize variables (default: true)
 * @returns Rendered HTML content
 */
export const renderEmailTemplate = (
  template: string, 
  variables: TemplateVariables, 
  sanitize: boolean = true
): string => {
  const processedVariables = sanitize ? sanitizeVariables(variables) : variables;
  return renderTemplate(template, processedVariables);
};

export default {
  renderTemplate,
  renderEmailTemplate,
  sanitizeVariables
}; 