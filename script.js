

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

