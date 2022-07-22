document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#currency-form').onsubmit = ()=>{
        const base = document.getElementById('currency-from').value;
        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                const amount = document.querySelector("#input-amount").value;
                const currencyTo = document.getElementById('currency-to').value;
                const rate = data.rates[currencyTo];
                function convert(){
                    return amount * rate;
                }
                document.querySelector('.display-result').innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(5)}`;
       
document.querySelector('.text-span-27').innerHTML = `${convert().toFixed(6)} ${currencyTo} `;

document.querySelector('.text-block-22').innerHTML = `Send ${convert().toFixed(7)} BTC in ONE payment<br/>Don&#x27;t Include transaction fee in this amount `;
       
            })
        .catch((error) =>{
            console.log("Error: ", error);
        });
        return false;
    };
});

