
export const setAuthToken = (token: string): void => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('authToken', JSON.stringify(token));
    }
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    const authToken = localStorage?.getItem('authToken');
    return authToken !== null ? JSON.parse(authToken) : null;
  }
  return null;
};

export const setAdminName = (adminName: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminName', JSON.stringify(adminName));
  }
};

export const getAdminName = (): string | null => {
  if (typeof window !== 'undefined') {
    const adminName = localStorage?.getItem('adminName');
    return adminName !== null ? JSON.parse(adminName) : null;
  }
  return null;
};

// export const convertToFormData = (object: Record<string, string | Blob> | ClubModalData): FormData => {
//   const formData = new FormData();
//   Object.entries(object).forEach(([key, value]) => {
//     formData.append(key, value);
//   });
//   return formData;
// }



