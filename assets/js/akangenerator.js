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

}