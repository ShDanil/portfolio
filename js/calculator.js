const technologiesSelect = document.querySelector(
  "#calculator-form-technologies"
);

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

calculateSum();

const calculatorForm = document.querySelector(".calculator-form");

calculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateSum();
});

function calculateSum() {
  // Selectors
  const websiteTypeSelect = document.querySelector(
    "#calculator-form-website-type"
  );

  const websiteCart = document.querySelector(
    "#calculator-form-input-cart input:checked"
  );

  const websiteReception = document.querySelector(
    "#calculator-form-reception input:checked"
  );

  //Values
  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
  const technologiesValue = getTechnologiesSum(
    technologiesMultiSelect.getValue()
  );
  const websiteCartValue = convetCartOptionToPrice(websiteCart.value);
  const websiteReceptionValue = convetReceptionOptionToPrice(
    websiteReception.value
  );

  const totalSum =
    websiteTypeValue +
    technologiesValue +
    websiteCartValue +
    websiteReceptionValue;

  renderSum(totalSum);
}

function renderSum(sum) {
  const totalCostElement = document.querySelector(
    ".calculator-form-total-cost"
  );

  totalCostElement.textContent = "Calculating...";

  setTimeout(() => (totalCostElement.textContent = `${sum}$`), 1500);
}

function convetCartOptionToPrice(option) {
  if (option === "yes") {
    return 300;
  }

  return 0;
}

function convetReceptionOptionToPrice(option) {
  if (option === "yes") {
    return 500;
  }

  return 0;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}

function getTechnologiesSum(technologiesArr) {
  let totalSumm = 0;
  technologiesArr.forEach((technology) => {
    totalSumm = totalSumm + extractPriceFromValue(technology.value);
  });

  return totalSumm;
}
