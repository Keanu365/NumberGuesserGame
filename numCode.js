var lowerBound = 1
var higherBound = 20
var buttonpress = 0
const nums = ["1","2","3","4","5","6","7","8","9","0"]
var correctNum = Math.floor((Math.random()*higherBound) + lowerBound)

const historyIds = ["history1","history2","history3","history4","history5","history6","history7","history8","history9","history10"]
const history = []

var finalRange = document.getElementById("final_confirm")
var showLowerBound = document.getElementById("lowBoundShow")
var showHigherBound = document.getElementById("highBoundShow")
var checkResult = document.getElementById("feedback")
var guess = document.getElementById("numGuess")
var hide = document.getElementById("setup")
var show = document.getElementById("game")

show.style.display = "none";

function hideSetup(){
    correctNum = Math.floor((Math.random()*higherBound) + lowerBound)
    hide.style.display = "none"
    show.style.display = "block"
    checkResult.innerText = ""
    for (let i = 0; i < 10; i++){
        document.getElementById(historyIds[i]).innerText = ""
    }
    makeHistoArray()
}
function showSetup(){
    show.style.display = "none"
    hide.style.display = "block"
}
function setlower(l_boundValue){
    if(l_boundValue == 'custom'){
        l_boundValue = prompt("Enter your custom lower bound: ")
        var lBoundArr = Array.from(l_boundValue)
        console.log(lBoundArr)
        for (let i=0; i < lBoundArr.length; i++){
            if(nums.includes(lBoundArr[i]) == false){
                lBoundArr[i] = ''
            }
        }
        l_boundValue = lBoundArr.join('')
        l_boundValue = Number(l_boundValue)
        if(l_boundValue >= higherBound){
            alert("Error: Your lower bound must be lower than your upper bound!")
            l_boundValue = lowerBound
        }else if(l_boundValue < higherBound){
            alert("Answer accepted. All non-number characters have been removed and your new lower bound is " + String(l_boundValue))
        }
    }
    lowerBound = l_boundValue
    final_confirm.innerText = `${lowerBound} <= x <= ${higherBound}`
}
function sethigher(h_boundValue){
    if(h_boundValue == 'custom'){
        h_boundValue = prompt("Enter your custom upper bound: ")
        var hBoundArr = Array.from(h_boundValue)
        console.log(hBoundArr)
        for (let i=0; i < hBoundArr.length; i++){
            if(nums.includes(hBoundArr[i]) == false){
                hBoundArr[i] = ''
            }
        }
        h_boundValue = hBoundArr.join('')
        h_boundValue = Number(h_boundValue)
        if(h_boundValue <= lowerBound){
            alert("Error: Your upper bound must be higher than your lower bound!")
            h_boundValue = higherBound
        }else if(h_boundValue > lowerBound){
            alert("Answer accepted. All non-number characters have been removed and your new upper bound is " + String(h_boundValue))
        }
    }
    higherBound = h_boundValue
    final_confirm.innerText = `${lowerBound} <= x <= ${higherBound}`
}
function showBounds(){
    showLowerBound.innerText = "Your lower bound: " + String(lowerBound)
    showHigherBound.innerText = "Your upper bound: " + String(higherBound)
}
function check(){
    buttonpress += 1
    guess = document.getElementById("numGuess").value
    if ((guess < lowerBound) || (guess > higherBound)){
        checkResult.innerText = "Your number is invalid (not within specified range)!"
        console.log("Test failed")
    }else if( guess == correctNum){
        checkResult.innerText = "Congratulations, you are correct!"
    }else if (guess > correctNum){
        checkResult.innerText = "Your guess is too high!"
    }else if (guess < correctNum) {
        checkResult.innerText = "Your guess is too low!"
    }
    makeHistoArray()
    var h = 0
    while(history[h] != "" && h < 10){
        h += 1
    }
    if(h == 10){
        for (let i = 0; i < 9; i++) {
            document.getElementById(historyIds[i]).innerText = document.getElementById(historyIds[i+1]).innerText
        }
        document.getElementById("history10").innerText = guess
    } else{
        document.getElementById(historyIds[h]).innerText = guess
    }
    
}
function makeHistoArray(){
    for (let i = 0; i < 10; i++){
        history.shift()
    }
    for (let i = 0; i < 10; i++) {
        history.push(document.getElementById(historyIds[i]).innerText)
      }
}
