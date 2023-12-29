export const removeSymbols = (key: string) => {
  return key.replace(/[^a-zA-Zа-яА-Я]/g, '');
};
