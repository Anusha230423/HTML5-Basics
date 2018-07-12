var inputValue=document.getElementById("taskValueId")
var counter = 1
addTask = function(){
    if(localStorage.getItem("taskCounter") === null){
        localStorage.setItem("taskCounter", counter)
    }else{
        counter = localStorage.getItem("taskCounter")
    }
    var currentTask = inputValue.value
    console.log("saving the todo to local storage")
    localStorage.setItem("task_" + counter,currentTask)
    inputValue.value=""
    localStorage.setItem("taskCounter",++counter)
    loadTask()
    
}

function loadTask(){
    console.log("loading task")
    var container = document.getElementById("taskContainer")
    container.innerHTML = ""
    var newul = document.createElement("ol")
    container.appendChild(newul)
    document.getElementById("taskContainer").appendChild(newul)

    var maxCounter = localStorage.getItem("taskCounter")
    for(var i=1;i<maxCounter;i++){
        var newli = document.createElement("li")
        var currentTask = localStorage.getItem("task_"+i)
        newli.innerHTML = currentTask
        newul.appendChild(newli)
    }
}

loadTask()
