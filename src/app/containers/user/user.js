import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useWindowWidth } from '@react-hook/window-size';
import { gitHubService } from '../../services/github.service';
import React, { useState } from 'react';
import styled from 'styled-components';
import UserCard from './user.card';
import UserRepos from './user.repos';
import UserReposMobile from './user.repos.mobile';

const StyledUserContainer = styled.div`
  .gh-notFound{
    margin-top: 64px;
  }
`;

function UserContainer() {
    const [userName, setUserName] = useState("diegoparraleal");
    const [user, setUser] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const isMobile = useWindowWidth() <= 400;

    const doSearch = () => gitHubService.getUser(userName)
                                        .then(response => {
                                            setUser(response);
                                            setNotFound(false);
                                            return response;
                                        })
                                        .catch( () => setNotFound(true));

    return (
        
        <StyledUserContainer>
            <Grid container spacing={3} direction="row">
                <Grid item xs={12} sm={10}>
                    <TextField fullWidth label="Introduce tu usuario de GitHub" 
                               value={userName} onChange={(e) => setUserName(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="primary" onClick={doSearch}>Buscar</Button>
                </Grid>
            </Grid>
            {user && 
                <div data-testid="userCard">
                    <UserCard user={user} />
                    { !isMobile &&
                        <UserRepos userName={userName} />
                    }
                    { isMobile  &&
                        <UserReposMobile userName={userName} />
                    }
                </div>
            }
            {notFound &&
                <Typography variant="h4" className="gh-notFound" align="center">User not found </Typography>
            }
        </StyledUserContainer>
    );
}

export default UserContainer;