document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#currency-converter").addEventListener("submit", async(event)=>{
        event.preventDefault();

        const {target:{from, to, amount}} = event

        const headers=new Headers()
        headers.append("apiKey","uf4HUa1l0dONbqM1QROdFqB7H5yMaH6m")

        const requestOptions={
            Method:"GET",
            headers,
        }
        try{

            let response=await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions);
            const data=await response.json()
             let {info, date ,query:{to:convertedTo}, result}=data;
             document.querySelector(".result").textContent=`as per the exchange rate: ${info.rate.toFixed(2)} for ${date}=> converted value in ${convertedTo} is ${result.toFixed(2)}`
        }
        catch(error){
            console.log(error);
        }
        
// fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
// .then(response=>response.json())
// .then(data=>{
//     // {
//     //     "success": true,
//     //     "query": {
//     //         "from": "EUR",
//     //         "to": "INR",
//     //         "amount": 78
//     //     },
//     //     "info": {
//     //         "timestamp": 1669826823,
//     //         "rate": 84.013096
//     //     },
//     //     "date": "2022-11-30",
//     //     "result": 6553.021488
//     // }

//     let {info, date ,query:{to}, result}=data;

//     document.querySelector(".result").textContent=`as per the exchange rate: ${info.rate.toFixed(2)} for ${date}=> converted value in ${to} is ${result.toFixed(2)}`
// } )
// .catch(error=>console.log(error))


    })
})