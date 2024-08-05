fetch(
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_rdiQ5TNDX8moIzRpRbo2WhZ0JT3xbgONgP3F6YHa"
)
  .then((result) => {
    //   console.log(result);
    const currencyData = result.json();
    return currencyData;
  })
  .then((currData) => {
    // console.log(currData.data.SAR.value);

    // USD To SAR
    let amount = parseInt(document.querySelector(".amount").innerHTML);
    let SARDiv = document.querySelector(".SAR");
    let toSAR = Math.round(amount * currData.data.SAR.value);
    SARDiv.innerHTML = `${toSAR} SAR`;
    // USD To EGP
    let EGPDiv = document.querySelector(".EGP");
    let toEGP = Math.round(amount * currData.data.EGP.value);
    EGPDiv.innerHTML = `${toEGP} EGP`;
  });
