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
for(let i = dodaimang -1 ; i>=0 ; i = i - 1) {
    // console.log('arr[%s]', i, arr[i])
    arr1[j] = arr[i]
    j = j + 1
}
console.log(arr1)




