document.addEventListener("DOMContentLoaded",()=>{
    let table=document.getElementById("ping-pong-table")
    let ball=document.getElementById("ball");
    //Here the ball x and ball y will be helping to set a starting point of ball w.r.t table
    let ballX=10;//distance of the top of the ball w.r.t. ping pong table
    let ballY=10;//distance of the left of the ball w.r.t. ping pong table

    let dx=2;//displacement factor in x-direction
    let dy=2;//displacement factor in y-direction

    ball.style.left=`${ballX}px`;
    ball.style.top=`${ballY}px`;
    setInterval(function exec(){
        ballX+=dx;
        ballY+=dy;

        ball.style.left=`${ballX}px`; 
        ball.style.top=`${ballY}px`; 

        if(ballX>table.offsetWidth-ball.offsetWidth || ballX<=0) dx*=-1;
        if(ballY>table.offsetHeight-ball.offsetHeight || ballY<=0) dy*=-1;
    },1)
});