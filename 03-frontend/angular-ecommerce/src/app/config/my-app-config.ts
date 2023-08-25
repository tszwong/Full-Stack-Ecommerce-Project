export default {
    oidc: {
        clientId: "0oaazbeg9vvRxXhsA5d7",  // public identifier
        issuer: "https://dev-99666489.okta.com/oauth2/default",  // URL when authorizing with Okta Authorization Server, issuer of tokens
        redirectUri: "http://localhost:4200/login/callback",  // where users will be sent once they log in
        scopes: ["openid", "profile", "email"]  // scopes provide access to information about a user
    }
}
