import React from 'react';
import CountUp from 'react-countup';

const Detail=({total,casesToday,title,today})=>{
    if (total){
        return (
            <>
            <h1 className="card-title" style={{textAlign:"center",maxHeight:"80%"}}>{title}<br/><CountUp end={total} duration={1} /></h1>
            <h3 className="card-title" style={{textAlign:"center"}}>{today}<br/><CountUp end={casesToday} duration={1} /></h3>
            </>
        );
    }
    else{
        return (
        <>
        <h1 className="card-title" style={{textAlign:"center",maxHeight:"80%"}}>{title}<br/><CountUp end={0}duration={1} /></h1>
        <h3 className="card-title" style={{textAlign:"center"}}>{today}<br/><CountUp end={0} duration={1} /></h3>
        </>
        );
    }
    
}

export default Detail;