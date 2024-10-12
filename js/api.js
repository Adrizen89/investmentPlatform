

const updatePrices = () => {

    // A l'attendant l'api réelle 
    const goldPrice = Math.random() * (60 - 50) + 50;
    const silverPrice = Math.random() * (1.2 - 0.8) + 0.8;

    document.getElementById('goldPrice').textContent = goldPrice.toFixed(2);
    document.getElementById('silverPrice').textContent = silverPrice.toFixed(2);
}

// Init et maj des valeurs toutes les minutes 
updatePrices();
setInterval(updatePrices, 60000);