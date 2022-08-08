import { makeStyles } from '@material-ui/core/styles';
// This folder contains a defalt style of our application
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  // thiS command only for devices that are small like phones
  [theme.breakpoints.down('sm')]: { 
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
  
}));