let dayBox=document.querySelector('.days');

let mDays=31;

//builds out the boxes for days in the month dynamically 
//based on a potentially variable amount of days
for(x=1;x<=mDays;x++){
    dayBox.innerHTML+=`<div class="day">${x}</div>`
}

let dayElements=document.querySelectorAll('.day');
let itin=document.getElementById('itinerary')

let dayObjectsJSON=localStorage.getItem('vacationDayObjectsJ');
let vacationDayObjects=JSON.parse(dayObjectsJSON);
vacationDayObjects?null:vacationDayObjects=[];

console.log(vacationDayObjects)

let butto=document.getElementById('appendData');


//when the button is pressed, data is appended to the calendar appropriately
butto.addEventListener('click', (e)=>{
    dayElements.forEach(d=>{
        vacationDayObjects.forEach(vac=>{
        //for each iteration down the calendar, it iterates down the 
        //array of objects and compares the information to match a day with
        //the correct info
        if(parseInt(vac.date.slice(3))==d.innerHTML){
                d.innerHTML+=`<span class='vac-info'><br>High Temp: ${vac.high}</span>`
                d.style.backgroundColor='rgb(241, 239, 236)';
                d.addEventListener('click', (e)=>{
                    //each day box when clicked will clear out the itinerary
                    //then add in all the plan data for that day
                    itin.innerHTML=``;
                    vac.toDo.forEach(v=>{
                        itin.innerHTML+=`<br>Time: ${v.time}: ${v.description}`
                    })
                })
            }
        })
    })
})





