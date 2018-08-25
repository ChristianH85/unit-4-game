$(document).ready(function(){
    

let success = 0
let fail = 0
$(`.wins`).text(`Wins:`+ success)
$(`.losses`).text(`Losses:`+fail)

let emeraldNum = Math.floor(Math.random()*(12-1)+1)

let rubyNum= Math.floor(Math.random()*(12-1)+1)

let sapphireNum = Math.floor(Math.random()*(12-1)+1)
let diamondNum = Math.floor(Math.random()*(12-1)+1)
let currentTotal = 0
let newTotal = currentTotal
let randomNumber = Math.floor(Math.random()*(120-19)+19)

$(`.random`).text(`Magic Number: `+ randomNumber)
let reset= function(){
     randomNumber = Math.floor(Math.random()*(120-19)+19)
     emeraldNum = Math.floor(Math.random()*(12-1)+1)
     rubyNum = Math.floor(Math.random()*(12-1)+1)
     sapphireNum = Math.floor(Math.random()*(12-1)+1)
     diamondNum = Math.floor(Math.random()*(12-1)+1)
     currentTotal = 0
     $(`.random`).text(`Magic Number: `+ randomNumber)

}

let winner = function(){
    success++
    alert("Your win")
    $(`.wins`).text(`Wins: `+success)
    reset();

}
let loser = function(){
    fail++
    alert("You Lose")
    $(`.losses`).text(`Loses: `+fail)
    reset()
}

$(`.emerald`).on(`click`,function(){
    currentTotal = (currentTotal + emeraldNum)
    $(`.total`).text(`Current Total: ` + currentTotal)
    newTotal = currentTotal
    if(newTotal == randomNumber){
        
        winner();
     }
     else if(newTotal > randomNumber){
        
        loser();
       } 
})

$(`.ruby`).on(`click`,function(){
    currentTotal =currentTotal + rubyNum;
    $(`.total`).text(`Current Total: ` + currentTotal)
    newTotal = currentTotal
    if(newTotal == randomNumber){
        
        winner();
     }
     else if(newTotal > randomNumber){
        
        loser();
       } 
})
$(`.sapphire`).on(`click`,function(){
    currentTotal =currentTotal + sapphireNum;
    $(`.total`).text(`Current Total: ` + currentTotal)
    newTotal = currentTotal
    if(newTotal == randomNumber){
        
        winner();
     }
     else if(newTotal > randomNumber){
        
        loser();

       } 
})
$(`.diamond`).on(`click`,function(){
    currentTotal =currentTotal + diamondNum;
    $(`.total`).text(`Current Total: ` + currentTotal)
    newTotal = currentTotal
    if(newTotal == randomNumber){
        
        winner();
     }
     else if(newTotal > randomNumber){
        
        loser();
       } 
})
console.log(emeraldNum)
console.log(rubyNum)
console.log(sapphireNum)
console.log(diamondNum)
console.log(currentTotal)
 console.log(newTotal)   
}

//console.log(gemNumber2)
//console.log(gemNumber3)
//console.log(gemNumber4)
)