const MONEY_COMMA = /\B(?=(\d{3})+(?!\d))/g;
const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getMoneyComma = (money?: number): string => {
  if (typeof money !== 'number') return '';

  return money.toString().replace(MONEY_COMMA, ',');
};

export const isEmail = (email: string) => EMAIL.test(email);
