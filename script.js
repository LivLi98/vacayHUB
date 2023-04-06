
 

let eventContainer = document.getElementsByClassName(".api-data");
			                
let url = 'http://api.weatherapi.com/v1';
let apiKey ='?key=c021b43ef7ef412eac6134345233003&q=';

let numVacationDays=0;

let today = new Date();
let todaysDay=today.getDate();
let todaysMonth=today.getMonth();
let todaysYear=today.getFullYear();

let dayObjectsJSON=localStorage.getItem('vacationDayObjectsJ');
let vacationDayObjects=JSON.parse(dayObjectsJSON);
vacationDayObjects?null:vacationDayObjects=[];

let cityInputElement=document.getElementById('city-input');
let startDateElement=document.getElementById('start');
let endDateElement=document.getElementById('end');
let submitButton=document.getElementById('submit-data');

let tripWeather=document.createElement('div');
let tripSug=document.createElement('div');

let vacationDataBox=document.querySelector('.api-data');
let imageBox=document.querySelector('.changing-images');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '877a5a72fcmsh2a871114e09a22ep1a5bf4jsnff157ccbd13b',
		'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
	}
}


let buildVacationDay=async(dataSet)=>{
   return{
        date: dataSet.forecast.forecastday[0].date.slice(5),
        condition: dataSet.forecast.forecastday[0].day.condition.icon,
        high: dataSet.forecast.forecastday[0].day.maxtemp_f,
        low: dataSet.forecast.forecastday[0].day.mintemp_f,
        toDo: []
    }
}


let buildHTML=(vacObj,num)=>{
    let count=num;
    vacationDataBox.innerHTML='';
    vacationDataBox.appendChild(tripWeather);
    vacationDataBox.appendChild(tripSug);
    tripWeather.setAttribute('class', 'weather-box')
    tripSug.setAttribute('class', 'event-box');
    vacObj.forEach(vac=>{
        if(count>0){
            tripWeather.innerHTML+=`
            <div>
                <div>${vac.date}</div>
                <img src="${vac.condition}">
                <div>H: ${Math.floor(vac.high)}\xB0F</div>
                <div>L: ${Math.floor(vac.low)}\xB0F</div>
            </div>`;
            vac.toDo.forEach(activity=>{
                tripSug.innerHTML+=`
                <div class='event-item'>
                    <div class='event-day'>${vac.date}</div>
                    <div class='event-time'>${activity.time}</div>
                    <div class='event-desc'>${activity.description}</div>
                </div>`;
            }) 
        }
        count--;
    })
}


let daysBetween=(start,end)=>Math.ceil((end.getTime()-start.getTime())/(1000*3600*24));


let fetchDays=async(cName,sD)=>{
    return new Promise(resolve=>{

        let fromToday=daysBetween(today,sD);

        let startDateFormat=`${sD.getFullYear()}-${(sD.getMonth()+1)<10?`0${sD.getMonth()+1}`:sD.getMonth()+1}-${sD.getDate()<10?`0${sD.getDate()}`:sD.getDate()}`
        
        if(fromToday<16){
            fetch(`${url}/forecast.json${apiKey}${cName}&dt=${startDateFormat}`)
            .then(response=>response.ok?response.json():null)
            .then(data=>{
                resolve(buildVacationDay(data));
            })
        }else{
            fetch(`${url}/future.json${apiKey}${cName}&dt=${startDateFormat}`)
            .then(response=>response.ok?response.json():null)
            .then(data=>{
                resolve(buildVacationDay(data));
            })
        }
    })    
}


let fetchEvents=async(numdays,cityname)=>{
    return new Promise(resolve=>{
        fetch(`https://ai-trip-planner.p.rapidapi.com/?days=${numdays}&destination=${cityname}`, options)
        .then(response => response.json())
        .then(response =>{
            let dayArray=[];
            response.plan.forEach(pl=>{
                dayArray.push(pl.activities);         
            })
            resolve(dayArray);       
        }).catch(err => console.error(err));
    })
}


let buildDayInfo=async(cName,sD,eD)=>{

    numVacationDays=daysBetween(sD,eD);

    if(numVacationDays>0){
        for(let x=0;x<numVacationDays;x++){
            sD.setDate(sD.getDate()+1);
            let fetcher=await fetchDays(cName,sD);
            console.log(fetcher);
            vacationDayObjects.push(fetcher);
        }
    }else{vacationDataBox.innerHTML='Invalid Dates'}

    let getEventsList= await fetchEvents(numVacationDays,cName);

    for(let x=0;x<numVacationDays;x++){
        vacationDayObjects[x].toDo=getEventsList[x];
    }

    buildHTML(vacationDayObjects,7);

    console.log(vacationDayObjects, 'vacation day built');

    dayObjectsJSON= JSON.stringify(vacationDayObjects);

    console.log(dayObjectsJSON, 'json');

    localStorage.setItem('vacationDayObjectsJ',dayObjectsJSON);
}


submitButton.addEventListener('click',(e)=>{

    imageBox.style.display='none';

    vacationDayObjects=[];
    vacationDataBox.innerHTML='';
    
    let cityValue=cityInputElement.value;
    let startDate=startDateElement.value;
    let endDate=endDateElement.value;

    let sDate=new Date(startDate);
    let eDate=new Date(endDate);

    eDate.setDate(eDate.getDate()+1);

    buildDayInfo(cityValue,sDate,eDate);
    
})
