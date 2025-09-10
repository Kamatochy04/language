export const setSessionStorage = (key: string, data: any) => {
  sessionStorage.setItem(key, data);
};

export const getSessinStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
