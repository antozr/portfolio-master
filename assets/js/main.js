"use stricts"; 


var tagResponsive = document.getElementById('responsive');
var allCard = document.querySelectorAll('.sect__project');
var jsBtn = document.getElementById('jsbtn');
/*tagResponsive.addEventListener('click', ()=>{
    console.log('hello');
    console.log(tagResponsive.value);
    console.log(allCard);
    let varAli = allCard[0].childNodes[3].childNodes[1].textContent;
    console.log(varAli);
});*/
var btnMenu = document.querySelector('.head__btn');
var tagFirstResponsive = document.querySelectorAll('.responsive--tag');
var sect__spanNb = document.querySelector('.sect__spanNb');
var headLink = document.querySelectorAll('.head__link');
var btnBox = document.querySelectorAll('.head__btnBox');
var headNav = document.querySelector('.head__nav');
var headList = document.querySelector('.head__list');

sect__spanNb.innerHTML = tagFirstResponsive.length;

tagResponsive.addEventListener('click', ()=>{
    let i = 0;
    tagFirstResponsive.forEach(el =>{
        if(el.classList.contains('responsive--tag')){
            console.log('ok');
            el.classList.remove('sect__project--none');
            i++;
        }else{
            el.classList.add('sect__project--none');
        }
    });
    sect__spanNb.innerHTML = i;
});

jsBtn.addEventListener('click', ()=>{
    let i = 0;
    tagFirstResponsive.forEach(el =>{
        if(el.classList.contains('js--tag')){
            console.log('ok');
            el.classList.remove('sect__project--none');
            i++;
            
        }else{
            el.classList.add('sect__project--none');
        }
    });
    
    sect__spanNb.innerHTML = i;
});
console.log(tagFirstResponsive);


btnMenu.addEventListener('click', ()=>{
    


    if(btnMenu.classList.contains('head__btn--open')){
        btnBox.forEach(el => {
            el.classList.remove('head__btnBox--open');
        });
        btnMenu.classList.remove('head__btn--open');
        headNav.classList.remove('head__nav--actif');
        headList.classList.remove('head__list--actif');
        headLink.forEach(el => {
            el.classList.remove('head__link--actif');
        });
    }else{
        btnBox.forEach(el => {
            el.classList.add('head__btnBox--open');
        });
        btnMenu.classList.add('head__btn--open');
        headNav.classList.add('head__nav--actif');
        headList.classList.add('head__list--actif');
        headLink.forEach(el => {
            el.classList.add('head__link--actif');
        });
    }
});

headLink.forEach(el =>{
    el.addEventListener('click', (e)=>{
        headNav.classList.add('head__nav--anim');
       headNav.addEventListener('animationend', (e)=>{
        
        btnBox.forEach(el => {
            el.classList.remove('head__btnBox--open');
        });
        btnMenu.classList.remove('head__btn--open');
        headNav.classList.remove('head__nav--actif');
        headList.classList.remove('head__list--actif');
        headNav.classList.remove('head__nav--anim');
        headLink.forEach(el => {
            el.classList.remove('head__link--actif');
        });
       })
    });
});