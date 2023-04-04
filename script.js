
let url = 'http://api.weatherapi.com/v1';
let apiKey ='?key=c021b43ef7ef412eac6134345233003&q=';


let today = new Date();
let todaysDay=today.getDate();
let todaysMonth=today.getMonth();
let todaysYear=today.getFullYear();


let withinFourteen=true;


let cityInputElement=document.getElementById('city-input');
let startDateElement=document.getElementById('start');
let endDateElement=document.getElementById('end');
let submitButton=document.getElementById('submit-data');

let vacationDataBox=document.querySelector('.api-data');



submitButton.addEventListener('click',(e)=>{
    console.log(cityInputElement.value)
    
    let cityValue=cityInputElement.value;
    let startDate=startDateElement.value;
    let endDate=endDateElement.value;

    let sDate=new Date(startDate);
    let currentDate;
    let eDate=new Date(endDate);

    let difference=eDate.getTime()-sDate.getTime();
    let daysBetween=Math.ceil(difference/(1000*3600*24));
    console.log(daysBetween);


    //getting data within 14 days
    fetch(`${url}/forecast.json${apiKey}${cityValue}&dt=${startDate}`)
        .then(response=>response.ok?response.json():null)
        .then(data=>{
            vacationDataBox.innerHTML=`
            <div>${data.forecast.forecastday[0].date}</div>
            <div>${data.forecast.forecastday[0].day.maxtemp_f}</div>`
        })
    
    
})