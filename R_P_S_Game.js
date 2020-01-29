
// function getRandomInteger(min,max){
//     let rand=Math.random();
//     let rand_integer=rand * (max - min) + min;
//     rand_integer =Math.round(rand_integer);
//     return rand_integer
// }
// let oyun = ["qaya" , "kagiz" , "qayci"];
// let tesadufiReqem= getRandomInteger(1,3);
// console.log(oyun[tesadufiReqem]);




let variants = ["r", "s", "p"];
let UserScore = 0;
let CompScore = 0;
let beraberlik = 0;



function getRandomInteger(min, max) {
    let rand_integer = Math.round(Math.random() * (max - min) + min)
    return rand_integer
}


    document.onkeyup = function (e) {
    let userCChoice = e.key;
    document.getElementById("userChoice").innerHTML = "USER CHOICE: " + userCChoice;
    
    let i = getRandomInteger(0, variants.length -1)
    
    let Compchoice = variants[i]
    document.getElementById("comptChoice").innerHTML="COMPUTER CHOICE: " + Compchoice
    
    if (userCChoice !== "r" && userCChoice !== "p" && userCChoice !== "s"){
        return false;    
    }
    
    if (userCChoice == Compchoice){
        document.getElementById("drowScore").innerHTML="BERABERLIK: " + beraberlik;
        beraberlik ++ 
    }else if(userCChoice == "r" && Compchoice == "s"){
        document.getElementById("currentResult").innerHTML="USER WOM: " 
        UserScore ++
    }else if(userCChoice == "s" && Compchoice == "r"){
        document.getElementById("currentResult").innerHTML="COMP WON: " 
        CompScore ++
    }else if(userCChoice == "p" && Compchoice == "r"){
        document.getElementById("currentResult").innerHTML="USER WOM: " 
        UserScore ++
    }else if(userCChoice == "r" && Compchoice == "p"){
        document.getElementById("currentResult").innerHTML="COmp WOM: " 
        CompScore ++
    }else if(userCChoice == "p" && Compchoice == "s"){
        document.getElementById("currentResult").innerHTML="COMP WON: " 
        CompScore ++
    }else if(userCChoice == "s" && Compchoice == "p"){
        document.getElementById("currentResult").innerHTML="USER WOM: " 
        UserScore ++
    }
    document.getElementById("userScore").innerHTML="USER SCORE " + UserScore
    document.getElementById("compScore").innerHTML="COMPUTER SCORE " + CompScore

}





