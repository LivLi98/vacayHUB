
let url = 'http://api.weatherapi.com/v1';
let apiKey ='?key=c021b43ef7ef412eac6134345233003&q=';

let withinFourteen;

let cityInputElement=document.getElementById('city-input');
let startDataElement=document.getElementById('start');
let endDateElement=document.getElementById('end');
let submitButton=document.getElementById('submit-data')

submitButton.addEventListener('click',(e)=>{
    let cityValue=cityInputElement.value.toLowerCase();
    console.log(cityValue);
})