const symbol_dict = {
    Ethereum: "ETH",
    Bitcoin: "BTC",
    Cardano: "ADA"
  };

const getKrakenData = async (currency) => {
  const response = await fetch(
    "https://api.kraken.com/0/public/Ticker?pair=" +
      symbol_dict[currency] +
      "USD"
  );

  let resJson = await response.json();
  resJson = resJson.result;

  let dataKey = Object.keys(resJson)[0]; // this is needed because of the nested format of the response json

  let buy = resJson[dataKey].a[0];
  let sell = resJson[dataKey].b[0];

  return { buy, sell };
};

export { getKrakenData };
