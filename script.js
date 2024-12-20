document.addEventListener("DOMContentLoaded",()=>{
    let table=document.getElementById("ping-pong-table")
    let ball=document.getElementById("ball");
    let paddle=document.getElementById("paddle");


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

        //collision of ball and paddle

        if(ballX<paddle.offsetLeft+paddle.offsetWidth &&
             ballY>paddle.offsetTop 
            && ballY+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight){
            dx*=-1;
        }

        if(ballX>table.offsetWidth-ball.offsetWidth || ballX<=0) dx*=-1;
        if(ballY>table.offsetHeight-ball.offsetHeight || ballY<=0) dy*=-1;        
    },1);

    let paddleY=0;
    let dPy=10; //displacement for paddle in Y direction
    document.addEventListener("keydown",(event)=>{
        if(event.keyCode==38 && paddleY>0){
            paddleY+=(-1)*dPy;
        }else if(event.keyCode==40 && paddleY<table.offsetHeight-paddle.offsetHeight){
            //down arrow
            paddleY+=dPy;  
        }
        paddle.style.top=`${paddleY}px`;
    });

    document.addEventListener("mousemove",(event)=>{
        let mouseDistanceFromTop=event.clientY;// This is the distance of the mouse point from the top of the screen
        let distanceOftableFromTop=table.offsetTop;
        let mousePointControl=mouseDistanceFromTop-distanceOftableFromTop-paddle.offsetHeight/2;
        paddleY=mousePointControl;
        if(paddleY<=0 || paddleY>table.offsetHeight-paddle.offsetHeight) return;//If bottom of the paddle touches bottom of the table
        paddle.style.top=`${paddleY}px`;
    });

});