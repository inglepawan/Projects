let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let errorMsg = document.getElementById("errorMsg");

function generateQR() {
    if (qrText.value.trim().length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.style.display = "block"; // show the image box
        errorMsg.innerText = ""; // clear any error message
    } else {
        imgBox.style.display = "none"; // hide image box
        errorMsg.innerText = "Kindly enter text or URL.";
    }
}
