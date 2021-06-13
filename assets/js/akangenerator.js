let form = document.getElementById("formSubmit").addEventListener("click", function(e){
  e.preventDefault()
})

//Get user inputsfrom form
function akanGenerator(){
  let dd = document.getElementById("date").value;
  let mm = document.getElementById("month").value;
  let yy = document.getElementById("year").value;

  if(document.getElementById("male").checked){
    let male = true;
  }
  else{
    let female = true;
  }

  //Variables
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let males = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
  let females = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  //Calculate specific day of the week
  let birthday = new Date(mm + '/' + dd + '/' + yy);
  let dayOfTheWeek = birthday.getDay;

  //Validitation of empty fields
  if(dd === '' || mm === '' || yy === ''){
    document.getElementById("output").innerText = "Please Fill In ALL The Fields!"
  }
  //Validitation of days between 1 - 31
  else if(dd <= 0 || dd > 31){
    document.getElementById("output").innerText = "Sorry your date is invalid! Please enter a valid date!"
  }
  //Validitation of months between 1 - 12
  else if(mm <= 0 || mm > 12){
    document.getElementById("output").innerText = "Sorry your date is invalid! Please enter a valid month!"
  }
  //Validitation of months with 31 days only
  else if ((mm === "0" || mm === "2" || mm === "4" || mm === "6" || mm === "7" || mm === "9" || mm === "11") && (dd <= 0 || dd > 31)){
    document.getElementById("output").innerText = "The Selected Month Has 31 Days Only!"
  }
  //Validitation of months with 30 days only
  else if((mm === "1" || mm === "3" || mm === "5" || mm === "8" || mm === "10") && (dd <= 0 || dd > 30)){
    document.getElementById("output").innerText = "The Selected Month Has 30 Days Only!"
  }
  //Validate leap years for February
  else if((mm === "1") && (dd <= 0 || dd > 29) && (yy % 4 == 0)){
    document.getElementById("output").innerText = "This is a Leap Year. February Has 29 Days Only!"
  }
  //Validitation non-leap years for February
  else if((mm === "1") && (dd <= 0 || dd > 28) && (yy % 4 != 0)){
    document.getElementById("output").innerText = "This is not a Leap Year!. February Has 28 Days Only!"
  }
}