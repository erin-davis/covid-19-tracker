import React, { Component } from 'react'
import {Cards, Charts, CountryPicker} from "./components"
import {fetchData} from "./api"; //index is not needed bc its default
import styles from "./app.module.css"

export default class App extends Component {
  //not required to use constructor() in this case
  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker</h1>
        <Cards data={data}/>
        <Charts />
        <CountryPicker />
      </div>
    )
  }
}
