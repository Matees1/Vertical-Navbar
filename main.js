const els = document.getElementsByClassName("navbar-item");
let activeEl = document.getElementsByClassName("active");

function onClickEl(el){
    if(activeEl != el) {
        console.log(el);
        console.log(activeEl[0]);
        console.log("------------------------------");
        activeEl[0].classList.remove("active");
        el.classList.add("active");
        console.log(el);
        console.log(activeEl[0]);
    }

}

for (let i = 0; i < els.length; i++){
    let val = els[i];
    els[i].addEventListener('click', function(){
        onClickEl(val);
    }, false);
}