•	let menu = {
    •	  width: 200,
    •	  height: 300,
    •	  title: "My menu"
    •	};
    •	multiplyNumeric(menu);
    •	
    •	function multiplyNumeric(obj) {
    •	  for(let key in obj){
    •	
    •	    (typeof(obj[key]) === 'number') ? (obj[key] *= 2) : (false); //typeof controleaza daca obiectul este numar apoi se dubleaza numarul
    •	  }
    •	}
    •	
    •	console.log(menu);
    