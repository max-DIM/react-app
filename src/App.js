import React from 'react';

/*const App = ()=> {
  return (
    <div>
      <h1 className="display-1">Weather App</h1>
    </div>
  );
};*/

export const appTitle = "Awesome Weather App";

function App(){
    return (
        <div className="container">
            <div className="display-2">{appTitle}</div>
        </div>
    );
}

export default App;