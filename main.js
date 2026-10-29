
// Capitolo 2 setItem

//localStorage.setItem("audio", "80")
//localStorage.setItem("notifiche", "attive")

// Capitolo 3 getItem

//localStorage.setItem("tema", "chiaro")
//const temaAttivo = localStorage.getItem(tema)
//console.log(temaAttivo);

// Capitolo 4 removeItem

//localStorage.setItem("lingua", "it");
//localStorage.setItem("volume", "80");
//localStorage.removeItem("volume");
//localStorage.setItem("notifiche", "disattivate");


// Capitolo 5 clear

//localStorage.setItem("colore", "viola")
//localStorage.setItem("nome utente", "Lisa")
//localStorage.clear();

// Capitolo 6 JSON.stringify

//const prodotto = {
//    nome: "Mouse",
//   prezzo: 20
//};

//const prodottoJSON = JSON.stringify(prodotto);
//console.log(prodottoJSON);


// Capitolo 7 JSON.parse


//const prodottoJSON = '{"nome":"Tastiera","prezzo":49}';

//const prodotto = JSON.parse(prodottoJSON);
//console.log(prodotto.prezzo);


// Capitolo 8 Oggetti e array nel localStorage

const prodotto = {
    nome: "libro",
    quantità: 2

};

const categorie = ["gialli", "romanzi", "thriller"];

localStorage.setItem("prodotto", JSON.stringify(prodotto));
localStorage.setItem("categorie", JSON.stringify(categorie));

const prodottoTop = JSON.parse(localStorage.getItem("prodotto"))
const categorieTop = JSON.parse(localStorage.getItem("categorie"))

console.log(prodottoTop);
console.log(categorieTop);