const API_URL = "https://api.spacexdata.com/v3"

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}/launches`);
        const json = await response.json();
        return json;
    }catch (error) {
        console.error(error)
    }   
}

export async function getLaunchByFligthNumber(flightNumber){

    try{
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const flight = await response.json();
        return flight;
    }catch(error){
        console.error(error);
    }
}