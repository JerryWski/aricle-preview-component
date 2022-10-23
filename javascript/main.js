const socialBarAvatar = document.querySelector('.avatar-icon');
const socialBarIcons = document.querySelector('.social-icons');
const shareBtn = document.querySelector('.social__btn');
const activeBar = document.querySelector('.active')




shareBtn.addEventListener('click', () => {
    if(activeBar.classList.contains('active')) {
        socialBarIcons.style.display='flex'
    }
})

