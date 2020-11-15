import axios from "axios";

const apiUrl="https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{
  let dynamicUrl = apiUrl;
  if(country){
    dynamicUrl = `${apiUrl}/countries/${country}`
  }
  try{
    const {data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl);

    return {confirmed, recovered, deaths, lastUpdate};
  } catch (err){
    console.log('there is an error: ', err)
  }
}

export const fetchDailyData = async ()=>{
  try{
    const {data} = await axios.get(`${apiUrl}/daily`);
    const modifiedData = data.map((dailyData) =>({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return modifiedData;
  } catch(err){
    console.log('there as an error with the api second call: ', err)
  }
}

export const fetchCountries = async () =>{
  try {
    const {data: {countries}} = await axios.get(`${apiUrl}/countries`);
    return countries.map((country)=> country.name)

  } catch (err) {
    console.log('this is the error from countries: ', err);
  }
}