const passwordBox=document.getElementById("password")


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%_+~|/-";

function createPassword(){
    const length = parseInt(document.getElementById("len").value, 10);

    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid length.");
        return;
    }

    let password = "";
    while (password.length < length) {
   
    
        password += upperCase[Math.floor(Math.random()*upperCase.length)];
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password += numbers[Math.floor(Math.random()*numbers.length)];
        password += symbols[Math.floor(Math.random()*symbols.length)];
    

    password = password.slice(0, length);
    passwordBox.value = password;
}
}

