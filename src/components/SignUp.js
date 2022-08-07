import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


import './SignUp.css'
import {createUseStyles} from 'react-jss'
import instaLogo from '../Assests/Instagram.jpg'

export default function SignUp() {
    const useStyles = createUseStyles({
        text1 : {
            color :'grey' 
        } ,
        buttonMargin :{
            marginTop: '4%'
        }
    })

    const classes = useStyles()


    return (
        <div className='signupWrapper'>
            <div className='signupCard'>
                <Card sx={{ maxWidth: 345 }}>

                    <div>
                        <img src={instaLogo} />
                    </div>
                   
                    <CardContent>
                        <Typography variant='subtitle1' className={classes.text1}>
                             Sign up to see photos and videos from your friends.
                        </Typography>
                        {true && <Alert severity="error">This is an error alert — <strong>check it out!</strong></Alert>}
                        <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" fullWidth={true} size='small' />
                        <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" fullWidth={true} size='small' />
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" margin="dense" fullWidth={true} size='small' />

                        <Button color="primary" className={classes.buttonMargin} variant='outlined' fullWidth={true} size='small' component="label" > Upload Profile Picture
                           <input type='file' accept='image/*' hidden/> 
                        </Button>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    );
}
