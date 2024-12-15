const myslide = document.querySelectorAll('.myslide'),
      dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}
function slidefun(n) {
    
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.opacity = "0";
        myslide[i].style.left = "1900" + 'px';
    }
    for(i = 0;i<dot.length;i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    if(n > myslide.length){
       counter = 1;
       }
    if(n < 1){
       counter = myslide.length;
       }
    myslide[counter - 1].style.opacity = "1";
    myslide[counter - 1].style.left = "0";
    dot[counter - 1].className += " active";
}
const elements = document.getElementsByClassName('days')
for(i = 0 ; i < elements.length;i++){
	elements[i].addEventListener('mousedown', showMe)
	elements[i].addEventListener('mouseleave', hideMe)
}

function showMe(){
	if(this.children.length > 1){
		this.children[1].style.height = 'auto'
		this.children[1].style.opacity = '1'
		this.children[1].style.overflow = 'visible'
		this.children[1].style.transition = '0.6s'
	}
}

function hideMe(){
	if(this.children.length > 1){
		this.children[1].style.height = '0'
		this.children[1].style.opacity = '0'
		this.children[1].style.overflow = 'hidden'
		this.children[1].style.transition = '0.6s'
	}
}

let offset = 0
const sliderLine= document.querySelector('.sliderline')

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 1550
    if (offset > 1550){
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.prev').addEventListener('click', function(){
    offset = offset - 1550
    if (offset < 0){
        offset = 1550
    }
    sliderLine.style.left = -offset + 'px'
})

$(function () {
  $(document).click((e) => {
    const {target} = e;
    if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});