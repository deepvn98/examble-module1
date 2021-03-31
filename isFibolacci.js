function isFibolacci(number){
    let arr = [ 1,2,3,5,8,13];
    for( let i = 0; i < arr.length; i++){
        if (arr[i] == number){
            return true;
        }

    }return false;
}
let number = parseInt(prompt("mời bạn nhập số"));
if (isFibolacci(number)){
    alert("số bạn nhập có trong dãy fibollacci")
}else {
    alert("số bạn nhập không có trong dãy fibalacci")
}