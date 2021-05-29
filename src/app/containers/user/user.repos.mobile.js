import { Grid, Link, Paper, Typography } from '@material-ui/core';
import { gitHubService } from 'app/services/github.service';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledUserReposMobile = styled.div`
  margin: 32px 0;
  padding: 16px;

  .gh-avatar{
      width: 128px;
      height: 128px;
  }
  .gh-repos-header{
      font-weight: bold;
  }

  .gh-repo{
    margin: 16px 0;
    padding: 16px;
  }

  .gh-repo-label{
    font-weight: bold;
    line-height: 24px;
    text-align: left;
   }

   .gh-repo-value{
    line-height: 24px;
    text-align: right;
   }

   .gh-repo-link{
    line-height: 24px;
    overflow: hidden;
   }
`;

function UserReposMobile({userName}) {
    var [repos, setRepos] = useState([]);

    useEffect( ()=> {
        gitHubService.getRepos(userName)
                     .then(response => setRepos(response));
    }, [userName]);

    return (
        <StyledUserReposMobile>
            {repos.map((repo) => (
                <Paper key={repo.id} className="gh-repo">
                    <Grid container>
                        <Grid item xs={4} className="gh-repo-label"><Typography variant="subtitle1">Name</Typography></Grid> 
                        <Grid item xs={8} className="gh-repo-value">{repo.name}</Grid> 
                        <Grid item xs={4} className="gh-repo-label"><Typography variant="subtitle1">Created at</Typography></Grid> 
                        <Grid item xs={8} className="gh-repo-value">{new Date(repo.created_at).toLocaleString()}</Grid> 
                        <Grid item xs={12} className="gh-repo-link"><Link href={repo.html_url}>{repo.html_url}</Link></Grid> 
                    </Grid>
                </Paper>
            ))}
        </StyledUserReposMobile>
    );
}

export default UserReposMobile;