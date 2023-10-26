var topMenu= document.querySelector('.header');
window.onscroll = function () {
    if(scrollY > 100){
        topMenu.classList.add('fixed');
       
    }
    else{
        topMenu.classList.remove('fixed')
    }
}
var mobileNav = document.querySelector('.mobile-nav'),
button = document.querySelector('.navbar-toggler'),
close = document.getElementById('close')
button.onclick = function () {
    mobileNav.style.width = '100%';
    mobileNav.style.display='block';
}
close.onclick = function (){
    mobileNav.style.display='none';
};
//counter
var count= document.querySelectorAll('.counter');
var section = document.querySelector('.about'),
started = false;
window.onscroll = function () {
    if(window.scrollY >= section.offsetTop){
        if(!started){
            count.forEach((num) => startCount(num))
        }
        started = true;
    }
};

function startCount(element){
    var countValue = element.dataset.value;
    var counter = setInterval(() => {
        element.textContent++;
        if(element.textContent == countValue){
            clearInterval(counter);
        }
    },1000 /countValue )
};


function show(any) {
    document.querySelector('.selectText').value = any;
    var drp = document.querySelector('.form-select');
    
    drp.onclick= function(){
    drp.classList.toggle('down');
    console.log(drp)
    }

    
}