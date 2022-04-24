// JS event listeners and functions for the age check pop-up.

const yesButton = document.getElementById("over18");
const noButton = document.getElementById("under18");

checkSessionStorage()

yesButton.addEventListener('click', function(){
    sessionStorage.setItem('ageChecked', true);
    // hide pop-up
    $("#ageCheckContainer").hide(2000)
    // show page content
    $("#dim-background").css("display", "none");
    //allow scrolling
    $("body").css("overflow-y", "visible");
})


noButton.addEventListener('click', async function(){
    $("#u18Warning").css("display", "block")
    await sleep(5000)
    window.location.assign('https://www.alcohol.org.nz/');
})


// Check if we've already checked the user's age in this session.
async function checkSessionStorage() {
    await sleep(1500)
    if(!sessionStorage.getItem('ageChecked')) {
        checkAge();
    }
}


function checkAge() {
    // hide background
    $("#dim-background").css("display", "block");
    // disable scrolling
    $("body").css("overflow-y", "hidden");
    // show pop-up
    $("#ageCheckContainer").css("display", "block");
}


// Delay function before redirect to alcohol.govt.nz
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
