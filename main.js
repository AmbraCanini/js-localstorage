
// Capitolo 2 setItem

localStorage.setItem("audio", "80")
localStorage.setItem("notifiche", "attive")

// Capitolo 3 getItem

localStorage.setItem("tema", "chiaro")
const temaAttivo = localStorage.getItem(tema)
console.log(temaAttivo);
