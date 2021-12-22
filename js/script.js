
function generateAkanName () {
    //pull elements from form
    let yob = document.getElementById("yob").value;
    let mob = Number(document.getElementById("mob").value);
    let dob = Number(document.getElementById("dob").value);
    let gender1 = document.getElementsByName("gender");
  
    // function to get selected gender
    function getGender () {
      for (let gender of gender1){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    let myGenderValue = getGender();
    console.log(myGenderValue);
  
    // function to validate month value to be between 1 and 12
    function monthValidator () {
      if (mob < 1 || mob > 12) {
        return false;
      } else {
        return true;
      }
    }
    // function to validate date value i.e leap year 29/28 for Feb the rest 30 or 31 
    function dayValidator () {
      if (mob === 2 && Number(yob)%4 === 0) {
        if (dob > 28 || dob < 1) {
          return false;
        } else if (mob === 2 && dob > 29) {
          return false;
        } else if (mob === 2 && dob < 1) {
          return false;
        } else {
          return true;
        }
      } else if (dob < 1 || dob > 31){
        return false;
      } else {
        return true;
      }
    }
  
    //validation variables
    let validM = monthValidator();
    let validD = dayValidator();
  
    //formula to determine day of birth from sunday to saturday
    let dayOfWeekNumber = Math.floor((((Number(yob.slice(0,2))/4)-2*Number(yob.slice(0,2))-1)+
            ((5*Number(yob.slice(2,4))/4))+((26*(mob+1)/10))+dob)%7);
  
    //creating arrays of Akan names for males & females and days of the week
    let daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    let maleAkanNames = [
      "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
  
    let femaleAkanNames = [
      "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
  
    //generating and index value to select items on arrays
    let index;
    // fix formula bug
    if (dayOfWeekNumber == 0){
      index = 6;
    } else {
      index = dayOfWeekNumber - 1;
    }
  
    console.log(index);
  
    if (myGenderValue == "male" && validM && validD) {
      document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " and your Akan name is " + maleAkanNames[index];
      document.getElementById('display-name').textContent = "Here is your Akan name: ";
      document.getElementById('result').style.fontSize = "18px";
      document.querySelector('h1').textContent = "Your Akan Name is :" + maleAkanNames[index];
      return false;
    } else if (myGenderValue == "female" && validM && validD) {
      document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
      document.getElementById('display-name').textContent = "Here is your Akan name: ";
      document.getElementById('result').style.fontSize = "18px";
      document.querySelector('h1').textContent = "Your Akan Name is :"  + femaleAkanNames[index];
      return false;
    } else {
      alert("Invalid Day or Month Entered, Please Enter Again");
    }
  }
  