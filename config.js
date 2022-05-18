module.exports = {
    gitAuthor: 'Renovator <noreply@kevvlvl.renovatebot.org>',
    token: 'REPLACE_GITHUB_PAT_HERE',
    platform: 'github',
    draftPr: true,
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [

        {
            repository: 'kevvlvl/quarkus-carservice-api',
            packageRules: [
                {
                    description: 'Enable Minor and Patch updates types',
                    matchUpdateTypes: ['minor', 'patch'],
                    enabled: true,
                    labels: 'UPDATE-MINOR-PATCH'
                },
            ],
        },
    ],
};