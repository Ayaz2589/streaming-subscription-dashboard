const floatToDollar = (floatValue: any) => {
  const dollarString = floatValue.toFixed(2);
  return "$" + dollarString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default floatToDollar;