const mySlider = document.getElementById("mySlider");
const myRange = document.getElementById("myRange");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordResult = document.getElementById("passwordResult");

myRange.textContent = mySlider.value;

const slider = document.getElementById("mySlider");
const rangeDisplay = document.getElementById("myRange");

mySlider.addEventListener("input", function(){
    myRange.textContent = mySlider.value;
});

function generatePassword(){
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=.,><?/\|[]{}`~';

    let allowedChars = "";

    if(lowerCase.checked) allowedChars += lowerCaseChars;
    if(upperCase.checked) allowedChars += upperCaseChars;
    if(numbers.checked) allowedChars += numberChars;
    if(symbols.checked) allowedChars += symbolChars;

// If no options are selected, notifies user to pick an option.
    if(allowedChars === "") {
        passwordResult.textContent = "Please select at least one option to customize your password.";
        return;
    }

// Gets password length from the slider.
    const passwordLength = parseInt(mySlider.value);

    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordResult.textContent = password;
}

document.querySelector("button").addEventListener("click", generatePassword);

//     allowedChars += includeLowerCase ? lowerCaseChars : "";
//     allowedChars += includeUpperCase ? upperCaseChars: "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     // const passwordLength = document.getElementById("myRange");

//     if(lowerCase.checked && upperCase.checked && numbers.checked && symbols.checked){
//         passwordResult.textContent = password;
//     }
//     if(upperCase.checked){
//         passwordResult.textContent = 'You chose upper case.';
//     }
//     if(numbers.checked){
//         passwordResult.textContent = 'You chose numbers.';
//     }
//     if(symbols.checked){
//         passwordResult.textContent = 'You chose symbols.';
//     }
// }

//     if(length <= 0){
//         return `(Password length must be at least 1.)`;
//     }
//     if(allowedChars.length === 0){
//         return '(At least one set of characters needs to be selected)';
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 10;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, 
//                                 includeLowerCase, 
//                                 includeUpperCase, 
//                                 includeNumbers, 
//                                 includeSymbols);
// console.log(`Generated Password: ${password}`);
//