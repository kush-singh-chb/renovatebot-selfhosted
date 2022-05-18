module.exports = {
    gitAuthor: 'Renovator <noreply@kevvlvl.renovatebot.org>',
    token: 'REPLACE_GITHUB_PAT_HERE',
    platform: 'github',
    // executionTimeout: 60, // set max timeout of 60 minutes.
    // cacheDir: '',         // change where renovate's cache is stored.
    persistRepoData: true,   // repo data is kept between executions. git fetch will be used instead of git clone.
    draftPr: true,
    // dryRun: 'full',       // when activated, no PR is created. Obtain detailed log of what Renovate will do
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [

        {
            // The PR's metadata (title, desc, etc.) can be customised using multiple configs: https://docs.renovatebot.com/configuration-options/#prtitle
            repository: 'kevvlvl/quarkus-carservice-api',
            cloneSubmodules: true,                         // default = false. Make sure SSH auth is configured where RenovateBot is running
            addLabels: 'Renovated by the Renovator!',      // Not be supported in BitBucket: https://docs.renovatebot.com/modules/platform/bitbucket-server/
            additionalReviewers: 'team-leads@kevvlvl.github.com',
            ignoreDeps: ['assertj-core', 'rest-assured'],
            packageRules: [
                {
                    description: 'Enable Minor and Patch updates types',
                    matchUpdateTypes: ['minor', 'patch'],
                    enabled: true,
                    labels: 'UPDATE-MINOR-PATCH'           // Not be supported in BitBucket: https://docs.renovatebot.com/modules/platform/bitbucket-server/
                },
                // {   // This rule will tell renovatebot to ignore all packages starting with "rest" excluding rest-assured
                //     matchPackagePatterns: ["^rest"],
                //     excludePackageNames: ["rest-assured"]
                // }
            ],
        },
    ],
};