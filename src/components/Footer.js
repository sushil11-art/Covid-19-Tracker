import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}<Link href="https://github.com/sushil11-art"><GitHubIcon /></Link>&nbsp;<Link href="https://www.facebook.com/susill.phuyal/"><FacebookIcon/></Link>&nbsp;<Link href="https://www.linkedin.com/in/sushil-phuyal-481aaa1b0/"><LinkedInIcon/></Link>
        {/* <Link color="inherit" href="https://material-ui.com/"> */}
        {/* </Link>{' '} */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const useStyles=makeStyles((theme)=>({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      }
}));
const Footer=()=>{
    const classes=useStyles();
    return (
        <>
    {/* Footer */}
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Connect with me 
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}        
      </>
    );
}

export default Footer;