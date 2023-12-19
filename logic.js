let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let winmsg=document.querySelector(".win-msg");
turn0=true;
win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let count=0;
let flag=0;
boxes.forEach((box) => {
    
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
            box.classList.remove("turn_color"); 
        }else{
            box.innerText="X"
            turn0=true;
            box.classList.add("turn_color");
            
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9&&!isWinner){
            draw();
        }
      
        
       
    });
    
});

const checkWinner = ()=>{
   win.forEach((pattern)=>{
    let pos1=boxes[pattern[0]-1].innerText;
    let pos2=boxes[pattern[1]-1].innerText;
    let pos3=boxes[pattern[2]-1].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("winner"+pos1);
            showWinner(pos1);
            boxes.forEach((box) => {
                box.disabled=true;
            })
            return true;
        }
    }
   }
   )
}
const showWinner=(winner)=>{
    msg.innerText=`The Winner is ${winner}`;
    winmsg.classList.remove("hide");
}
const enableBox=()=>{
    count=0;
   flag=0;
    boxes.forEach((box)=>{
        turn0=true;
        box.disabled=false;
        box.innerText="";
        winmsg.classList.add("hide");

    })
}
const draw=()=>{
    msg.innerText="The game is draw";
    winmsg.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled=true;
    })

}

resetBtn.addEventListener("click",()=>{
   enableBox();
    
});
