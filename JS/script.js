// COSE CHE MANCANO:
// 1. controllo email;
// 2. svuotare il campo una volta inviata l'email;
// 3. risultato del gioco ai dadi (determinare chi vince Etc.)

// ELENCO EMAIL 
const arremail = [
  'andrea2convertini@gmail.com',
  'ciccillo@cacace.it',
  'pinco@pallino.it',
  'tizio@caio.sempronio',
  'email@email.email'
];

const btnInvia = document.getElementById("invia");
const output = document.getElementById('output');
const btnGenera = document.getElementById("genera");

let message = '';
let mailTrovata = false;

btnInvia.addEventListener("click", function(){

  const email = document.getElementById("email").value;

  for (let i = 0; i < arremail.length; i++){

    // questa azione mi deve entrare nella testa 
    const listaEmail = arremail[i];
    // questa azione mi deve entrare nella testa 

    if (listaEmail === email) {
      mailTrovata = true;
    }
  }

  if(mailTrovata){
    message = `OK`
  }else{
    message = `NOT FOUND`
  }
  
  output.innerHTML = message;
})




// DADI 

let vincitore = document.getElementById("vincitore");

btnGenera.addEventListener("click", function(){
  //genero il numero
  let utente = Math.ceil(Math.random() * 6 );
  //inserisco il numero in HTML
  document.getElementById("utente").innerHTML = `${utente}`;

  let computer = Math.ceil(Math.random() * 6);
  document.getElementById("computer").innerHTML = `${computer}`;

  if (utente > computer){
    vincitore.innerHTML = `utente`
  }else if (computer > utente){
    vincitore.innerHTML = `computer`
  }else {
    vincitore.innerHTML = `patta`
  }

});

