import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import LoginContainer from '../login/login';
import RegisterContainer from '../register/register';
import UserContainer from '../user/user';

const StyledMainContainer = styled.div`
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;

    .gh-content {
        flex-grow: 1;
        margin-top: 32px;
    }

    h6 {
        width: 100%;
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        overflow-x: hidden;

        .gh-content {
            padding: 0 16px;
        }

        h6 {
            font-size: 16px;
        }
    }
`;

function MainContainer(props) {
    return (
        <StyledMainContainer>
            <Router>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" >NUWE HACKATON - GitHub helper</Typography>
                    </Toolbar>
                </AppBar>
                <div className="gh-content">
                    <Switch>
                        <Route path="/user">
                            <UserContainer />
                        </Route>
                        <Route path="/register">
                            <RegisterContainer />
                        </Route>
                        <Route path="/">
                            <LoginContainer />
                        </Route>
                    </Switch>
                </div>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" align="center">Copyright diego.parra.leal@gmail.com - 2021</Typography>
                    </Toolbar>
                </AppBar>
            </Router>
        </StyledMainContainer>
    );
}

export default MainContainer;