const cards = document.querySelectorAll(".card")
let timetext = document.getElementById("time");
let scoretext = document.getElementById("score");
let started=false;
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        if(!started){
            checkcards(card);
        }

    })
})

let time=0;
let score = 0;
let sequence=[];

const checkcards=(card)=>{
    console.log(card.classList);
  if(card.classList.value.split(" ").filter((el)=>el=="done").length<1){
    let text=card.querySelector(".card-back").innerText;
    card.classList.add("isflipped");
    if(sequence.length==1){
        started=true;
        sequence.push({text,card});
        console.log(sequence);
        if(sequence[0].text==text){
            
            score++;
            if(score==6){
                scoretext.innerHTML="You Win !"
            }else{
                scoretext.innerHTML=`Score = ${score}`
            }
            removeClass(true) 
        }else{
            removeClass(false);
        }

    }else if(sequence.length==0){
        sequence.push({text,card});
    }
  }  
}

const removeClass = (a) =>{
    if(a===true){
        sequence.forEach((el)=>el.card.classList.add("done"));
        sequence=[];
        started=false;
        return;
    }
    setTimeout(()=>{
        sequence.forEach((el)=>el.card.classList.remove("isflipped"));
        sequence=[];
        started=false;
    },650) 

}

setInterval(()=>{
    if(score!=6){
        time++;
        timetext.innerHTML=`${time}`;
    }

},1000)