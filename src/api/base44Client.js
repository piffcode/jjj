import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68ec5c73ace6eaef6e8d3291", 
  requiresAuth: true // Ensure authentication is required for all operations
});
