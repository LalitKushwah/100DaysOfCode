let mobileNav = document.querySelector('.mobile-nav');
let webNav = document.querySelector('#web-nav');
let toggleButton = document.querySelector('.toggle-button')

toggleButton.addEventListener('click', () => {
    // webNav.style.display = 'none';
    mobileNav.style.display = 'block';
})

