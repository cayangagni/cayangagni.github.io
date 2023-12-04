const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, i luvv youu too agniii";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

nobtn.addEventListener("mouseover", () => {
  const noBBtnReact = nobtn.getBoundingClientReact();
  const maxX = window.innerWidth - noBBtnReact.width;
  const maxY = window.innerHeight - noBBtnReact.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";
});
