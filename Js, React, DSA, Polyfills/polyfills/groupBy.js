const inventory = [
  {
    name: "Mango",
    type: "fruit",
    quantity: "50kg",
    price: 100,
  },
  {
    name: "Banana",
    type: "fruit",
    quantity: "150kg",
    price: 40,
  },
  {
    name: "Tomato",
    type: "vegetable",
    quantity: "20kg",
    price: 20,
  },
  {
    name: "Potato",
    type: "vegetable",
    quantity: "30kg",
    price: 30,
  },
  {
    name: "Lemon",
    type: "vegetable",
    quantity: "5kg",
    price: 60,
  },
  {
    name: "Cucumber",
    type: "salad",
    quantity: "10kg",
    price: 100,
  },
  {
    name: "Onion",
    type: "salad",
    quantity: "10kg",
    price: 10,
  },
];

const groupBy = function (values, keyFinder) {
  return values.reduce((initObj, current) => {
    const key =
      typeof keyFinder === "function" ? keyFinder(current) : current[keyFinder];

    // aggregate values based on key
    if (initObj[key]) {
      initObj[key] = [...initObj[key], current];
    } else {
      initObj[key] = [current];
    }
    return initObj;
  }, {});
};

const res = groupBy(inventory, ({ type }) => type);
console.log(res);
