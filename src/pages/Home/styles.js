import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor: '#94b49f',
    padding: theme.spacing(8,0,6)
  },
  icon:{
    marginRight:'20px',
  },
  buttons:{
    marginTop:'40px'
  },
  grid:{
    padding: '20px 10px'
  },
  card:{
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  cardMedia:{
    paddingTop:'56.25%', //16:9
  },
  cardContent:{
    flexGrow:1,
  },
  footer:{
    backgroundColor: '#354152',
    padding:'30px 0',
    color: '#e5e3c9'
  }
}));


export default useStyles;