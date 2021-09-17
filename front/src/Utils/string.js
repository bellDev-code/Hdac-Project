export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const krwConvertor = (num) => {
  return `${numberWithCommas(num)}원`;
};
