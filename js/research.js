let theme_button = document.querySelector('.header_i2');
let header = document.querySelector('header');
let body = document.querySelector('.body');
let title = document.querySelector('.title');
let links = document.querySelectorAll('.header_a');
let about = document.querySelectorAll('.about');
let slider_block = document.querySelector('.text_slider');
let anim_block = document.querySelector('.animation_text');
let burger = document.querySelector('.burger');
let footer = document.querySelector('footer');
let nav = document.querySelector('.navigation');
let bodypage = document.querySelector('body');

theme_button.onclick = function () {
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
    nav.classList.toggle('navigation_burger');
}

let hovers = document.querySelectorAll(".group_research_img");

let img1 = document.querySelector(".group_research_img1");
let img2 = document.querySelector(".group_research_img2");
let img3 = document.querySelector(".group_research_img3");
let img4 = document.querySelector(".group_research_img4");
let img5 = document.querySelector(".group_research_img5");
let img6 = document.querySelector(".group_research_img6");
let img7 = document.querySelector(".group_research_img7");
let img8 = document.querySelector(".group_research_img8");
let img9 = document.querySelector(".group_research_img9");
let img10 = document.querySelector(".group_research_img10");

function changeImage(element, newSrc) {
    element.src = newSrc;
}

function restoreImage(element, originalSrc) {
    element.src = originalSrc;
}

//dream
document.getElementById('group_research_img_button_dream').addEventListener('click', function() {
    let floatingBlock = document.getElementById('dream_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    }
})
document.getElementById('closebutton_block1').addEventListener('click', function(){
    let floatingBlock = document.getElementById('dream_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//planning
document.getElementById('group_research_img_button_planning').addEventListener('click', function() {
    let floatingBlock = document.getElementById('planning_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block2').addEventListener('click', function(){
    let floatingBlock = document.getElementById('planning_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//inf_detox
document.getElementById('group_research_img_button_inf_detox').addEventListener('click', function() {
    let floatingBlock = document.getElementById('digital_hygiene_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block3').addEventListener('click', function(){
    let floatingBlock = document.getElementById('digital_hygiene_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})


//read
document.getElementById('group_research_img_button_read').addEventListener('click', function() {
    let floatingBlock = document.getElementById('read_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block5').addEventListener('click', function(){
    let floatingBlock = document.getElementById('read_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//write
document.getElementById('group_research_img_button_write').addEventListener('click', function() {
    let floatingBlock = document.getElementById('write_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block6').addEventListener('click', function(){
    let floatingBlock = document.getElementById('write_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})
//brain_errors
document.getElementById('group_research_img_button_brain_errors').addEventListener('click', function() {
    let floatingBlock = document.getElementById('brain_errors_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block5').addEventListener('click', function(){
    let floatingBlock = document.getElementById('brain_errors_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//effective_rest
document.getElementById('group_research_img_button_effective_rest').addEventListener('click', function() {
    let floatingBlock = document.getElementById('effective_rest_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block6').addEventListener('click', function(){
    let floatingBlock = document.getElementById('effective_rest_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//inf_dominant
document.getElementById('group_research_img_button_inf_dominant').addEventListener('click', function() {
    let floatingBlock = document.getElementById('inf_dominant_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block7').addEventListener('click', function(){
    let floatingBlock = document.getElementById('inf_dominant_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})
//motivation
document.getElementById('group_research_img_button_motivation').addEventListener('click', function() {
    let floatingBlock = document.getElementById('motivation_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block8').addEventListener('click', function(){
    let floatingBlock = document.getElementById('motivation_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//social_around
document.getElementById('group_research_img_button_social_around').addEventListener('click', function() {
    let floatingBlock = document.getElementById('social_around_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block9').addEventListener('click', function(){
    let floatingBlock = document.getElementById('social_around_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//sport_activity
document.getElementById('group_research_img_button_sport_activity').addEventListener('click', function() {
    let floatingBlock = document.getElementById('sport_activity_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block10').addEventListener('click', function(){
    let floatingBlock = document.getElementById('sport_activity_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//intelligence
document.getElementById('group_research_img_button_intelligence').addEventListener('click', function() {
    let floatingBlock = document.getElementById('intelligence_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block11').addEventListener('click', function(){
    let floatingBlock = document.getElementById('intelligence_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//palaces_of_mind
document.getElementById('group_research_img_button_palaces_of_mind').addEventListener('click', function() {
    let floatingBlock = document.getElementById('palaces_of_mind_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block12').addEventListener('click', function(){
    let floatingBlock = document.getElementById('palaces_of_mind_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})

//illusion_of_meaning
document.getElementById('group_research_img_button_illusion_of_meaning').addEventListener('click', function() {
    let floatingBlock = document.getElementById('illusion_of_meaning_research');
    if (floatingBlock.style.display === 'none' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'block';
    } else {
        floatingBlock.style.display = 'none';
    } 
})
document.getElementById('closebutton_block13').addEventListener('click', function(){
    let floatingBlock = document.getElementById('illusion_of_meaning_research');
    if (floatingBlock.style.display === 'block' || floatingBlock.style.display === '') {
        floatingBlock.style.display = 'none';
    } else {
        floatingBlock.style.display = 'block';
    }
})