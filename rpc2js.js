function con(a, b) {
    var i;
    for (i = 0; i < 10; i++) {
        if (b[i] == a) {
            return true;
        }
    }
    return false;
}
var unl = ["Benny", "benny", "Rosner", "Shozner", "Tamir", "tamir", "gisher", "Gisher", "temp", "reuvkess"]
function check() {
    if (document.getElementById('pas').value == 'rrr009' && con(docuemnt.getElementById("un").value, unl)) {
        document.location = "https://reuvkess.github.io/repl/rpc2.html";
    }
    if (document.getElementById('pas').value != 'rrr009') {
        alert('Password incorrect');
    }
}
ctb = function () {
    document.getElementById('bod').style.backgroundColor="lightskyblue";
}
ctr = function () {
    document.getElementById('bod').style.backgroundColor = "indianred";
}
ctg = function () {
    document.getElementById('bod').style.backgroundColor="darkseagreen";
}
var t;
t = 0;
document.addEventListener("keyup", function(event) {
    if (event.key === 'b') {
        document.getElementById('bod').style.backgroundColor="lightskyblue";
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key === 'g') {
        document.getElementById('bod').style.backgroundColor="darkseagreen";
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key === 'r') {
        document.getElementById('bod').style.backgroundColor="indianred";
    }
});
