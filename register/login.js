function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

window.onload = loginLoad;

function loginLoad() {
    var loginpage = document.getElementById("myLogin");
    loginpage.onsubmit = checkLogin;
    // วิธีใช้ getParams()
    var parameter = getParams();
    console.log(parameter["username"]);
    console.log(parameter["password"]);


}

function checkLogin() {
    var parameter = getParams();
    var name = document.forms["myLogin"]["username"].value
    var pass = document.forms["myLogin"]["password"].value


    if (parameter["username"] == name && parameter["password"] == pass) {
        alert("สำเร็จ")
    } else {
        alert("รหัสผ่านไม่ถูกต้อง!!")
        return false;
    }
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

}