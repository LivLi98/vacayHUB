
console.log('uhhh');

let dayBox=document.querySelector('.days');

let mDays=31;

for(x=1;x<=mDays;x++){
    dayBox.innerHTML+=`<div class="day">${x}</div>`
}

