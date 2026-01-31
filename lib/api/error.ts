import axios from 'axios';

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    return status ? `${error.message} (HTTP ${status})` : error.message;
  }

  if (error instanceof Error) return error.message;

  return 'Request failed';
}