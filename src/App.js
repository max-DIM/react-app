import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App container">
                    <h1 className="display-2 text-center mb-5">Weather App</h1>
                    <Search
                        onSearch={
                            cityName=>{
                                console.log (cityName);
                            }
                        }
                    ></Search>
                </div>
            </div>
        );
    }
}

export default App;
