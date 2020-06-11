/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let zipCode = '10001';
const apiPrefix = '&appid='
const apiKey = `${apiPrefix}ef4e3b78548a4d6a518f96e68460622f`;

//TODO: Figure out how to add Country Code??

// API CALL = api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
console.log(`${baseURL}${zipCode}&appid=${apiKey}`);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);



document.getElementById('generate').addEventListener('click', performAction);

const text =  document.getElementById('feelings').value;

function performAction(e){
    const zipCode =  document.getElementById('zip').value;
    getEntrys(baseURL,zipCode,apiKey)
    console.log(getEntrys);
    
    }
    const getEntrys = async (baseURL,zipCode,apiKey)=>{
    
      const res = await fetch(baseURL+zipCode+apiKey)
      try {
    
        const data = await res.json();
        console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }
