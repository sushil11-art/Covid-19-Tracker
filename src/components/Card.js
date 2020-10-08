import React from 'react';
// import CountUp from 'react-countup';
import Detail from './Detail';
// Detail
const Card=({info,setCaseType})=>{
  // console.log(info.cases);
  // const cases=info.cases;
  // console.log(cases);
    return (
      <div className="row" style={{marginLeft:"40px",marginRight:"0px"}}>
      <div className="col-sm-4" onClick={()=>{setCaseType("cases")}}>
        <div className="card text-white bg-info mb-3" style={{borderRadius:"20px",width:"85%"}}>
        <div className="card-header" style={{textAlign:"center",fontWeight:"bold",fontSize:"30px",textTransform:"uppercase"}}>Cases</div>
        <div className="card-body">
        <Detail total={info.cases} casesToday={info.todayCases} title={"Total"} today={"Cases Today"}/>
          </div>
      </div>
    </div>
    <div className="col-sm-4" onClick={()=>{setCaseType("recovered")}}>
    <div className="card text-white bg-success mb-3" style={{borderRadius:"20px",width:"85%"}}>
      <div className="card-header" style={{textAlign:"center",fontWeight:"bold",fontSize:"30px",textTransform:"uppercase"}}>Recovered</div>
      <div className="card-body">
      <Detail total={info.recovered} casesToday={info.todayRecovered} title={"Total"} today={"Recovered Today"}/>
      </div>
      </div> 
    </div>
    <div className="col-sm-4" onClick={()=>{setCaseType("deaths")}}>
    <div className="card text-white bg-danger mb-3" style={{borderRadius:"20px",width:"85%"}}>
    <div className="card-header" style={{textAlign:"center",fontWeight:"bold",fontSize:"30px",textTransform:"uppercase"}}>Death </div>
    <div className="card-body">
    <Detail total={info.deaths} casesToday={info.todayDeaths} title={"Total"} today={"Deaths Today"}/>
    </div>
  </div>
    </div>
  </div>      

    );
}
export default Card;