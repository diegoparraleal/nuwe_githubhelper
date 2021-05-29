import { render, fireEvent, act, screen, waitFor  } from '@testing-library/react';
import React from 'react';
import UserContainer from './containers/user/user';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Declare which API requests to mock
const server = setupServer(
  rest.get('https://api.github.com/users/diegoparraleal', (req, res, ctx) => {
    return res(ctx.json({
        "login": "diegoparraleal",
        "id": 15988960,
        "node_id": "MDQ6VXNlcjE1OTg4OTYw",
        "avatar_url": "https://avatars.githubusercontent.com/u/15988960?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/diegoparraleal",
        "html_url": "https://github.com/diegoparraleal",
        "followers_url": "https://api.github.com/users/diegoparraleal/followers",
        "following_url": "https://api.github.com/users/diegoparraleal/following{/other_user}",
        "gists_url": "https://api.github.com/users/diegoparraleal/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/diegoparraleal/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/diegoparraleal/subscriptions",
        "organizations_url": "https://api.github.com/users/diegoparraleal/orgs",
        "repos_url": "https://api.github.com/users/diegoparraleal/repos",
        "events_url": "https://api.github.com/users/diegoparraleal/events{/privacy}",
        "received_events_url": "https://api.github.com/users/diegoparraleal/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 1,
        "following": 0,
        "created_at": "2015-11-23T21:49:26Z",
        "updated_at": "2021-05-29T21:53:55Z"
      }));
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('can getch user info', async  () => {
  debugger;
  
  render(<UserContainer />);

  const userName = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  fireEvent.change(userName, { target: { value: 'diegoparraleal' } });
  fireEvent.click(button);
  await waitFor(() => screen.getByTestId('userCard'))
  expect(screen.getByTestId('userCard')).toBeInTheDocument();
  
});

