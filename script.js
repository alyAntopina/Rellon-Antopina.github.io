function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function handleEncryption() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    if (!text || isNaN(shift)) {
        alert("Please enter text and shift value.");
        return;
    }
    document.getElementById("result").textContent = encryptText(text, shift);
}

function handleDecryption() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    if (!text || isNaN(shift)) {
        alert("Please enter text and shift value.");
        return;
    }
    document.getElementById("result").textContent = decryptText(text, shift);
}

function encryptText(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let offset = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - offset + shift) % 26) + offset);
        }
        return char;
    }).join('');
}

function decryptText(text, shift) {
    return encryptText(text, 26 - (shift % 26));
}
