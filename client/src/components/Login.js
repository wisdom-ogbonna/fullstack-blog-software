import React from 'react'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core"
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Signup from './Signup';



function Login() {
    const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "40px auto" }
    const AvatarStyle = { backgroundColor: "#1877F2" }
    const myButton = { backgroundColor: "#1877F2", color: "white"}
    return (


        <Grid>

            <Paper elevation={10} style={paperStyle}>

                <Grid align="center">
                    <Avatar style={AvatarStyle}>
                        <LockOpenOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>

                </Grid>
                <TextField label='username' placeholder='Enter UserName' fullWidth required />
                <TextField label='password' placeholder='Enter Password' fullWidth type='password' required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" fullWidth style={myButton} variant="contained">Sign In</Button>
                <Typography>
                    <Link href="#" >
                    Forgot Password
                    </Link>
                </Typography>
                <Typography>do you have an account?
                    <Link to={<Signup/>} >
                    SignUp
                    </Link>
                </Typography>



            </Paper>

        </Grid>
    )
}

export default Login