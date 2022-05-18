# RenovateBot Self-Hosted

In this repo, I'm using RenovateBot to perform dependency analysis on specific repositories of my github account.

## Prerequisites

- Create a github PAT/personal access token. I strongly recommend with minimal permissions (repo only) and with a short expiry time

## Setup

1. We install renovatebot using npm
2. I then drafted a configuration file 'config.js' based on RenovateBot's configurations documented on https://docs.renovatebot.com/self-hosted-configuration/
3. The following article was helpful in getting a head start with the config file: https://jerrynsh.com/12-tips-to-self-host-renovate-bot/
4. When ready, we run renovatebot using the 'renovate' CLI command
