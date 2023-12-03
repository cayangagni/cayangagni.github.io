const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, i luvv youu too Agniiii";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

nobtn.addEventListener("click", () => {
  const noBtnReact = nobtn.getBoundingClientReact();
  const maxX = window.innerWidth - noBtnReact.width;
  const maxY = window.innerHeight - noBtnReact.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";
});
