

let solde = parseFloat(localStorage.getItem("solde")) || 10000;
document.getElementById("solde").textContent = solde.toFixed(2);

//Acheter le cours
function buyAsset(asset) {
    const priceElementId = asset === 'Au' ? 'goldPrice' : 'silverPrice';
    const assetPrice = parseFloat(document.getElementById(priceElementId).textContent);

    if (solde >= assetPrice) {
        solde -= assetPrice;
        localStorage.setItem("solde", solde);
        document.getElementById("solde").textContent = solde.toFixed(2);
        alert(`Vous avez acheté 1 unité de ${asset}. Nouveau solde : ${solde.toFixed(2)} unités.`);
    } else {
        alert("Solde insuffisant pour cet achat.");
    }
}