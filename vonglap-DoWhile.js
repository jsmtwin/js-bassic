// let i = 0
// do{
//     console.log('do whlie :', i)
//     i = i + 1
// }while(i <0)
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
// cau a
do{
    console.log('phan tu thu %s = %s', i , arr[i])
    i = i + 1
}while(arr[i] !== undefined)
// cau b : tinh tong
let tong = 0
i = 0
do{
    console.log('tong : ', tong)
    tong = tong + arr[i]
    i = i + 1
}while(arr[i] !==undefined)
// cau c : tim phan tu lon nha tong mang
i = 0
let max = arr[0]
let min = arr[0]
do{
    if(arr[i]> max){
        max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }
    i = i +1
    console.log('phan tu lon nhat : ', max)
    console.log('phan tu nho nhat : ', min)

}while(arr[i] !== undefined)