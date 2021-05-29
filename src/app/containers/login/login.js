import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginContainer = styled.div`
    margin-top: 64px;

    .gh-login-title, .gh-login-button{
        font-weight: bold;
        margin: 32px 0;
    }

    .gh-login-label{
        text-align: right;
    }

    @media only screen and (max-width: 480px) {
        .gh-login-grid{
            padding: 0 32px;
        }
        .gh-login-label{
            text-align: left;
        }
    }
`;

function LoginContainer() {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const doLogin = () => {
        if (userName === "") return setError("Debe ingresar un usuario");
        if (password === "") return setError("Debe ingresar un password");
        history.push("/user");
    }

    return (
        <StyledLoginContainer>
            <Paper>
                <Grid container spacing={3} direction="column" className="gh-login-grid">
                    <Grid item>
                        <Typography variant="h6" align="center" className="gh-login-title">
                            Bienvenido a GitHub Helper, por favor ingresa tus credenciales
                        </Typography>
                    </Grid>
                    <Grid item container spacing={4} >
                        <Grid item xs={12} sm={6} className="gh-login-label">
                            <Typography variant="subtitle1" display="inline">Usuario</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField data-testid="userName" fullWidth value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={4}>
                        <Grid item xs={12} sm={6} className="gh-login-label">
                            <Typography variant="subtitle1" display="inline">Password</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField data-testid="password" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item className="gh-login-button">
                        <Button data-testid="btnLogin" variant="contained" color="primary" onClick={doLogin}>Login</Button>
                        {error && 
                            <Typography variant="subtitle2" className="gh-error">
                                {error}
                            </Typography>
                        }
                    </Grid>
                    <Grid item className="gh-login-button">
                        <Typography variant="body2" display="inline">
                            No tienes un usuario, <Link to="/register">registrate aqui</Link> 
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </StyledLoginContainer>
    );
}

export default LoginContainer;