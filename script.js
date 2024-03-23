
const outputYear = querySelector(".output-year");
const outputMonth = querySelector(".output-month");
const outputDay = querySelector(".output-day");

const submitButton = querySelector(".submit-button");

const inputYear = querySelector("#year");
const inputMonth = querySelector("#month");
const inputDay = querySelector("#day");


const errorYear = querySelector(".error-year");
const errorMonth = querySelector(".error-month");
const errorDay = querySelector(".error-day");
  

let isValid = false;

submitButton.addEventListener("click" , calculateDate)

inputDay.addEventListener("input" , (e)=>{
    if(+inputDay.value > 31){
        errorDay.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.textContent = "";

    }
    if(+inputDay.value === 0){
        errorDay.textContent = "This is field is required";
        isValid = false;
        return;
    }
    else{
        errorDay.textContent = "";

    }
})


inputMonth.addEventListener("input" , (e)=>{
    if(+inputMonth.value > 12){
        errorMonth.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorMonth.textContent = "";

    }
    if(+inputDay.value === 0){
        errorMonth.textContent = "This is field is required";
        isValid = false;
        return;
    }
    else{
        errorMonth.textContent = "";

    }
})


inputYear.addEventListener("input" , (e)=>{
    if(+inputYear.value > 2023){
        errorYear.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorYear.textContent = "";

    }
    if(+inputDay.value === 0){
        errorYear.textContent = "This is field is required";
        isValid = false;
        return;
    }
    else{
        errorYear.textContent = "";

    }
})

function calculateDate(){
    if(isValid){
        let birthday =  `${inputDay.value}/${inputMonth.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayObj= new Date(birthday);
        let ageDiff = Date.now() -birthdayObj;
        let ageDate= new Date(ageDiff);
        let ageYears= ageDate.getFullYear()-1970;
        let ageMonth = ageDate.getMonth();
        let ageDay= ageDate.getDay() -1;

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;
    }else{
        alert("error")
    }
}



