import github from 'octonode';

const GITHUB_TOKEN = "";
const client = github.client(GITHUB_TOKEN);

export const gitHubService = {

    getUser(userName){
        return client.user(userName)
                     .infoAsync()
                     .then(response => response[0]);
    },

    getRepos(userName){
        return client.user(userName)
                     .reposAsync()
                     .then(response => response[0])
                     .catch(() => []);
    },
}

