function tryRemoveFromArry(number){
    let arr = [1,3,4,5,6,74,8];
    let newarr = new Array();
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] == number){
            continue;
        }
        else {
            newarr.push(arr[i]);

        }

    }return newarr;
}
let number = parseInt(prompt("mời bạn nhập số"));
document.write(tryRemoveFromArry(number))
