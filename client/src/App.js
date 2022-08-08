/* useeffect will be component that will update the action sent forwrd through dispatcher
building client side, we need all these components, previously installed by npm*/
import React, { useState, useEffect } from 'react'; 
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {getPosts} from './actions/posts'; 
import {useDispatch} from 'react-redux'; // thsi will allow us to dispatch an action
import memories from './images/pictures.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
  

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

// useeffect will dispatch the posts, now we have to export getposts from the actions folder; using dispatch to dispatch an action
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
return (
    <Container maxWidth="lg">
        {/*classes.appbar and calss.heading or classes.image is the style that we are using, which
        were initially downloaded using npm and imported to app.js file*/}
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">POST.IT</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
        {/*this just provides some simple animation*/}
        <Grow in>
            <Container>
                <Grid className ={classes.mainContainer} container  justify = "space-between" alignIthems = "strech" spacing ={3}>
                    {/* inside of this grid component we can add 2 diff items
                    it will take full 12 spaces for larger devices and 7 spaces for small devices
                    post component created in posts.js and then imprted here*/}
                    <Grid item xs= {12} sm = {7}> 
                    <Posts  setCurrentId ={setCurrentId}/> 
                    </Grid>
                <Grid item xs= {12} sm = {4}> 
                <Form currentId={currentId}/>
                </Grid>
                </Grid> 
            </Container>

        </Grow>

    </Container>
); 
}

export default App;