const toggleButton = document.getElementsByClassName('hamburger')[0];
const narBarLink = document.getElementsByClassName('nav-bar')[0];

toggleButton.addEventListener('click', function(){
    narBarLink.classList.toggle('active')
})