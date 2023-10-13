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
    tong = tong + arr[i]
    i = i + 1
}while(arr[i] !==undefined)
console.log('tong : ', tong)
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
}while(arr[i] !== undefined)
console.log('phan tu lon nhat : ', max)
console.log('phan tu nho nhat : ', min)
// cau d : tinh trung binh cong
i = 0
do{
    i = i + 1

}while(arr[i] !== undefined)
console.log('trung binh cong : ', tong/i)
// cau e : dao nguoc phan tu
console.log('cau e pre: ', arr)
function caue(){
     let i = 0
     let j = arr.length - 1
     temp = 0
     do{
         temp = arr[i]
         arr[i] = arr[j]
         arr[j] = temp
         i = i + 1
         j = j - 1
    }while(i<j)
console.log('cau e: ', arr)
}
caue()
//cau f : so lan xuat hien cua phan tu
const tansuatxuathien = {}
i = 0
do{
    const phantuthuI = arr[i]
    tansuatxuathien[phantuthuI] = (tansuatxuathien[phantuthuI] ||0) +1
    i =i + 1
}while(arr[i] !== undefined)
console.log('tan suat xuat : ', tansuatxuathien)
// cau g : chen phan tu
i = 0
i = arr.length - 1
do{
    arr[i + 1] = arr[i]
    i = i - 1   
}while(arr[i] !== undefined)
arr[0] = 117
console.log(arr)
//cau h : kiem tra mang tang dan
// const dodaimangM = arr.length
// let checktangdan = true
// i = 0
// do{
//     if(arr[i +1]<arr[i]){
//         i = i + 1
//         checktangdan = false
//         break
//         }
//          if(checktangdan == true){
//         console.log('mang tang dan')
//          }
//     else{
//         console.log('mang khong tang')
//     }
// }while(arr[i] !==undefined)


// cau i : sap xep theo thu tu tang dan
i = 0
do{
    let j = i + 1
    do{
        if (arr[i]>arr[j]){
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j = j + 1

    }while(arr[j] !==undefined)
    i = i + 1   
}while(arr[i] !== undefined)
console.log(arr)
// cau j sap xep theo thu tu giam dan
i = 0
do{
    let j = i + 1
    do{
        if (arr[i]<arr[j]){
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j = j + 1

    }while(arr[j] !==undefined)
    i = i + 1   
}while(arr[i] !== undefined)
console.log(arr)
// cau k : liet ke can phan tu la so chan
i = 0 
do{
    if(arr[i] %2 ===0){
        console.log('so chan : ',arr[i])
    }
    i = i + 1

}while(arr[i] !== undefined)
// cau f : liet ke cac so le
i = 0
do{
    if(arr[i]%2 !==0){
        console.log('so le :', arr[i])
    }
    i = i + 1

}while(arr[i] !==undefined)













