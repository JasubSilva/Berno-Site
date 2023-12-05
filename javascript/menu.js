// function menuShow(){
//     let menuMobile=document.querySelector('.mobile-menu');
    
//     if(menuMobile.classList.contains('open')){
//         menuMobile.classList.remove('open');

//     } else{
//         menuMobile.classList.add('open');
//     }
// }

$(document).ready(function() {
    $("#mobile-menu").click(function() {
        $("#nav-menu").toggleClass("show");
    });
});