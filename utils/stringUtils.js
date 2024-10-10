// utils/stringUtils.js

// Utility function to convert camelCase to readable format
export const camelCaseToReadable = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/^./, (char) => char.toUpperCase());
};
