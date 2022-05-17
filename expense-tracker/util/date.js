export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${getCorrectValue(
    date.getMonth() + 1
  )}-${getCorrectValue(date.getDate())}`;
};

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

const getCorrectValue = (value) => {
  return value.toString().length === 1 ? `${0}${value}` : value;
};
