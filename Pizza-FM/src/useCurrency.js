const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const useCurrency = (value) => {
  return intl.format(value);
};

export default useCurrency;
