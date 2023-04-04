

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
