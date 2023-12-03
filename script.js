const wrapper document.querySelector(".wrapper");
const question document.querySelector(".question");
const gif document.querySelector(".gif"); const yesBtn = document.querySelector(".yes-btn");
const noßtn document.querySelector(".no-btn");
yesBtn.addEventListener("click", () {
question. InnerHTML = "Aaaaa, I like you too agnii sayangg";
}); "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
gif.src =
noßtn.addEventListener("mouseover", () {
const noßtnRect noßtn.getBoundingClientRect(); const maxx window.innerWidth noßtnRect.width;
const maxy window.innerHeight noBtnRect.height;
const randomX = Math.floor(Math.random() maxx); const randomy = Math.floor(Math.random() maxY);
noßtn.style.left = randomX + "px";
noBtn.style.top randomy + "px"; 
});