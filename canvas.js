var myCanvas = document.getElementById("artBoard")

var canvas = myCanvas.getContext("2d")

/*canvas.moveTo(0,0)
canvas.lineTo(500,500)
canvas.stroke()*/

/*canvas.strokeText("Hello text",0,0)
canvas.strokeText("Hello Text",100,100)*/

canvas.beginPath()
canvas.arc(200,200,100,0,360,false)
canvas.stroke()

canvas.moveTo(185,170)
canvas.arc(165,165,20,0,180,false)
canvas.stroke()

canvas.moveTo(255,150)
canvas.arc(240,165,20,0,180,false)
canvas.stroke()



                              