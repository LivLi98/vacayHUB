
let url = 'http://api.weatherapi.com/v1';
let apiKey ='?key=c021b43ef7ef412eac6134345233003&q=';


let today = new Date();
let todaysDay=today.getDate();
let todaysMonth=today.getMonth();
let todaysYear=today.getFullYear();

let vacationDayObjects=[];


let cityInputElement=document.getElementById('city-input');
let startDateElement=document.getElementById('start');
let endDateElement=document.getElementById('end');
let submitButton=document.getElementById('submit-data');

let vacationDataBox=document.querySelector('.api-data');
let imageBox=document.querySelector('.changing-images');


let buildVacationDay=(dataSet)=>{
    vacationDayObjects.push({
        date: dataSet.forecast.forecastday[0].date.slice(5),
        condition: dataSet.forecast.forecastday[0].day.condition.icon,
        high: dataSet.forecast.forecastday[0].day.maxtemp_f,
        low: dataSet.forecast.forecastday[0].day.mintemp_f
    })
}

let buildHTML=(vacObj)=>{
    console.log(vacObj.length)
    vacObj.forEach(vac=>{
        vacationDataBox.innerHTML+=`
        <div>
            <div>${vac.date}</div>
            <img src="${vac.condition}">
            <div>H: ${Math.floor(vac.high)}\xB0F</div>
            <div>L: ${Math.floor(vac.low)}\xB0F</div>
        </div>`
    })
}

let fetchDays=(vacDay)=>{
    //getting data within 14 days
    if(vacDay<16){
        fetch(`${url}/forecast.json${apiKey}${cityValue}&dt=${startDateFormat}`)
        .then(response=>response.ok?response.json():null)
        .then(data=>{
            buildVacationDay(data);
        })
    }else{
        fetch(`${url}/future.json${apiKey}${cityValue}&dt=${startDateFormat}`)
        .then(response=>response.ok?response.json():null)
        .then(data=>{
            buildVacationDay(data);
        })
    }
}

let buildSite=async()=>{
    let dayObject=await fetchDays();
}

submitButton.addEventListener('click',(e)=>{

    vacationDayObjects=[];
    vacationDataBox.innerHTML=''
    
    let cityValue=cityInputElement.value;
    let startDate=startDateElement.value;
    let endDate=endDateElement.value;

    let sDate=new Date(startDate);
    let eDate=new Date(endDate);

    eDate.setDate(eDate.getDate()+1);

    let daysBetween=(start,end)=>Math.ceil((end.getTime()-start.getTime())/(1000*3600*24));

    let numVacationDays=daysBetween(sDate,eDate);

    if(numVacationDays>0){
        imageBox.style.display='none';
        for(let x=0;x<(numVacationDays);x++){

            sDate.setDate(sDate.getDate()+1);

            let startDateFormat=`${sDate.getFullYear()}-${(sDate.getMonth()+1)<10?`0${sDate.getMonth()+1}`:sDate.getMonth()+1}-${sDate.getDate()<10?`0${sDate.getDate()}`:sDate.getDate()}`

            let fromToday=daysBetween(today,sDate)

            
        }
    }else(vacationDataBox.innerHTML='Invalid Dates');
    console.log(vacationDayObjects)
    console.log(vacationDayObjects)
    buildHTML(vacationDayObjects)
})

let arr=[1,2]
console.log(arr.length)