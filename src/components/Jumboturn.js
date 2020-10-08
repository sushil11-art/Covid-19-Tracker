import React from 'react';
import '../css/jumboturn.css';
import Card from './Card';

const Jumboturn=({info,setCaseType})=>{
    // console.log(info);
    return (
    <>
    <Card info={info} setCaseType={setCaseType}/>           
    <hr className="my-4" />
    </>
    );
}

export default Jumboturn;