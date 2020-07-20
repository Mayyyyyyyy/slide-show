var items=document.querySelector(".items").children;
var left=document.querySelector(".left");
var right=document.querySelector(".right");
var index=0;


left.onclick = function(){
    toNext("left");
}

right.onclick = function(){
    toNext("right");
}

function toNext(direction){
    if(direction=="right"){
        index++;
        if(index==items.length){
            index=0;
        }
    }else{
        if(index==0){
            index=items.length-1;
        }else{
            index--;
        }
    }

    for(i=0; i<items.length ;i++){
        items[i].classList.remove("active");
    }
    items[index].classList.add("active");
}