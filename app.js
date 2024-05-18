
let userinput = document.getElementById("input")
let addbtn = document.querySelector("button")
let list = document.querySelector(".list")

function add(){
    let li = document.createElement("li");
    li.innerHTML = userinput.value;
    list.appendChild(li);
    userinput.value = "";

    let span = document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span);

   
}

addbtn.addEventListener("click", ()=>{
    if(userinput.value === ""){
        alert("please enter someting")
    }else{
        add();
    }
})

list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        console.log("event is working")
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})


