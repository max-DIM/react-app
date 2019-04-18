import React from 'react';

function Data(props) {
    const {cities = [] }= props;
    return (
        <div className={"list"}>
            {
                cities.map((cityData, index) => {
                    const {city, list} = cityData;
                    const [main] = list;

                    return (
                        <div key={index}>
                            <h4>{city.name}</h4>
                            <h5>{main.weather[0].description}</h5>
                        </div>
                    )
                })
            }
        </div>
    );
}



export default Data;