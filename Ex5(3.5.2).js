•	let person = {
    •	  name: 'Person',
    •	  age: 123,
    •	  salary: 1542.23,
    •	  contacts: {
    •	    phone: '112',
    •	    email: 'email@domain.com'
    •	  },
    •	  adress: 'Moldova',
    •	};
    •	
    •	person.contacts.phone = '+37312345678';
    •	delete person.adress;
    •	
    •	console.log(person);
    