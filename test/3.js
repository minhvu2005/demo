var sv1 = new Array();
var sv2 = new Array("Lan", "Hoa", "Tuấn");

var so1 = [];
var so2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sv1,sv2,so1,so2);
// truy xuất phần tủ cua mảng
// thêm nay
console.log(sv2[0]); // Lan
console.log(so2[5]); // 6
console.log(so2.length);
sv2.push("Vu");
console.log(sv2);
// xoa phan tu voi mang
sv2.pop();
console.log(sv2);
// theem tu va tuyet sau hoa
sv2.splice(2,0,"Tu","Tuyet","Hung");
console.log(sv2);
// xóa
sv2.splice(2,1);
console.log(sv2);
// sửa
sv2[0]="Vu"
console.log(sv2);