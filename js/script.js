let theme_button=document.querySelector('.header_i2');
let header=document.querySelector('header');
let body=document.querySelector('.body');
let title=document.querySelector('.title');
let links=document.querySelectorAll('.header_a');
let about=document.querySelectorAll('.about');
let slider_block=document.querySelector('.text_slider');
let anim_block=document.querySelector('.animation_text');
let burger=document.querySelector('.burger');
let footer=document.querySelector('footer');
let nav=document.querySelector('.navigation');
let bodypage=document.querySelector('body');
theme_button.onclick=function(){
    title.classList.toggle('title_dark');
    header.classList.toggle('dark');
    slider_block.classList.toggle('about_dark');
    anim_block.classList.toggle('about_dark');
    footer.classList.toggle('footer_dark');
    for (const i of links) {
        i.classList.toggle('light');
    }
}
burger.onclick = function () {
    nav.classList.toggle('flex');
    nav.classList.toggle('navigation');
};
let hovers=document.querySelectorAll(".group_research_img");
//
let img1=document.querySelector(".group_research_img1");
let img2=document.querySelector(".group_research_img2");
let img3=document.querySelector(".group_research_img3");
let img4=document.querySelector(".group_research_img4");
let img5=document.querySelector(".group_research_img5");
let img6=document.querySelector(".group_research_img6");
let img7=document.querySelector(".group_research_img7");
let img8=document.querySelector(".group_research_img8");
let img9=document.querySelector(".group_research_img9");
let img10=document.querySelector(".group_research_im10");

function changeImage(element, newSrc) {
    element.src = newSrc;
}

function restoreImage(element, originalSrc) {
    element.src = originalSrc;
}
