window.onload = function () {
    var label = document.getElementById("label");
    var now = new Date();
    var day_fes = new Date(2016, 8, 18);
    var delta = (day_fes - now) / 86400000;
    if(label != null) {
      if (delta > -1 && delta <= 1) {
        label.textContent = "文化祭2日目!";
      } else if (delta > -2 && delta <= -1) {
          label.textContent = "文化祭2日目!";
      } else {
          label.textContent = "残り" + Math.floor(delta) + "日";
      }
    }
    
    test();
};

function test() {
    $(".a").fadeToggle(5000);
    setTimeout("test()", 5000);
}
