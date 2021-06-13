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

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let males = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
  let females = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

}