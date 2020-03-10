let getmessage = "",
    count = 0;

function inputpost(a) {
    console.log(a)
    getmessage = a;
}

function senttopost() {
    var inputpost1 = document.getElementById("post1");
    inputpost1.innerHTML = getmessage;
}

function senttoreply1() {
    var inputreply1 = document.getElementById("reply1");
    inputreply1.innerHTML = getmessage;
}

function senttoreply2() {
    var inputreply2 = document.getElementById("reply2");
    inputreply2.innerHTML = getmessage;
}

function postFunction() {

    count = count + 1;

    if (count == 1) {
        senttopost();
    } else if (count == 2) {
        senttoreply1();
    } else if (count == 3) {
        senttoreply2();
    }


}

function clearFunction() {
    if (count >= 0) {


        var inputpost1 = document.getElementById("post1");
        var inputreply1 = document.getElementById("reply1");
        var inputreply2 = document.getElementById("reply2");
        inputpost1.innerHTML = "";
        inputreply1.innerHTML = "";
        inputreply2.innerHTML = "";
        count = 0;
    }

}