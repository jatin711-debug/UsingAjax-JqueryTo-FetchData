

$(document).ready(()=>{
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "713f7536d6msh175d2b3677bbed6p162f3ajsn363d8c68869d"
        }
    };
    
    $.ajax(settings).done(function(res) {
        console.log(res);
        invokeLS(res);
    });
}); //end of doc

const invokeLS = (res)=> {


    const data = JSON.stringify(res.quotes);
    localStorage.setItem("StockData",data);

    loadUpMainPage();
};

const loadUpMainPage = () => {

    let sArray = JSON.parse(localStorage.getItem("StockData"))
    for(let count = 0; count < sArray.length; count++){
        $(".sData").append(
            `
            <tr>
            <td>${sArray[count].exchange}</td>
            <td>${sArray[count].shortname}</td>
            <td>${sArray[count].symbol}</td>
            </tr>
            `
        );
    }
}; 
