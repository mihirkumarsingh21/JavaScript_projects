const form = document.querySelector("form");

form.addEventListener("submit", function (forms) {
    forms.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    if(height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } 
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give  a valid weight ${weight}`;
    }
    else {
        results.innerHTML = `<span>${bmi}</span>`;
    }
})