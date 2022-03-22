
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
    await sleep(7000)
    window.location.assign('https://www.alcohol.org.nz/');
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
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
