import React, { Component } from 'react'
import {Cards, Charts, CountryPicker} from "./components"
import {fetchData} from "./api"; //index is not needed bc its default
import styles from "./app.module.css"
import covidImage from "./images/covid.png";

export default class App extends Component {
  //not required to use constructor() in this case
  state = {
    data: {},
    country: "",
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    console.log('fetched data from app.js presents: ', fetchedData)
    console.log('from app.js present country: ', country);

    this.setState({data: fetchedData, country: country})

  }
  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImage} alt="header image that reads COVID-19" className={styles.image}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country}/>
      </div>
    )
  }
}
