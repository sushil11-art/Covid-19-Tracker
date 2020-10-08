import React from 'react';
const Navbar=()=>{
  // console.log(props);
  function RefreshPage(){
    window.location.reload(false);
  }
    return (
        <nav className="navbar navbar-dark bg-primary">
        <button type="button" className="btn btn-dark navbar-brand">Covid-19 Tracker</button>
        <button type="button" className="btn btn-info" onClick={RefreshPage}>Worldwide Cases</button>
        </nav>
    );
}
export default Navbar;