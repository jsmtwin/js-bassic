// bài 1
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// câu lệnh for 
// cau a
let dodaimang = arr.length
let tongphantu = 0
for (let i = 0; i <dodaimang ; i = i + 1){
    console.log('phần tử thứ %s = %s ', i , arr [i])
    tongphantu = tongphantu + arr[i]
}
//cau b tinh tong
console.log('tong phan tu trong mang la : ', tongphantu)
//cau c : tim phan tu lon nhat, nho nhat
let max = arr [0]
let min = arr [0]
for (let i = 1 ; i < dodaimang ; i = i + 1) {
    if (max < arr [i]){
        max = arr [i]
    }

    if (min > arr [i]){
        min = arr [i]
    }
}
console.log('so lon nhat la : ', max)
console.log('so nho nhat la : ', min)
// cau d : tinh trung binh cong
const trungbinhcong = tongphantu / dodaimang
console.log('trung binh cong : ', trungbinhcong)
// cau e : dao nguoc phan tu trong mang
let arr1 = []
let j = 0
for(let i = dodaimang -1 ; i >= 0 ; i = i - 1) {
    // console.log('arr[%s]', i, arr[i])
    arr1[j] = arr[i]
    j = j + 1
}
console.log(arr1)
// cau f : tim so lan xuat hien moi phan tu trong mang
const tansuaxuathien = {};
for (let i = 0 ; i < dodaimang; i = i + 1) {
const phantuthuI = arr[i];
tansuaxuathien[phantuthuI] = (tansuaxuathien[phantuthuI]||0) + 1
}
console.log('==>', tansuaxuathien)

// cau g : chen phan tu
for (let i = dodaimang -1; i >= 0 ; i = i -1){
    arr [i + 1] = arr [i]
}
arr [0] = 117
console.log('do dai mang ban dau', dodaimang)
console.log('do dai mang luc sau', arr.length)
console.log(arr)
// cau h : kiem tra mang moi day so tang dan
const dodaimangMoi = arr .length
let checktangdan = true
for (let i = 0 ; i < dodaimangMoi ;  i = i +1 ){
    if (arr[i +1] < arr[i]) {
    checktangdan = false
    break
    }
}    
if(checktangdan == true) {
    console.log('mang tang dan')

}
else {
    console.log('mang khong tang dan')
}
// cau i : sap xep mang theo thu tu tang dan
for (let i = 0 ; i < arr.length ; i = i + 1){
    for(let j = i + 1; j < arr.length; j = j + 1){
        if (arr[i]> arr[i+1]){
                let tam = arr[i]
                arr[i] = arr[i + 1]
                arr[ i+1] = tam
                // swap(arr[i], arr[i+1])
            }
    }
    // if (arr[i]> arr[i+1]){
    //     let tam = arr[i]
    //     arr[i] = arr[i + 1]
    //     arr[ i+1] = tam
    //     // swap(arr[i], arr[i+1])
    // }
}
console.log(arr)












