// // vi du
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let do_dai_mang = arr.length
let i = 0
while (arr[i] !== undefined){
    console.log('phan tu thu %s = %s ', i, arr[i])
    i = i + 1
}
// cau b : tong cac phan tu
let tong = 0
i = 0
while(arr[i] !== undefined){
    tong = tong + arr[i]
    i = i +1
}
console.log('tong cac phan tu :', tong)
// cau c : phan tu lon nhat vs phan tu nho nhat trong mang
let max = arr[0]
let min = arr[0]
i = 0
while(arr[i] !== undefined){
    if(max < arr[i]){
        max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }
    i = i + 1
}    
console.log('so lon nhat :', max)
console.log('so nho nhat :', min)
// cau d : trung binh cong cac phan tu trong mang
i = 0
while(arr[i] !== undefined){
    i = i + 1
}
console.log('trung binh cong cua mang la : %s', tong / i)
// cau e : dao nguoc cac phan tu
function caue(){
    let i = 0
    let j = do_dai_mang - 1
    let temp = 0
    while (i<j){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i = i + 1
        j = j - 1
    }
    console.log('cau e', arr)
}
caue()
