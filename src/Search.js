import React from 'react';

function Search({onSearch,onChange,city=""}) {
    const onInputChange=(e)=>{
        const   newValue =e.target.value;
        onChange(newValue);
    }
    return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                onSearch();

            }}>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="search" className="form-control" id="city" aria-describedby="cityHelp" required
                           placeholder="Enter a city"
                           value={city}
                           onChange={onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Go</button>
            </form>
        );
}

export default Search;