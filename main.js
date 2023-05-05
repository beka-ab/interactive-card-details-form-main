const imgCardNumber = document.querySelector(".card_number");
const confirmBtn = document.querySelector(".bottom_btn");
const cardNumberInput = document.querySelector(".name_input");
const cardHolder = document.querySelector(".name_span");
const CardHolderInput = document.querySelector(".Cardholder");
const cvc = document.querySelector(".cvc");
const cvcOnCard = document.querySelector(".card_cvc");
const monthOnCard = document.querySelector(".month");
const yearOnCard = document.querySelector(".year");
const monthInput = document.querySelector(".mm");
const yearInput = document.querySelector(".yy");
const infoDiv = document.querySelector(".info");
const afterConfDiv = document.querySelector(".after_confirm");
let regex = /\D/;
let cardNumber = "";
let cardHolderInner;
let cvcCard;
cardNumberInput.addEventListener("input", () => {
  if (/[0-9\s]/.test(cardNumberInput.value)) {
    // if (cardNumberInput.value > 16) {
    //   cardNumberInput.value = cardNumberInput.value.slice(0, 16);
    //   console.log("hey");
    console.log("includes");
  } else {
    console.log("doesn't include");
  }

  // cardNumber = cardNumberInput.value;
  // cardNumber = cardNumber.replace(/\s/g, "");
  // cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  // imgCardNumber.innerHTML = cardNumber;
  // }
  // console.log("baby");
});
CardHolderInput.addEventListener("input", () => {
  cardHolderInner = CardHolderInput.value;
  cardHolder.innerHTML = cardHolderInner;
  CardHolderInput.setAttribute("maxlength", "25");
});

cvc.addEventListener("input", () => {
  if (cvc.value > 3) {
    cvc.value = cvc.value.slice(0, 3);
  }
  cvcOnCard.innerHTML = cvc.value;
});
monthInput.addEventListener("input", () => {
  if (monthInput.value > 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }
  monthOnCard.innerHTML = monthInput.value;
});
yearInput.addEventListener("input", () => {
  if (yearInput.value.length >= 2) {
    yearInput.value = yearInput.value.slice(0, 2);
  }
  yearOnCard.innerHTML = yearInput.value;
});

confirmBtn.addEventListener("click", () => {
  if (cvc.value.length == 3) {
    infoDiv.classList.add("none");
    afterConfDiv.classList.add("inline");
  }
});
