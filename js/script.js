let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    signupForm.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    signupForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    signupForm.classList.remove('active');
}

let signupForm = document.querySelector('.signup-form');

document.querySelector('#signup-btn').onclick = () =>{
    signupForm.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}

let mybutton = document.getElementById("btn_Back_To_Top");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = () =>{
    scrollFunction()
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    signupForm.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var sign_up = document.getElementById('dangky')

sign_up.onclick() = () => {
    let tbl = document.getElementById('ds_DangKy')
    let row = tbl.inserRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    let cell4 = row.insertCell()
    let cell5 = row.insertCell()

    cell1.innerHTML = document.getElementById('tendangnhap').value
    
    let hvt = document.getElementById('hovaten').value
    let check_hvt = /[\w]{2,}( [\w]{2,})+/i
    
    if (!hvt.match(check_hvt)) {
        alert('Họ và tên không hợp lệ')
    }
    else {
        cell2.innerHTML = document.getElementById('hovaten').value
    }
    
    let sdt = document.getElementById('sodienthoai').value
    let check_sdt_10 = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    let check_sdt_11 = /(84|0[3|5|7|8|9])+([0-9]{9})\b/g

    if (!(sdt.match(check_sdt_10)) && !(sdt.match(check_sdt_11))) {
        alert('Số điện thoại không hợp lệ')
    } else {
        cell3.innerHTML = document.getElementById('sodienthoai').value
    }

    let email = document.getElementById('email').value
    let check_email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*/g
    if (email.length == 0 || !(email.match(check_email))) {
        alert('Email vừa nhập không hợp lệ')
    } else {
        cell4.innerHTML = document.getElementById('email').value
    }
    let pass = document.getElementById('password').value
    let passrepeat = document.getElementById('passrepeat').value
    let check_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/g

    if (!pass.match(check_password)) {
        alert('Mật khẩu phải có ít nhất 8 ký tự và có ít nhất 1 ký tự số và 1 ký tự chữ thường')
    }
    if (passrepeat != pass) {
        alert('Mật khẩu không trùng khớp')
    } else {
        cell5.innerHTML = document.getElementById('passrepeat').value
    }

    document.getElementById('tendangnhap').value = ""
    document.getElementById('hovaten').value = ""
    document.getElementById('sodienthoai').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('passrepeat').value = ""
}