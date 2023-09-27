// câu 1 - a kiểm tra âm dương
function ktraamduong(n){
    if (n<0){
        console.log('số n là số âm')
    }
    else if (n>0){
        console.log('số n là số dương')
    }
    else{
        console.log('số n không âm không dương')
    }
}
ktraamduong(0)
// câu - b kiểm tra chẵn lẻ
function chan_le (n){
    if (n%2 ==0) {
        console.log("%s là số chẵn",n)
    }
    else{
        console.log('%s là số lẻ',n)
    }
} 
chan_le(4)
//câu 1 - c - tìm số lớn nhất
function solonnhat (a,b,c) {
    let max = a
    if (max<b){
        max = b
    }
    if (max<c){
        max = c
    }
    console.log('số lớn nhất là : %s', max)
}
solonnhat(67,11,45)
// câu 1 - d - kiểm tra năm nhuần
function kiemtranamnhuan(a){ // kiểm tra năm nhuần
    if (a % 4 == 0 &&  a % 100 != 0 ){
        console.log(a, 'năm nay là năm nhuần')
    }
    else if (a % 400 == 0) {
        console.log(a, 'năm nay là năm nhuần')
    }    
    else {
        console.log(a, 'năm nay không phải năm nhuần')
    }
}
kiemtranamnhuan(2000)
kiemtranamnhuan(2008)
kiemtranamnhuan(2004)
kiemtranamnhuan(2010)
// câu 1 - e kiểm tra kí tự nguyên âm hay phụ âm