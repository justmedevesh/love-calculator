function calculateLove(){

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 === ""){
        alert("Enter the name");
    }else{
        const lovepercantage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love percentage is: ${lovepercantage}`;


        if(lovepercantage < 30){
            result.innerHTML += "<br> Not a grate match keep looking for another"
        }else if(lovepercantage >= 30 && lovepercantage < 70){
            result.innerHTML += "<br> There is a potential give it a try"
        }else{
            result.innerHTML += "<br> Grate Match"
        }
    }

}