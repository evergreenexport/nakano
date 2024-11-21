const copyAccountNameBtn = document.getElementById("copyAccountNameBtn")

copyAccountNameBtn.addEventListener(
  "click", () => writeClipboardText(document.getElementById("accountName").innerText)
);

const copyAccountNoBtn = document.getElementById("copyAccountNoBtn")

copyAccountNoBtn.addEventListener(
  "click", () => writeClipboardText(document.getElementById("accountNo").innerText)
);


async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

