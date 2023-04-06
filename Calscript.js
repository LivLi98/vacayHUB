let dayBox=document.querySelector('.days');

let mDays=31;

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

butto.addEventListener('click', (e)=>{
    dayElements.forEach(d=>{
        vacationDayObjects.forEach(vac=>{
        console.log(vac.date.slice(3))
        if(parseInt(vac.date.slice(3))==d.innerHTML){
                d.innerHTML+=`<span class='vac-info'><br>High Temp: ${vac.high}</span>`
                d.style.backgroundColor='rgb(241, 239, 236)';
                d.addEventListener('click', (e)=>{
                    itin.innerHTML=``;
                    vac.toDo.forEach(v=>{
                        itin.innerHTML+=`<br>Time: ${v.time}: ${v.description}`
                    })
                })
            }
        })
    })
})





