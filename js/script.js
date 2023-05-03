let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
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
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
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

sign_up.onclick() = function () {
    let tbl = document.getElementById('sa_DangKy')
    let row = tbl.inserRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    let cell4 = row.insertCell()
    let cell5 = row.insertCell()
    let cell6 = row.insertCell()

    let tdn = document.getElementById('tendangnhap').value
    
    let hvt = document.getElementById('hovaten').value
    let check_hvt = /[A-Z]+[a-z]+\s+/g
    
    if (hvt.length == 0 || !(hvt.match(check_hvt))) {
        alert('Họ và tên không hợp lệ')
    }
    
    let sdt = document.getElementById('sodienthoai').value
    let check_sdt_10 = /\d{10}/g
    let check_sdt_11 = /\d{11}/g

    if (sdt.length == 0 || (!(sdt.match(check_sdt_10)) || !(sdt.match(check_sdt_11)))) {
        alert('Số điện thoại không hợp lệ')
    }

    let email = document.getElementById('email').value

    let pass = document.getElementById('password').value
    let passrepeat = document.getElementById('passrepeat').value

    if (passrepeat != pass) {
        alert('Mật khẩu không trùng khớp')
    }
}