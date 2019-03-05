import React from 'react';

class Search extends React.Component {
    state={city:""}
    render() {
        return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                this.props.onSearch(this.state.city)

            }}>
                <div className="form-group">
                    <input type="search" className="form-control" id="city" aria-describedby="cityHelp" required
                           placeholder="Enter a city"
                           value={this.state.city}
                           onChange={(e)=>{
                               let newValue=e.target.value;
                               this.setState({city:newValue});
                               console.log("Changed")
                           }}/>
                </div>
                <button type="submit" className="btn btn-primary">Go</button>
            </form>
        );
    }
}

export default Search;