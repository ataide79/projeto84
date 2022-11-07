

var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");
var cor="green";
var lar=1;
var ultpx ,ultpy;
 
canvas.addEventListener("touchstart", touchstart);
function touchstart(event)
{
  cor=document.getElementById("cor").value;
  lar=document.getElementById("largura").value;
   ultpx=event.touches[0].clientX-canvas.offsetLeft;
   ultpy=event.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove", touchmove);
function touchmove(event)
{
  var posix=event.touches[0].clientX-canvas.offsetLeft;
  var posiy=event.touches[0].clientY-canvas.offsetTop;
  
    contexto.beginPath();
    contexto.strokeStyle=cor;
    contexto.lineWidth=lar;
    contexto.moveTo(ultpx,ultpy);
    contexto.lineTo(posix,posiy);
    contexto.stroke();

  
ultpx=posix;
ultpy=posiy;

}
function pagar(){
  contexto.clearRect(0,0,contexto.canvas.width, contexto.canvas.height ); 

}