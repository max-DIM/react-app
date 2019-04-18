import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Data from './Data';
import Axios from 'axios';

const openWeatherMapURL = "https://samples.openweathermap.org/data/2.5/forecast";
const openWeatherMapKey = "ea43cb71bd69ee378eccc1219bb7a9ab";

class App extends Component {
  state={
    search:"New York",
    cities:[]
  }
  render() {
    return (
        <div>
          <div className="App container">
            <h1 className="display-2">Weather App</h1>
              <Search
                      city ={this.state.search}
                      onChange={search => this.setState({search})}
                      onSearch={()=>{

                        const alreadyExist = this.state.search.find(data => {
                          return data.city.name.toLowerCase() === this.state.search.toLowerCase();
                        })

                        if (!alreadyExist) {
                          //te.search)
                          Axios.get(openWeatherMapURL, {
                            params: {
                              q: this.state.search,
                              appId: openWeatherMapKey
                            }
                          }).then(response=> {
                            //console.log("Axios is done")
                            const {data} = response;
                            this.setState({
                              search:"",
                              cities: {
                                ...this.state.cities,
                                [this.state.cities]: data
                              }
                            })
                          })
                        }
                }}></Search>
            <Data cities={this.state.cities}></Data>
          </div>
        </div>
    )
  }
}

export default App;
