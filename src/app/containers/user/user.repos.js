import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { gitHubService } from '../../services/github.service';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledUserRepos = styled.div`
  margin: 32px 0;
  padding: 16px;

  .gh-avatar{
      width: 128px;
      height: 128px;
  }
  .gh-repos-header{
      font-weight: bold;
  }
`;

function UserRepos({userName}) {
    var [repos, setRepos] = useState([]);

    useEffect( ()=> {
        gitHubService.getRepos(userName)
                     .then(response => setRepos(response));
    }, [userName]);

    return (
        <StyledUserRepos>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell className="gh-repos-header">Name</TableCell>
                            <TableCell className="gh-repos-header" align="left">Created at</TableCell>
                            <TableCell className="gh-repos-header" align="right">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {repos.map((repo) => (
                        <TableRow key={repo.id}>
                            <TableCell component="th" scope="row">
                                {repo.name}
                            </TableCell>
                            <TableCell align="left">{new Date(repo.created_at).toLocaleString()}</TableCell>
                            <TableCell align="right">
                                <Link href={repo.html_url}>{repo.html_url}</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledUserRepos>
    );
}

export default UserRepos;