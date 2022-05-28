module.exports = {
    gitAuthor: 'Renovator <noreply@kevvlvl.renovatebot.org>',
    token: '',
    platform: 'github',
    // executionTimeout: 60, // set max timeout of 60 minutes.
    // cacheDir: '',         // change where renovate's cache is stored.
    persistRepoData: true,   // repo data is kept between executions. git fetch will be used instead of git clone.
    dryRun: 'full',       // when activated, no PR is created. Obtain detailed log of what Renovate will do
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [
        {
            repository: 'kevvlvl/quarkus-carservice-api',
            cloneSubmodules: true,
            addLabels: 'Renovated by the Renovator!',
            packageRules: [
                {
                    description: 'Enable Minor and Patch updates types',
                    matchUpdateTypes: ['minor', 'patch'],
                    enabled: true,
                    labels: 'UPDATE-MINOR-PATCH'
                },
            ],
        },
        {
            repository: 'kevvlvl/ApiTestCucumber',
            cloneSubmodules: true,
            addLabels: 'Renovated by the Renovator!',
            packageRules: [
                {
                    description: 'Enable Minor and Patch updates types',
                    matchUpdateTypes: ['minor', 'patch'],
                    enabled: true,
                    labels: 'UPDATE-MINOR-PATCH',
                    matchPackagePrefixes: [
                        "com.fasterxml",
                        "io.rest-assured",
                        "org.hamcrest",
                    ],
                    excludePackagePrefixes: ["io.cucumber", "org.apache"]
                },
                {
                    matchUpdateTypes: ['minor', 'patch'],
                    enabled: false,
                    labels: 'UPDATE-MINOR-PATCH',
                    matchPackagePrefixes: [
                        "io.cucumber",
                        "org.apache"
                    ],
                },
            ],
        },
    ],
};