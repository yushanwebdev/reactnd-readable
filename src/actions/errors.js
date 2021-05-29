export const ERROR_ADD = "ERROR_ADD";

export function addError(
  error = "Network Error when attempting to fetch resource"
) {
  return {
    type: ERROR_ADD,
    error,
  };
}
