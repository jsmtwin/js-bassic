function tinhtong(a,b) {
    const kq = a + b
    return kq
}
const kq1 = tinhtong(20,15)
console.log(kq1)
function tich(a,b){
    const kq = a*b
    return kq
}
const kq2 = tich(3,9)
console.log("tích :" ,kq2)
function tbc(a,b) {
    const kq = (a+b)/2
    return kq
}
const kq3 = tbc(6,7)
console.log("trung bình cộng a vs b :",kq3)
// //function songuyen(x,y,z){
//    // const bt1 = x*x + 2*x +1
//     const bt2 = x*x*x - 3*x*y - 5*y + 3*(y*y)
//     const bt3 = ((x*y) * (x*y)) - 2*(x*x)*y + 13*y
//     const bt4 = 4*(x*x*x) + 3*(x*y) + y*y - (2(x*x)- 3*y)
//     const bt5 = (5*(x*x)) / (4*(x*y)) + y*y
//     const bt6 = x*x - 2*z*x*y/ (y*y) + 5*x - 2*(y*y) + 4*x*(z*z*z) + z*z*z
// }
function cv (d,r){
    let chuvi = (d+r)*2
    return chuvi
}
const kqcv = cv (9,8)
console.log("chu vi hình chữ nhật", kqcv)
function dt (d,r){
    let dientich = d*r
    return dientich
}
const kqdt = dt(5,4)
console.log("diện tích : ", kqdt)


