import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../css/table.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: 100
  },
});

export default function TableData({datas}) {
    // console.log(datas);
  const classes = useStyles();

  const renderData=()=>{
      return datas.map((data)=>{
          // console.log(data);
          return (
            <StyledTableRow key={data.country}>
                <StyledTableCell component="th" scope="row">
                {data.country}
              </StyledTableCell>
              <StyledTableCell align="right">{data.cases}</StyledTableCell>
              <StyledTableCell align="right">{data.todayCases}</StyledTableCell>
              <StyledTableCell align="right">{data.recovered}</StyledTableCell>
              <StyledTableCell align="right">{data.todayRecovered}</StyledTableCell>
              <StyledTableCell align="right">{data.deaths}</StyledTableCell>
              <StyledTableCell align="right">{data.todayDeaths}</StyledTableCell>
              <StyledTableCell align="right">{data.active}</StyledTableCell>
            </StyledTableRow>
          )
       
      })
  }
  // renderData();
  return (
    <div className="table">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country Name</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Cases Today</StyledTableCell>
            <StyledTableCell align="right">Recovered Cases&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Recovered Today&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Death Count&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Death Today&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Active Cases&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderData()}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
