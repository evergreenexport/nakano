// Functions for synced hover behaviour for a bottle image and its corresponding
// product name text.

var bottles = document.getElementsByClassName("bottle");
var nameTags = document.getElementsByClassName("product-name");

var highlightLink = function() {
    let itemId = this.getAttribute('id');
    productName = getProductName(itemId)
    // update css
    $("#" + productName + "-link").css("color", "hotpink");
    $("#" + productName + "-link").css("text-decoration", "underline");
}


var unHighlightLink = function() {
    let itemId = this.getAttribute('id');
    productName = getProductName(itemId)
    $("#" + productName + "-link").css("color", "black");
    $("#" + productName + "-link").css("text-decoration", "none");
}

function getProductName(itemId) {
    if (itemId.includes("-bottle")) {
        var productName = itemId.slice(0, -7);
    }
    else {
        var productName = itemId.slice(0, -5);
    }
    return productName;
}

// Add event listeners for all bottle images
for (var i = 0; i < bottles.length; i++) {
    bottles[i].addEventListener('mouseover', highlightLink, false);
    bottles[i].addEventListener('mouseout', unHighlightLink, false);
}


// Add event listeners for all bottle name tags
for (var i = 0; i < nameTags.length; i++) {
    nameTags[i].addEventListener('mouseover', highlightLink, false);
    nameTags[i].addEventListener('mouseout', unHighlightLink, false);
}
