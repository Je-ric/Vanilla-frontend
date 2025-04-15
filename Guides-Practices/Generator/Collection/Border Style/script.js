document.addEventListener("DOMContentLoaded",()=>{


const container=document.getElementById("container");
const borderInput=document.getElementById("border");
const pixels=document.getElementById("pixels");
const code=document.getElementById("code");
const copy=document.getElementById("copy");
const select=document.getElementById("select");
const color=document.getElementById("color");

let val=3


startFunction()
function startFunction(){
    val=borderInput.value;
    pixels.innerText=val+"px";
    let codingMSG=`border:${val}px ${select.value} ${color.value};`
    code.style.color="blue"
    code.innerHTML=codingMSG;
    container.style.cssText=codingMSG;    //boder-size

    color.innerHTML=`${color.value}`
    

    copy.addEventListener("click",()=>{
        document.querySelector("textarea").select();
        document.execCommand("copy");
        
    })

}


select.addEventListener("click",startFunction)           //drop-down event
borderInput.addEventListener("mousemove",startFunction); //border-size event
borderInput.addEventListener("change",startFunction);    // same
color.addEventListener("input",startFunction)
})


