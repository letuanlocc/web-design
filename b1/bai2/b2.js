
function sum(){
    const score1 = parseInt(document.getElementById("score1").value);
    const score2 = parseInt(document.getElementById("score2").value);
    const k = Number(document.getElementById("gender").value);
    var result
    switch(k){
        case 1: 
            result = parseFloat(score1 + (score2 * 2)) / 3
            document.getElementById("avg").value = result;
            break;
        case 2:
            result = parseFloat((score1 * 2) + (score2 * 3)) / 5
            document.getElementById("avg").value = result;
            break;
        case 3:
            result = parseFloat((score1 * 3) + (score2 * 4)) / 7
            document.getElementById("avg").value = result;
            break;
    }
    if (result >= 5){
        document.getElementById("display").innerHTML = "HOC SINH GIOI";
        document.getElementById("display").style.color = "red";
    }
    else if(result >= 7 && result < 9){
        document.getElementById("display").innerHTML = "HOC SINH KHA";
        document.getElementById("display").style.color = "red";
    }
    else if(result >= 5 && result < 7){
        document.getElementById("display").innerHTML = "HOC SINH TRUNG BINH";
        document.getElementById("display").style.color = "red";
    }
    else{
        set(""); 
    }
}
function cancel(){
    document.getElementById("score2").value = "";
    document.getElementById("score1").value = "";
    document.getElementById("avg").value = "";
    document.getElementById("display").textContent  = "";
    document.getElementById("gender").value = "1";
}