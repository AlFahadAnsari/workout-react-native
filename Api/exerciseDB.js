import { ApiKey } from "../constants/SliderImages"

const baseUrl = "https://exercisedb.p.rapidapi.com/"

const apiCall= async (url, params)=>{
    try {   

        const options = {
            method:"GET",
            url,
            params,
            headers: {
                'x-rapidapi-key': ApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
              },
            }
            const response = await axios.request(options);
           console.log(response.data);
        
    } catch (error) {
        console.log("error is" + error)
    }
}


export const ApiCallBodyPart =  async (bodyPart)=>{
    const data = await (baseUrl + `exercises/bodyPart/${bodyPart}`)
    return data
}