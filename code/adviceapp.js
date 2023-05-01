const button = document.querySelector(".button");
const quote = document.querySelector("#quote");
const quoteid = document.querySelector("#advice-num");

const quotecreator = async () => {
    const config = { headers: { Accept: "application/json" } }
    const quotetext = await axios.get("https://api.adviceslip.com/advice", config);
    const Advice = await quotetext.data.slip;
    quote.textContent = Advice.advice;
    quoteid.textContent = String(Advice.id);
}

button.addEventListener("click", quotecreator);
