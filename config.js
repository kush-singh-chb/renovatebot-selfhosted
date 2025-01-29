module.exports = {
    platform: "github",
    autodiscover: true,
    branchPrefix: 'renovate/',
    onboarding: true,
    onboardingConfig: {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "extends": [
            "github>kush-singh-chb/renovatebot-selfhosted:kush-config.json"
        ],
    },
    endpoint: 'https://api.github.com/',
    token: "",
//  "extends": ["config:recommended", ":skipStatusChecks"],
};