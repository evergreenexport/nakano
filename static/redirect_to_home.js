async function redirect() {
    await sleep(7000)
    window.location.assign('https://www.nakano.nz/');
}

// Delay function before redirect to alcohol.govt.nz
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

redirect()
