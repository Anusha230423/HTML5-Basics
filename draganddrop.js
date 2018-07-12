dragStartNow = function(e){
    console.log("On Drag event is called")
    e.dataTransfer.setData("sourceId",e.target.id)
}

dragOverNow = function(e){
    e.preventDefault()
    console.log("dragging")
}

dropNow = function(e){
    e.preventDefault()
    console.log("I am being dropped on div2")
    var temp = e.dataTransfer.getData("sourceId")
    console.log("______________________________________________")
    console.log(temp)
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)
}