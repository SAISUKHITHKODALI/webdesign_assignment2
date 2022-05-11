
async function getnamesandcities(){
    const userData=[
        {
            "name":"Harry Potter",
             "city":"London"
        },
        {
            "name":"Don Quixote",
            "city":"Madrid"
        },
        {
            "name":"Joan of Arc",
            "city":"Paris"
        },
        {
            "name":"Rosa Park",
            "city":"Alabama"
        },
        {
            "name":"John",
            "city":"Paris"
        }
    
        ]	
          
        //To Display all user names from city London
        userData.forEach(function(userData){
            document.getElementById('usernames').innerHTML += `<ul> ${userData.name} </ul>`
           
        })
        //To Display all user names
        userData.forEach(function(userData){
            if(userData.city == "London"){
                document.getElementById('londoncity').innerHTML = `<p> ${userData.name}</p>` 
            }
        })
		
		//To Display users with same city
		let cities = [];
		for (let i = 0; i < userData.length; i++) {
				cities.push(userData[i].city);
		}
		
		let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
		//console.log(findDuplicates(cities)) // All duplicates
		
		let samecities = [];
		for (let z = 0; z < userData.length; z++) {
			if(userData[z].city == findDuplicates(cities)){
				samecities.push(userData[z]);
			}
		}		
		console.log(samecities);
}

const freecats = 'https://api.thecatapi.com/v1/breeds'
const fakeStores = 'https://fakestoreapi.com/products'
const usersData = 'https://jsonplaceholder.typicode.com/posts'

async function fakeusersapi(){
    const fakeUsers = await fetch(usersData)
    const fakeuserData = await fakeUsers.json();
    //To get all the users with user id 1
    let usersOne = fakeuserData.filter(fakeuserData => fakeuserData.userId === 1);
    document.getElementById('userbyid').innerHTML += `Output printed in the Console`    
    console.log(usersOne)   
}

async function freefakestores(){
    const storelist = await fetch(fakeStores)
    const storesdata = await storelist.json();
    storeArray = []
    
    storesdata.forEach(function(storesdata){
        if(storesdata.price >= 100){
            document.getElementById('productprices').innerHTML += `<ul> Product Name:  ${storesdata.title} :- &nbsp; Price: ${storesdata.price} </ul>`
        }
    storeArray.push(storesdata.title)
})
  document.getElementById('productAsc').innerHTML += `<ul> ${storeArray.sort()} </ul>`  
}

async function catsapi(){
    const catList = await fetch(freecats)
    const catData = await catList.json();
    
    catsArray = []
    catData.forEach(function(catData){
       catsArray.push(catData.name)    
       if(catData.country_codes === "US"){
        document.getElementById('catsCountry').innerHTML += `<ul> ${catData.name} </ul>`
    }       
    })
    document.getElementById('catsDsc').innerHTML += `<ul> ${catsArray.reverse()} </ul>`
}

freefakestores();

getnamesandcities();

fakeusersapi();

catsapi();