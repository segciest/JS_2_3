// Tính Lương
const luong1Ngay = 100000;
var luong;
var soNgay =0;
document.getElementById('btn_tinhLuong').onclick = function(){
    soNgay = document.getElementById('txt_Ngay').value*1;   

    luong = luong1Ngay * soNgay;
    document.getElementById('kqLuong').innerHTML= (luong).toLocaleString({
        style: 'currency',
        currency: 'VND',
    }) + 'vnd'
    console.log(luong);
}


// Tính giá trị trung bình
var arrA =[];
document.getElementById('btn_nhapSo').onclick = function(){
    var so = document.getElementById('txt_so').value*1;
    arrA.push(so);
    console.log(arrA);
}
function tinhTrungBinh (arr){
    var sum = 0;
    for (var i =0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
document.getElementById('btn_tinhGiaTriTrungBinh').onclick = function(){
    document.getElementById('kqTrungBinh').innerHTML =tinhTrungBinh(arrA)
}


// Quy đổi tiền
const dollar = 23500;
var dollarNhap;
document.getElementById('btn_QuyDoi').onclick =function(){
    dollarNhap = document.getElementById('txt_dollar').value*1;
    document.getElementById('kqQuyDoi').innerHTML = (dollarNhap*dollar).toLocaleString({
        style: 'currency',
        currency: 'VND',
    }) + 'vnd'
    console.log(dollarNhap);
}


// Hình chữ nhật
var chieuDai=0;
var chieuRong=0;
document.getElementById('btn_dienTich').onclick =function(){
    chieuDai = document.getElementById('txt_dai').value*1;
    chieuRong = document.getElementById('txt_rong').value*1;
    document.getElementById('kqHCN').innerHTML = (chieuDai*chieuRong);
}
document.getElementById('btn_chuVi').onclick =function(){
    chieuDai = document.getElementById('txt_dai').value*1;
    chieuRong = document.getElementById('txt_rong').value*1;
    document.getElementById('kqHCN').innerHTML = (chieuDai+chieuRong)*2;
}


// Tính tổng 2 ký số
document.getElementById('btn_tongKySo').onclick =function(){
    var soDoi=document.getElementById('txt_so2So').value*1;
    if(soDoi <0 || soDoi >99){
        document.getElementById('kqTongKySo').innerHTML="Vui lòng nhập lại số chỉ có 2 chữ số"
    } else {
        var soHangDonVi =Math.floor((document.getElementById('txt_so2So').value*1)%10);
        var soHangChuc =Math.floor((document.getElementById('txt_so2So').value*1)/10);
        document.getElementById('kqTongKySo').innerHTML = (soHangDonVi+soHangChuc);
    }
    
}

