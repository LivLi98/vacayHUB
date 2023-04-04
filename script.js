

 

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
			                
