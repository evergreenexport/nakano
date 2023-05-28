// JS event listeners and functions for the age check pop-up.

const yesButton = document.getElementById("over18");
const noButton = document.getElementById("under18");

checkLocalStorage()


function yesButtonClick() {
    localStorage.setItem('ageChecked', true);
    localStorage.setItem('lastAgeCheck', Date.now());
    // hide pop-up
    $("#ageCheckContainer").hide(2000)
    // show page content
    $("#dim-background").css("display", "none");
    // re-allow scrolling;
    $("body").css("overflow-y", "visible");
}

async function noButtonClick() {
    // show warning
    $("#u18Warning").css("display", "block")
    // disable buttons
    yesButton.removeEventListener("click", yesButtonClick);
    noButton.removeEventListener("click", noButtonClick);
    // change appearance of buttons
    $(".over-18-button").addClass( "over-18-button-inactive" );
    // redirect
    await sleep(7000)
    window.location.assign('https://www.alcohol.org.nz/');
}


yesButton.addEventListener('click', yesButtonClick);
noButton.addEventListener('click', noButtonClick);


async function checkLocalStorage() {
    await sleep(150)
    // Check if we've checked the user's age before.
    if(!localStorage.getItem('ageChecked')) {
        checkAge();
    }
    // If we have, check how recent it was.
    if (localStorage.getItem('ageChecked')) {
        checkLastSession()
    }
}


function checkLastSession() {
    // Check if it's been more than 1 hour since the last age check
    var lastAgeCheck = localStorage.getItem('lastAgeCheck')
    // console.log("last check: ", lastAgeCheck)
    // console.log("current time: ", Date.now())
    timeDelta = Date.now() - lastAgeCheck
    // console.log("time delta: ", timeDelta)

    // 1 hr = 3,600,000 milliseconds
    if (timeDelta > 3600000) {
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
