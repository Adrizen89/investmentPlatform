
// Utiliser la variable API_KEY
const apiKey = "goldapi-60fhsm2646jeg-io";

console.log(apiKey);
var myHeaders = new Headers();
myHeaders.append("x-access-token", apiKey);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


async function fetchAndDisplayChart() {
    try {

        const responseGold = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);
        const dataGold = await responseGold.json();
        

        const responseSilver = await fetch("https://www.goldapi.io/api/XAG/USD", requestOptions);
        const dataSilver = await responseSilver.json();

        // Afficher les prix dans les éléments HTML
        document.getElementById('goldPrice').textContent = dataGold.price.toFixed(2);
        document.getElementById('silverPrice').textContent = dataSilver.price.toFixed(2);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        alert('Impossible de récupérer les données des cours. Veuillez réessayer plus tard.');
    }
}


fetchAndDisplayChart();
setInterval(fetchAndDisplayChart, 60000);

