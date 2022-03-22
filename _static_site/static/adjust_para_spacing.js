window.onresize = () => {
    checkSpacing();
  };

window.onload = () => {
    checkSpacing();
  };

function checkSpacing() {
    var parasHeight = $(".paras").height()
    console.log("height = " + parasHeight)
    console.log("modulo = " + parasHeight%8)
    if (parasHeight%8 == 0) {
        $(".paras-spacer").css("display", "none")
    }
    else{
        $(".paras-spacer").css("display", "block")
    }
}