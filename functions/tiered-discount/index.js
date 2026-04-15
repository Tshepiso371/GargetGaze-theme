export function run(input) {

  const subtotal = input.cart.cost.subtotalAmount.amount;

  let discountPercentage = 0;

  if (subtotal >= 7000) {
    discountPercentage = 20;
  } else if (subtotal >= 3000) {
    discountPercentage = 15;
  } else if (subtotal >= 1000) {
    discountPercentage = 10;
  }

  if (discountPercentage === 0) {
    return {
      discounts: [],
      discountApplicationStrategy: "FIRST"
    };
  }

  return {
    discounts: [
      {
        value: {
          percentage: {
            value: discountPercentage
          }
        },
        targets: [
          {
            orderSubtotal: {
              excludedVariantIds: []
            }
          }
        ],
        message: `${discountPercentage}% off applied`
      }
    ],
    discountApplicationStrategy: "FIRST"
  };
}