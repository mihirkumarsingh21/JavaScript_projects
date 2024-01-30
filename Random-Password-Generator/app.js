const passwordBox = document.querySelector("#password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialSymbol = "@#$%^&*(_-)+=}{[]|/";

const allChar = upperCase + lowerCase + numbers + specialSymbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
  
  // console.log(password += allChar[Math.floor(Math.random() * allChar.length)]);
  
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
}
