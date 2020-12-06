function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // дополни эту строку

  return isInRange;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки

  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }

  // Пиши код выше этой строки
  return discount;
}
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  let message =
    ordered > available
      ? "На складе недостаточно товаров!"
      : "Заказ оформлен, с вами свяжется менеджер";

  // Пиши код выше этой строки
  return message;
}

function checkStorage(available, ordered) {
  const message =
    ordered > available
      ? "На складе недостаточно товаров!"
      : "Заказ оформлен, с вами свяжется менеджер";
  return message;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
    case null:
      message = "Отменено пользователем!";
      break;

    case ADMIN_PASSWORD:
      message = "Добро пожаловать!";
      break;
    default:
      message = "Доступ запрещён, неверный пароль!";
  }
}

function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  switch (country) {
    case "Китай":
      message = `Доставка в ${country} будет стоить 100 кредитов`;
      break;
    case "Чили":
      message = `Доставка в ${country} будет стоить 250 кредитов`;
      break;

    case "Австралия":
      message = `Доставка в ${country} будет стоить 170 кредитов`;
      break;
    case "Ямайка":
      message = `Доставка в ${country} будет стоить 120 кредитов`;
      break;
    default:
      message = "Извините, в вашу страну доставки нет";
  }
  // Пиши код выше этой строки
  return message;
}

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки

  let formatedMessage = message.toLowerCase();

  if (formatedMessage.includes("spam")) {
    result = true;
  } else if (formatedMessage.includes("sale")) {
    result = true;
  } else {
    result = false;
  }

  // Пиши код выше этой строки
  return result;
}
