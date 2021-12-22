function generateAkanName () {
    //pull elements from form
    let yob1 = document.getElementById("yob").value;
    let mob1 = Number(document.getElementById("mob").value);
    let dob1 = Number(document.getElementById("dob").value);
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
      if (mob1 === 2 && Number(yob1)%4 === 0) {
        if (dob1 > 28 || dob1 < 1) {
          return false;
        } else if (mob1 === 2 && dob1 > 29) {
          return false;
        } else if (mob1 === 2 && dob1 < 1) {
          return false;
        } else {
          return true;
        }
      } else if (dob1 < 1 || dob1 > 31){
        return false;
      } else {
        return true;
      }
    }
  
    //validation variables
    let validM = monthValidator();
    let validD = dayValidator();
  
    //formula to determine day of birth from sunday to saturday
    let dayOfWeekNumber = Math.floor((((Number(yob1.slice(0,2))/4)-2*Number(yob1.slice(0,2))-1)+
            ((5*Number(yob1.slice(2,4))/4))+((26*(mob1+1)/10))+dob1)%7);
  
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
        alert("You were born on a " + daysOfWeek[index] + " and your Akan name is " + maleAkanNames[index]);
      return false;
    } else if (myGenderValue == "female" && validM && validD) {
      alert("You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index]);
      return false;
    } else {
      alert("Invalid Day or Month Entered, Please Enter Again");
    }
  }
  