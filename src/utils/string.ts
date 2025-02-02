export const getRandomString = (length = 12) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

export const getRandomUUID = () => {
  if (!window) {
    console.warn('Application is not running in browser, crypto is not available!');

    return '8d23b9f9-dd50-4d31-9000-3fa1cee1d033';
  }

  return window.crypto.randomUUID();
};

export const getCapitalizedString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getSafeArrayFromString = (value: string) => {
  if (value === '') return [];

  return value.split(',');
};
