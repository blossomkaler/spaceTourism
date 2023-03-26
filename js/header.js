const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.primary-navigation');
const cross = document.querySelector('.close-menu');

hamburger.addEventListener("click",function(){
    navbar.classList.add('active');
    hamburger.classList.add('active');
}
);

cross.addEventListener("click",function(){
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
}
);
