

<<<<<<< HEAD
 

let eventContainer = document.getElementsByClassName(".api-data");

function displayEvents(type) {
    eventContainer.innerHTML = ''
    fetch('https://outsida.p.rapidapi.com/api/v1/events/%7Bid%7D')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((city) => {
            eventContainer.innerHTML(
                
                `
				<div class="api-data">$</div> 
                `
            );
        });
    })

 
    .then(() => {
		let clickCity = document.getElementsByClassName('.submit-button');
		clickCity.forEach(clickCity => {
			clickCity.addEventListener('click', (event) => {
				 
				displayEvents(); 
			
			})
        })
    });
}





// // This is from the API source
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a3b73e3d83msh053eec02e0fdf9fp1395d6jsn16d5961429dd',
// 		'X-RapidAPI-Host': 'outsida.p.rapidapi.com'
// 	}
// };






// let clickCity = document.getElementsByClassName('.input-fields > city-label');
// clickCity.forEach(clickCity => {
// 	clickCity.addEventListener('click', (event) => {
         
// 		displayEvents()
			                
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


 

let eventContainer = document.getElementsByClassName(".api-data");

function displayEvents(type) {
    eventContainer.innerHTML = ''
    fetch('https://outsida.p.rapidapi.com/api/v1/events/%7Bid%7D')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((city) => {
            eventContainer.innerHTML(
                
                `
				<div class="api-data">$</div> 
                `
            );
        });
    })

 
    .then(() => {
		let clickCity = document.getElementsByClassName('.submit-button');
		clickCity.forEach(clickCity => {
			clickCity.addEventListener('click', (event) => {
				 
				displayEvents(); 
			
			})
        })
    });
}





// This is from the API source
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3b73e3d83msh053eec02e0fdf9fp1395d6jsn16d5961429dd',
		'X-RapidAPI-Host': 'outsida.p.rapidapi.com'
	}
};






// let clickCity = document.getElementsByClassName('.input-fields > city-label');
// clickCity.forEach(clickCity => {
// 	clickCity.addEventListener('click', (event) => {
         
// 		displayEvents()
			                
=======
// function displayEvents(type) {
// 		drinksContainer.innerHTML = ''
// 		fetch(`https://serpapi.com/search.json?engine=google_events&q=Events+in+${city}&hl=en&gl=us`)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			data.forEach((drink) => {
// 				drinksContainer.insertAdjacentHTML(
// 					"beforeend",
// 					`
// 					<article class="drink">
// 						<h3 id="drink-name">${drink.title}</h3>
// 						<img src="${drink.image}" alt="" height="250px" width="250px">
// 						<p id="drink-description">${drink.description}</p>
// 						<button>Try It</button>
// 					</article>
// 					`
// 				);
// 			});
// 		})
// 	}

>>>>>>> js
