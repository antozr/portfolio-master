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

var tagFirstResponsive = document.querySelectorAll('.responsive--tag');
var sect__spanNb = document.querySelector('.sect__spanNb');

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
})
console.log(tagFirstResponsive);
