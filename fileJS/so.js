var i =0; // slide show
var ar=new Array("./img/game1.png","./img/game10.jpg","./img/game11.png","./img/game12.jpeg");
function back(){
    if(i>0){
        i--;    
    }else{
       i= ar.length-1;
    }
   
    document.getElementById("banner").src=ar[i];
};
function next(){
    if(i<3){
        i++;    
    }else{
        i=0;
    }
   
    document.getElementById("banner").src=ar[i];
};
function check(){
    var thongbao="";
    var user = document.getElementById("ten").value;
    var password= document.getElementById("passw").value;
    if(user.length==0){
        thongbao+="Bạn chưa nhập tên<br>";
    }if(password.length==0){
        thongbao+="Bạn chưa nhập password<br>";
    }else{
        thongbao+="Đăng nhập thành công"
    }
    document.getElementById("kq").innerHTML=thongbao;
}
function check1(){ // validate
    var thongbao="";
    var user = document.getElementById("ten").value;
    var password= document.getElementById("passw").value;
    var hoKH= document.getElementById("ho").value;
    var tenKH=document.getElementById("ten1").value;
    var dc=document.getElementById("diachi").value;
    var sdt=document.getElementById("phonenum").value;
    var email=document.getElementById("email1"),value;
    var quoctich=document.getElementById("quoctich").value;
    if(user.length==0){
        thongbao+="Bạn chưa nhập tài khoản<br>";
    }if(password.length==0){
        thongbao+="Bạn chưa nhập mật khẩu<br>";
    }else if(password.length<8){
        thongbao+="Mật khẩu quá yếu<br>";
    }if(hoKH.length==0){
        thongbao+="Bạn chưa nhập họ<br>";
    }else if(isNaN(hoKH)==false){
        thongbao+="Họ không thể là số<br>"
    }if(tenKH.length==0){
        thongbao+="Bạn chưa nhập tên<br>"
    }else if(isNaN(hoKH)==false){
        thongbao+="Tên không thể là số<br>"
    }if(dc.length==0){
        thongbao+="Bạn chưa nhập địa chỉ<br>"
    }if(sdt.length==0){
        thongbao+="Bạn chưa nhập số điện thoại<br>"
    }else if(isNaN(sdt)){
        thongbao+="Số điện thoại phải là số<br>"
    }if(email.length==0){
        thongbao+="Bạn chưa điền email<br>"
    }if(quoctich==0){
        thongbao+="Bạn chưa chọn quốc tịch<br>"
    }else{
        thongbao+="Đăng ký thành công"
    }
    document.getElementById("kq1").innerHTML=thongbao;
}

// add to cart
var products = []; // object chua sanpham
var numbercart=[];
var html = "<table>";
html+='<tr>'
html += '<td>Product IMG</td>';
html += '<td>Product Name</td>';
html += '<td>Product Quatity</td>';
html += '<td>Price</td>' +'</tr>';


function addsp(button){
    var a = button.parentNode;
    var hinh= a.children[0].src;
    var tensp=a.children[1].innerHTML;
    var gia=a.children[2].innerHTML;
    var slg=1;
  //  console.log(hinh+" "+tensp+" "+gia); check
    var flag=1;
// cái cờ, push sản phẩm vào giỏ hàng
    if(flag==1){
        var product1=[hinh,tensp,slg,gia];
        products.push(product1)
        console.log(products)
        document.getElementById("cart").innerHTML=showcart();
    }
 
}

function showcart(){
    var S=0;
    for(let i =0 ; i < products.length ; i++){
        html+='<tr>';
        html += '<td><img class="imgcart" src='+products[i][0] +'></td>';
         html += '<td>'+products[i][1]+'</td>';
        html += '<td>'+products[i][2]+'</td>';
        html += '<td>'+products[i][3]+'</td>'; 
        html+='</tr>';
        S=products[i][3]*products[i][2]; // tinh tong tien
    }
    html+='<tr>';
    html+='<td colspan="5">'+'Tổng giá trị:'+'</td>'
    html+='<td>'+S+'</td>'
    html+='</tr>'
    html+='</table>'
    return html;
    
}
  

  