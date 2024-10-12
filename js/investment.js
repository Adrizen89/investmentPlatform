

let solde = parseFloat(localStorage.getItem("solde")) || 10000;
let goldQuantity = parseFloat(localStorage.getItem("goldQuantity")) || 0;
let silverQuantity = parseFloat(localStorage.getItem("silverQuantity")) || 0;


document.getElementById("solde").textContent = solde.toFixed(2);
document.getElementById("goldQuantity").textContent = goldQuantity;
document.getElementById("silverQuantity").textContent = silverQuantity;

//Acheter le cours
function buyAsset(asset) {
    const priceElementId = asset === 'Au' ? 'goldPrice' : 'silverPrice';
    const assetPrice = parseFloat(document.getElementById(priceElementId).textContent);

    if (solde >= assetPrice) {
        solde -= assetPrice;

        if (asset === 'Au') {
            goldQuantity += 1;
            localStorage.setItem("goldQuantity", goldQuantity);
        } else {
            silverQuantity += 1;
            localStorage.setItem("silverQuantity", silverQuantity);
        }

        localStorage.setItem("solde", solde);
        document.getElementById("solde").textContent = solde.toFixed(2);
        alert(`Vous avez acheté 1 unité de ${asset}. Nouveau solde : ${solde.toFixed(2)} unités.`);
    } else {
        alert("Solde insuffisant pour cet achat.");
    }
}

function sellAsset(asset) {
    const priceElementId = asset === 'Au' ? 'goldPrice' : 'silverPrice';
    const assetPrice = parseFloat(document.getElementById(priceElementId).textContent);


    if (asset === 'Au' && goldQuantity > 0) {
        goldQuantity -= 1;
        solde += assetPrice;
        localStorage.setItem("goldQuantity", goldQuantity);
        document.getElementById("goldQuantity").textContent = goldQuantity;
    } else if (asset === 'Ag' && silverQuantity > 0) {
        silverQuantity -= 1;
        solde += assetPrice;
        localStorage.setItem("silverQuantity", silverQuantity);
        document.getElementById("silverQuantity").textContent = silverQuantity;
    } else {
        alert(`Vous n'avez pas assez de ${asset} pour effectuer cette vente.`);
        return;
    }

    localStorage.setItem("solde", solde);
    document.getElementById("solde").textContent = solde.toFixed(2);
    alert(`Vous avez vendu 1 unité de ${asset}. Nouveau solde : ${solde.toFixed(2)} unités.`);
}
