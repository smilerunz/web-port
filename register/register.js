window.onload = pageLoad;

function pageLoad() {
    hamclickFunction();
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var x = document.forms["myForm"]["password"]
    var y = document.forms["myForm"]["repassword"]

    if (x.value == y.value) {
        alert("สำเร็จ")

    } else {
        var errorhtml = document.getElementById("errormsg");
        errorhtml.innerHTML = "รหัสผ่านไม่ตรงกัน";

        return false;

    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function hamclickFunction() {
    let BtnOnclick = document.getElementById('clickon');
    let containerOnclick = document.getElementsByClassName('hamburger');
    let navbarInside = document.getElementsByClassName('navbar-inside');
    let containernavbar = document.getElementsByClassName('container-navbar');
    BtnOnclick.onclick = function() {
        containerOnclick[0].classList.toggle("change");
        navbarInside[0].classList.toggle("navbar-inside-open");
        containernavbar[0].classList.toggle("container-navbar-open");

    }
}