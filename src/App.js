import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Countries from "./modules/Countries";

const App = () => {
  return (
    <div className='position-relative'>
      <Header/>
      <Countries/>
    </div>
  );
};

export default App;
