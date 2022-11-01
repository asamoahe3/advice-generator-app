const adviceID = document.querySelector('.advice-id');
const adviceQuote = document.querySelector('.advice-quote');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    async function getData() {
        try {
            //get api response
            const response = await fetch("https://api.adviceslip.com/advice");
            let data = await response.json();

            adviceID.innerHTML = `#${data.slip.id}`;
            adviceQuote.innerHTML = `"${data.slip.advice}"`;
            console.log(data)
        } catch (err) {
            adviceQuote.innerHTML = err;
            console.log(err)
        }
    }
    getData();
})
