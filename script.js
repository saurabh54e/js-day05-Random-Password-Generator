const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allCharacters = uppercase + lowercase + numbers + symbols;

// Helper → random character
function getRandomChar(str){
    return str[Math.floor(Math.random() * str.length)];
}

// Fisher-Yates shuffle
function shuffle(str){
    const arr = str.split("");
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

function createPassword(){

    const length = Math.max(4, parseInt(lengthInput.value) || 12);

    let password = "";


    password += getRandomChar(uppercase);
    password += getRandomChar(lowercase);
    password += getRandomChar(numbers);
    password += getRandomChar(symbols);


    for(let i = password.length; i < length; i++){
        password += getRandomChar(allCharacters);
    }

    passwordBox.value = shuffle(password);
}

// Generate
generateBtn.addEventListener("click", createPassword);

// Copy
copyBtn.addEventListener("click", async () => {

    if(!passwordBox.value){
        alert("Generate password first");
        return;
    }

    try{
        await navigator.clipboard.writeText(passwordBox.value);
        alert("Password copied!");
    }catch(err){
        console.error(err);
    }
});
const lenVal = document.getElementById("lenVal");

lengthInput.addEventListener("input", () => {
    lenVal.textContent = lengthInput.value;
});