var numberCounter=1
saveData = function(){
    var displayCounter = document.getElementById('counter')
    localStorage.setItem("counter",numberCounter)
    var currentValue=localStorage.getItem("counter")
    displayCounter.innerHTML=currentValue
    numberCounter++

}