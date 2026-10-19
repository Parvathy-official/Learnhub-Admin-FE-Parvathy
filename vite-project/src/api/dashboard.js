import { apiClient } from './client';

export const dashboardApi = {
  getStats: async () => {
    return apiClient('/dashboard/stats/', { method: 'GET' });
  },
};
