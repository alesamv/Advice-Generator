
const API = "https://api.adviceslip.com/advice";

let advice = document.getElementById("advice");

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();

    advice.innerHTML = `
        <h6 class="text-[#51FFA8]">A D V I C E # ${data.slip.id} </h6>
        <p class="text-[#CDE2E8] text-[28px] font-[800]">"${data.slip.advice}" </p>
    `
}

fetchData(API);

