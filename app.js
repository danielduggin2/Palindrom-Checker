const checkButton = document.getElementById("check-btn");
const inputElement = document.getElementById("text-input");

// pre-process the string
const preProcessString = (str) => {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "").toLowerCase();
  return cleanedStr;
}

// check for palindrome
const isPalindrome = (str) => {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

checkButton.addEventListener("click", () => {
    const inputValue = inputElement.value.trim();
    //check if the input is empty
    if(inputValue === ""){
      alert("Please input a value");
      return;
    } 
    const preprocessedStr = preProcessString(inputValue);
    const isPalindromeBool = isPalindrome(preprocessedStr);
    const userInputText = document.querySelector(".user-input");
    const resultDiv = document.getElementById("result");
    // Update content with "is" or "is not" palindrome
    if (isPalindromeBool) {
      resultDiv.textContent = `${inputValue} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputValue} is not a palindrome`;
    }

     //update user input text
    userInputText.textContent = inputValue;
    });

    // inputElement.addEventListener("click", () => {
    //   // handling everything in the checkButton event listener
    // });