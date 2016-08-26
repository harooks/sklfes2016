window.onload = function() {
    var label = document.getElementById("label");
    var now = new Date();
    var day_fes = new Date(2016, 8, 17);
    var delta = (day_fes - now) / 86400000;

    if(delta > -1 && delta <= 0) {
        label.textContent = "学園祭初日!";
    } else if(delta > -2 && delta <= -1){
        label.textContent = "学園祭2日目!";
    } else {
        label.textContent = "残り" + Math.floor(delta) + "日";
    }
    test();
}

function test() {
    $(".a").fadeToggle(3000);
    setTimeout("test()", 3000);
}
