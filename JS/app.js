// DADI 

document.getElementById("genera").addEventListener("click", function(){
  let utente = Math.ceil(Math.random() * 6 )  
  document.getElementById("utente").innerHTML = `${utente}`

  let computer = Math.ceil(Math.random() * 6)
  document.getElementById("computer").innerHTML = `${computer}`

})