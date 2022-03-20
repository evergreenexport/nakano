
const yesButton = document.getElementById("over18");
const noButton = document.getElementById("under18");
checkSessionStorage()

yesButton.addEventListener('click', function(){
    console.log("yes");
    sessionStorage.setItem('ageChecked', true);
    // hide pop-up
    $("#ageCheckContainer").hide(2000)
    // show page content
    $("#dim-background").css("display", "none");
    //allow scrolling
    $("body").css("overflow-y", "visible");
})

noButton.addEventListener('click', function(){
    console.log("no");
    // alert('you are under 18');
    $("#u18Error").css("display", "block")
    window.location.replace('https://www.alcohol.org.nz/');
})


function checkSessionStorage() {
    console.log('page is fully loaded');

    // check if it's stored
    if(!sessionStorage.getItem('ageChecked')) {

        checkAge();
    }
    else{
        // do nothing
        console.log('rendering page');
        console.log(sessionStorage.getItem('ageChecked'))
    }

}

function checkAge() {
    // hide background
    $("#dim-background").css("display", "block");
    // disable scrolling
    $("body").css("overflow-y", "hidden");
    // show pop-up
    $("#ageCheckContainer").css("display", "block");
    console.log("checking age");
}
