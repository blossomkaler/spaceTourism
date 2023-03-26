const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.primary-navigation');

hamburger.addEventListener("click",function(){
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}
);
