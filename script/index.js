const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
 


window.addEventListener('resize',function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

}
);
const particlesArray=[];
let hue=0;
let i;
const mouse={
  x:null,
  y:null,
}

canvas.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;
  for(i=0;i<5;i++)
  {
    particlesArray.push(new Particle());
  }
 
 
});


class Particle{
  constructor(){
    this.x=mouse.x;
    this.y=mouse.y;
    this.size=Math.random()*15+1; //btw 1 and 16
    this.speedX=Math.random()*3-1.5; //btw -1.5 and 1.5
    this.speedY=Math.random()*3-1.5;
    this.color='hsl(' + hue + ',100%,50%)';
  }

update()
{
  this.x+=this.speedX;
  this.y+=this.speedY;
 if(this.size>0.2)this.size-=0.1;
}
draw()
{
  ctx.fillStyle=this.color; //(degree of colour 0-red 120-green 240-blue,saturation value(0%-grey 100%full colour),lightness(0-black)(100%-white))
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
  ctx.fill();
  
}
}

function handleParticles()
{
  for(let i=0;i<particlesArray.length;i++)
  {
    particlesArray[i].update();
    particlesArray[i].draw();
    if(particlesArray[i].size<=0.3){
      particlesArray.splice(i,1);
      
    }
  }
}
animate();
function animate(){
 ctx.fillStyle='rgba(0,0,0,0.099)';
 ctx.fillRect(0,0,canvas.width,canvas.height);
handleParticles();
hue++;
  requestAnimationFrame(animate);
}



