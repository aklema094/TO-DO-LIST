const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

const btn = document.querySelector("#addBtn");

btn.addEventListener("click", addTask);

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
