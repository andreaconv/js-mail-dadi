// ELENCO EMAIL 
const arremail = [
  'andrea@andrea.andrea',
  'email@email.email'
];

document.getElementById("invia").addEventListener("click", function(){

  const email = document.getElementById("email").value;
  console.log(email);

  for (let i = 0; i < arremail.length; i++){

    if (email == arremail[i]) {
      // le email sono corrette
    }
  }

})



// DADI 

document.getElementById("genera").addEventListener("click", function(){
  let utente = Math.ceil(Math.random() * 6 )  
  document.getElementById("utente").innerHTML = `${utente}`

  let computer = Math.ceil(Math.random() * 6)
  document.getElementById("computer").innerHTML = `${computer}`

})
