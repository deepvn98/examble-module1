function findMax(){
    let arr = [1,3,4,5,6,7,8,9];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if( arr[i] > max ){
            max = arr[i];
        }
    } return max
} document.write(findMax() + " Là số lớn nhất trong mảng của bạn")