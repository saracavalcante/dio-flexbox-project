const btnMobile = document.getElementById('btn-mobile'); 

function toogleMenu() {
    const mobileNav = document.getElementById('mobile__nav');

    const btn = document.getElementById('btn-mobile');
    
    mobileNav.classList.toggle('active');
    btn.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);