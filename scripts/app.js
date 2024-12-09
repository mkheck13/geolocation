import { APIKEY } from "./environment.js";

// this is a built in API that will allow the user to get their current location upon accepting the prompt

// navigator returns the geolocation object
// getCurrentPostion() returns the current postion of the user

navigator.geolocation.getCurrentPosition( success, erroFunc );
//think of this as  a if else statement. if the user appects it is successful, if not it is and error

// Example of a geolocation object
{
    coords: {
        latutude: 37.7749;
        longitude: -122.4194;
    }
}

function success(position){
    console.log(position);
    console.log("our latitude is:" +position.coords.latutude);
    console.log("our longitude is:" +longitude.coords.longitude);
    console.log("we know where you are")
}


// function erroFunc(error){
//     console.log(error.message)
// }

function apiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall();