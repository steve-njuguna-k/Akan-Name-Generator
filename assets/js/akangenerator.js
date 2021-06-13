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

}