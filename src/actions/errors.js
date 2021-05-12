export const ERROR_ADD = "ERROR_ADD";

export function addError(error) {
  return {
    type: ERROR_ADD,
    error,
  };
}
