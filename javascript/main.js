const socialBarAvatar = document.querySelector(".social");
const socialBarIcons = document.querySelector(".social-icons");
const shareBtn = document.querySelector(".social__btn");
const shareBtnTwo = document.querySelector(".active-btn");

const toggleHandler = () => {
  socialBarAvatar.style.display = "none";
  socialBarIcons.style.display = "flex";
};

const toggleHanderTwo = () => {
  socialBarIcons.style.display = "none";
  socialBarAvatar.style.display = "flex";
};

shareBtn.addEventListener("click", toggleHandler);
shareBtnTwo.addEventListener("click", toggleHanderTwo);
