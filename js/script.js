document.addEventListener("DOMContentLoaded", function () {
    const percentageElement = document.querySelector('.percentage');
    const loadingDiv = document.querySelector('.loading');

    // Seteamos el tiempo de la pagina loading (e.g., 5 seconds)
    const loadingTime = 5000;
    const intervalTime = loadingTime / 100;
    let currentPercentage = 0;

    //Incrementamos el porcentaje cada intervalo de tiempo en milisegundos.
    const interval = setInterval(function () {
        currentPercentage += 1;
        updatePercentage(currentPercentage);

        if (currentPercentage >= 100) {
            clearInterval(interval);
            redirectToMain();
        }
    }, intervalTime);

    function updatePercentage(percent) {
        percentageElement.textContent = `${percent}%`;
    }
    
    // Funcion que te redirige a la pagina principal 
    function redirectToMain() {
        window.location.href = "index.html"; // 
    }
});

//src="https://i.imgur.com/jf5gh6Y.gif" 