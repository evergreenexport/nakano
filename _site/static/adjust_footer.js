// A small function to nudge the footer down so that it fits in the 8 point grid framework.

window.onresize = () => {
    adjustFooter();
  };

window.onload = () => {
    adjustFooter();
  };

function adjustFooter() {
    let viewportHeight = window.innerHeight;
    // console.log(viewportHeight)
    var totalVH =  Math.round(viewportHeight*1.01)
    // console.log(totalVH)
    var modulo = totalVH%8
    // console.log(modulo)
    $("#footer").css("margin-top", ((175 + modulo).toString()) + "rem;")
    $("#footer").css("margin-bottom", ((213 + modulo).toString()) + "rem")
}
