var ul = document.querySelector('#slider') 
var slideNumber = document.querySelector('#slider').childElementCount 
var li = document.querySelector('#slider>li') 
var firstItemClone = ul.firstElementChild.cloneNode(true); 
ul.appendChild(firstItemClone); ul.style.width = (slideNumber + 1) * 330 + 'px' 


function move(){ 
    var i = 0; 
    
    setInterval(function(){ 
        ul.style.transition = '1s';
         ul.style.transform = 'translate3d(-'+330*(i+1)+'px, 0px, 0px)'; 
         i++; 
         
         if (i == slideNumber){ 
             setTimeout(function(){ 
                 ul.style.transition = '0.5s'; 
                 ul.style.transform = "translate3d(0px, 0px, 0px)"; 
                },201)
                 i = 0; 
                } 
            },
        3000);
    } 
document.addEventListener("DOMContentLoaded",function(){ 
    move(); 
});


