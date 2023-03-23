•	let user1 = {
    •	  name: `User1`,
    •	  age: 123,
    •	};
    •	
    •	let user2 = {};
    •	
    •	for(let key in user1) {
    •	  user2[key] = user1[key];
    •	}
    •	
    •	user2.name = `User2`;
    •	user2.age = 321;
    •	console.log(user2);
    