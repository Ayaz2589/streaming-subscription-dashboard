import { camelCaseToRegular, floatToDollar } from ".";

const transformDashboardData = (data: any) => {
  let monthlyCosts;

  if (data.hasOwnProperty('monthlyCosts')) {
    monthlyCosts = data['monthlyCosts']
  }

  const businessData = Object.entries(data)
    .filter((item) => item[0] !== 'monthlyCosts')
    .map((item) => {
      const [key, value] = item;

      if (key === 'remainingBalancePercentage') {
        return {
          title: camelCaseToRegular(key),
          value: `${value}%`,
          key
        };
      }

      return {
        title: camelCaseToRegular(key),
        value: floatToDollar(value),
        key
      };
    });

  return { businessData, monthlyCosts };
}

export default transformDashboardData;