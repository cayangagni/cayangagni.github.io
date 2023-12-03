const wrapper document.querySelector(".wrapper");
const question document.querySelector(".question");
const gif document.querySelector(".gif"); const yesBtn = document.querySelector(".yes-btn");
const noBtn document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
question. InnerHTML = "Aaaaa, I like you too agnii sayangg";
gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});
noBtn.addEventListener("mouseover", () => {
const noBtnRect noBtn.getBoundingClientRect(); const maxx window.innerWidth noBtnRect.width;
const maxy window.innerHeight noBtnRect.height;
const randomX = Math.floor(Math.random() + maxx); const randomy = Math.floor(Math.random() + maxy);
noBtn.style.left = randomx + "px";
noBtn.style.top randomy + "px"; 
});
