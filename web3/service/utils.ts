export const ethereumDateToJsDate = (ethereumTimestamp: string): string => {
  return new Date(parseInt(ethereumTimestamp) * 1000).toLocaleString();
};