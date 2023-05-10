const imgCardNumber = document.querySelector(".card_number");
const confirmBtn = document.querySelector(".bottom_btn");
let cardNumberInput = document.querySelector(".name_input");
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
const wrongNumber = document.querySelector(".wrong_number");
const yyerror = document.querySelector(".yyerror");
const mmerror = document.querySelector(".mmerror");
const cvcerror = document.querySelector(".cvcerror");
let regex = /\D/;
let cardNumber = "";
let cardHolderInner;
let cvcCard;
cardNumberInput.addEventListener("input", () => {
  if (cardNumberInput.value > 16) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 16);
  }
  cardNumber = cardNumberInput.value;
  cardNumber = cardNumber.replace(/\s/g, "");
  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  imgCardNumber.innerHTML = cardNumber;
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
console.log(cardHolderInner);

confirmBtn.addEventListener("click", () => {
  if (cardNumberInput.value.length !== 16 || /\D/.test(cardNumberInput.value)) {
    wrongNumber.classList.add("inline");
    cardNumberInput.classList.add("error");
  }
  if (monthInput.value.length !== 2) {
    monthInput.classList.add("error");
    mmerror.classList.add("inline");
  }
  if (yearInput.value.length !== 2) {
    yearInput.classList.add("error");
    yyerror.classList.add("inline");
  }
  if (cvc.value.length !== 3) {
    cvc.classList.add("error");
    cvcerror.classList.add("inline");
  }
  if (
    cardNumberInput.value.length === 16 &&
    !/\D/.test(cardNumberInput.value) &&
    monthInput.value.length === 2 &&
    yearInput.value.length === 2 &&
    cvc.value.length === 3
  ) {
    wrongNumber.classList.add("inline");
    cardNumberInput.classList.add("error");
    infoDiv.classList.add("none");
    afterConfDiv.classList.add("inline");
  }
});
