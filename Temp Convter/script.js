const celsiusFeild = document.querySelector("#Celsius");
const degree = document.querySelector("#degree");
const converterBtn = document.querySelector("#converter-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", ()=>{
     degree.value = "";
     celsiusFeild.innerHTML = "";
})

converterBtn.addEventListener("click", (e) =>{
     e.preventDefault();
     convertToCelsius();

     //adding loading features
     converterBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
     setTimeout(() =>{
        converterBtn.innerHTML = "<span>convert</span>";
     }, 1000)
})

function convertToCelsius(){
    let inputValue =  degree.value;
    
    setTimeout(() =>{
        if(tempType.value === "fahrenhiet"){
            const fahrenhietToCelsius = (inputValue-32) * (5/9);
            celsiusFeild.innerHTML = `${fahrenhietToCelsius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value === "kelvin"){
            const kelvinToCelsius = inputValue - 273.15;
            celsiusFeild.innerHTML =  `${kelvinToCelsius.toFixed(3)} &deg;c`;
        }
    }, 1200)
   
}