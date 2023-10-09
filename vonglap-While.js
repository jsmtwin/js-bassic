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
console.log('trung binh cong cua mang la : %s', tong / i) // i la do dai mang
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
// caue()
// cau f : so lan xuat hien phan tu trong mang
i = 0
const tansuatxuathien =  {}
while(arr[i] !== undefined){
    const phantuthuI = arr[i]
    tansuatxuathien[phantuthuI] = (tansuatxuathien[phantuthuI] ||0) +1
    i =i + 1
}
console.log('tan suat xuat hien : ', tansuatxuathien)
// cau g : chen phan tu dau mang
i = do_dai_mang - 1
while(arr[i] !== undefined){
    arr[i + 1] = arr[i]
    i = i - 1
}
arr[0] = 117

// console.log('do dai mang luc sau', arr.length)
console.log(arr)
// cau h : kiem tra mang tang dan
const dodaimangM = arr.length
let checktangdan = true
i = 0
while(arr[i] !==undefined){
    if(arr[i +1]<arr[i]){
    i = i + 1
    checktangdan = false
    break
    }
}
if(checktangdan == true){
    console.log('mang tang dan')
}
else{
    console.log('mang khong tang')
}
// cau i : sap xep theo thu tu tang dan
i = 0
while(arr[i] !== undefined){
    let j = i + 1
    while(arr[j] !== undefined){
        if(arr[i]>arr[j]){
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j = j + 1
    }
    i = i + +1
}
console.log(arr)
// cau j : thu tu giam dan
i = 0
while(arr[i] !== undefined){
    let j = i + 1
    while(arr[j] !== undefined){
        if(arr[i]<arr[j]){
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j = j + 1
    }
    i = i + +1
}
console.log(arr)
//cau k : liet ke so chan trong mang
i = 0
while(arr[i] !== undefined){
    if(arr[i] %2 ===0){
        console.log('so chan trong mang :',arr[i])    
    }
    i = i + 1
}
// cau L : liet ke so le
i = 0
while(arr[i] !== undefined){
    if(arr[i] %2 !==0){
        console.log('so le trong mang :',arr[i])    
    }
    i = i + 1
}
