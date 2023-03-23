// DADI 

document.getElementById("genera").addEventListener("click", function(){
  let utente = Math.ceil(Math.random() * 6 )
  
  document.getElementById("utente").innerHTML = `
  Il tuo numero è ${utente}  
  `
  let computer = Math.ceil(Math.random() * 6)

  document.getElementById("computer").innerHTML = `
  Il mio numero è ${computer}
  `

})