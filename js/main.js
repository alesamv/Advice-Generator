
const API = "https://api.adviceslip.com/advice";

const adviceNumber = document.getElementById("number__advice");
const adviceText = document.getElementById("text__advice");
const btn = document.getElementById("refresh");

btn.addEventListener('click', btnRefresh)

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();

    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
    adviceText.innerHTML = `"${data.slip.advice}"`;
}

function btnRefresh() {
    fetchData(API);
}

fetchData(API);

