// bai 1
let x = 5
let y = 1
let z = 2
let kq = 3*x*x*x*x - 5*x*y*y*y + 6*z*y*y - (7/2)*z*z*z*z
console.log('bieu thuc bai 1 : ', kq)
// bai 2 cau a
let arr = [5, 1, -421, 23, 50, 17, -11,72, -97, 103, -504, 201]
let max = arr[0]
let min = arr[0]
let i =0
for(let i = 1; i< arr.length; i = i +1){
    if(max < arr[i]){
        max = arr[i] 
    }
    if (min > arr[i]){
        min = arr[i]
    }
}
console.log('phan tu lon nhat trong mang : ', max)
console.log('phan tu nho nhat trong mang :', min)
// bai 3
function BMI(cannang, chieucao){
    BMI = cannang/(chieucao*chieucao)
    console.log(BMI)
    if(BMI <17){
    console.log(' nguoi nay bi om')
    }
    if(BMI<=25){
    console.log(' nguoi nay binh thuong')
    }
    else{
    console.log('nguoi nay thua can')

    }
// console.log(BMI)
}
let Nguyen_van_A = BMI(80, 1.7)
// bai 4
let a = 3
let b = 4
let c = 1
function phuong_trinh_bac_2(a,b,c){
    let denta = b * b - 4 * a * c 
    if(denta<0){
        return 'phuong trinh vo nghiem'
    }
    else if(denta ==0){
        return ` phương trình có nghiệm x1 = x2 = ${-b/(2*a)}`
    }
    else {
        const x1 = (-b + Math.sqrt(denta))/(2*a)
        const x2 = (-b + Math.sqrt(denta))/(2*a) 
        return (x1, x2)
    }
}
console.log(phuong_trinh_bac_2(a,b,c))
