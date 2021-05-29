import { Avatar, Chip, Grid, Paper, Typography } from '@material-ui/core';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
  margin: 32px 0;
  padding: 16px;

  .gh-avatar{
      width: 128px;
      height: 128px;
  }

  .gh-user-chip{
      text-align: right;
  }

  @media only screen and (max-width: 480px) {
      h4{
          font-size: 20px;
      }
      .gh-avatar{
        width: 64px;
        height: 64px;
      }
      .gh-user-chip{
        margin-top: 8px; 
        text-align: left;
      }
  }
`;

function UserCard({user}) {
    
    return (
        <StyledUserCard>
            {console.log(user)}
            <Paper>
                <Grid container spacing={3}>
                    <Grid item sm={2} xs={4}>
                        <Avatar className="gh-avatar" src={user.avatar_url} />
                    </Grid>
                    <Grid item  container sm={10} xs={8} direction="column" spacing={2}>
                        <Grid item container>
                            <Grid item sm={9} xs={12}>
                                <Typography variant="h4" align="left">{user.login}</Typography>
                            </Grid>
                            <Grid item sm={3} xs={12} className="gh-user-chip">
                                <Chip variant="outlined" icon={<CodeOutlinedIcon/>} label={`${user.public_repos} repositories`}/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" align="left">{user.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="left">{user.bio}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </StyledUserCard>
    );
}

export default UserCard;