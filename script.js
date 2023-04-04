
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
let imageBox=document.querySelector('.changing-images')


submitButton.addEventListener('click',(e)=>{

    vacationDataBox.innerHTML=''
    
    let cityValue=cityInputElement.value;
    let startDate=startDateElement.value;
    let endDate=endDateElement.value;

    let sDate=new Date(startDate);
    let eDate=new Date(endDate);

    eDate.setDate(eDate.getDate()+1);

    let difference=eDate.getTime()-sDate.getTime();
    let daysBetween=(start,end)=>Math.ceil((end.getTime()-start.getTime())/(1000*3600*24));

    let numVacationDays=daysBetween(sDate,eDate);

    if(numVacationDays>0){

        imageBox.style.display='none';
        for(let x=0;x<numVacationDays;x++){

            sDate.setDate(sDate.getDate()+1);

            let startDateFormat=`${sDate.getFullYear()}-${(sDate.getMonth()+1)<10?`0${sDate.getMonth()+1}`:sDate.getMonth()+1}-${sDate.getDate()<10?`0${sDate.getDate()}`:sDate.getDate()}`

            let fromToday=daysBetween(today,sDate)

            //getting data within 14 days
            if(fromToday<16){
                fetch(`${url}/forecast.json${apiKey}${cityValue}&dt=${startDateFormat}`)
                .then(response=>response.ok?response.json():null)
                .then(data=>{
                    vacationDataBox.innerHTML+=`
                    <div>
                        <div>${data.forecast.forecastday[0].date}</div>
                        <div>${data.forecast.forecastday[0].day.maxtemp_f}</div>
                    </div>`
                })
            }else{
                fetch(`${url}/future.json${apiKey}${cityValue}&dt=${startDateFormat}`)
                .then(response=>response.ok?response.json():null)
                .then(data=>{
                    vacationDataBox.innerHTML+=`
                    <div>
                        <div>${data.forecast.forecastday[0].date}</div>
                        <div>${data.forecast.forecastday[0].day.maxtemp_f}</div>
                    </div>`
                })
            }
        }
    }else(vacationDataBox.innerHTML='Invalid Dates');
    
})