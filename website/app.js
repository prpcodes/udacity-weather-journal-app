/* Global Variables */
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let zipCode = '10001';
let apiKey = 'ef4e3b78548a4d6a518f96e68460622f';

//TODO: Add Country Code??
// API CALL = api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
console.log(`${baseURL}${zipCode}&appid=${apiKey}`);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);



document.getElementById('generate').addEventListener('click', getEntrys);

function getEntrys(){
    const text =  document.getElementById('feelings').value;
    console.log(text)
    const zip =  document.getElementById('zip').value;
    console.log(zip)
    //add response
};


/*
const getProjectData = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
*/