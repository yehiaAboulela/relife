console.log(5465);
const firstBtn = document.querySelector("#first-article__btn");
const secondBtn = document.querySelector("#second-article__btn");
const thirdBtn = document.querySelector("#third-article__btn");

const secondArticle = document.querySelector("#second-article");
const thirdArticle = document.querySelector("#third-article");
const fourthArticle = document.querySelector("#fourth-article");

firstBtn.addEventListener("click", function () {
  secondArticle.scrollIntoView({ behavior: "smooth" });
});
secondBtn.addEventListener("click", function () {
  thirdArticle.scrollIntoView({ behavior: "smooth" });
});
thirdBtn.addEventListener("click", function () {
  fourthArticle.scrollIntoView({ behavior: "smooth" });
});
