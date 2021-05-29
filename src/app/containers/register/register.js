import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledRegisterContainer = styled.div`
    margin-top: 64px;

    .gh-register-title, .gh-register-button{
        margin: 32px 0;
        font-weight: bold;
    }

    .gh-register-label{
        text-align: right;
    }

    @media only screen and (max-width: 480px) {
        .gh-register-grid{
            padding: 0 32px;
        }
        .gh-register-label{
            text-align: left;
        }
    }
`;

function RegisterContainer() {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [error, setError] = useState("");

    const doRegister = () => {
        if (userName === "") return setError("Debe ingresar un usuario");
        if (password === "") return setError("Debe ingresar un password");
        if (password !== passwordAgain) return setError("Los passwords deben ser identicos");

        history.push("/user");
    }
    return (
        <StyledRegisterContainer>
            <Paper>
                <Grid container spacing={3} direction="column" className="gh-register-grid">
                    <Grid item>
                        <Typography variant="h6" align="center" className="gh-register-title">
                            Crea un nuevo usuario para poder disfrutar de nuestros servicios
                        </Typography>
                    </Grid>
                    <Grid item container spacing={4}>
                        <Grid item xs={12} sm={6} className="gh-register-label">
                            <Typography variant="subtitle1" display="inline">Crea un nombre de usuario</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4}>
                        <Grid item xs={12} sm={6} className="gh-register-label">
                            <Typography variant="subtitle1" display="inline">Define un password</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4}>
                        <Grid item xs={12} sm={6} className="gh-register-label">
                            <Typography variant="subtitle1" display="inline">Tipea de nuevo el password</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth type="password" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item className="gh-register-button">
                        <Button variant="contained" color="primary" onClick={doRegister}>Register</Button>
                        {error && 
                            <Typography variant="subtitle2" className="gh-error">
                                {error}
                            </Typography>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </StyledRegisterContainer>
    );
}

export default RegisterContainer;