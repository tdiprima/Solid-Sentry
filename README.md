# solid-6088

This setup provides a foundational example of how Solid OIDC works in practice.

1. **Solid OIDC Integration**: I created a simple app using `app.js` and `index.html` to demonstrate Solid OIDC login and profile access.

2. **Login Functionality**: I set up a login button in `index.html` that, when clicked, initiates the Solid login process with an OpenID Connect (OIDC) issuer (`https://solidcommunity.net`) configured in `app.js`.

3. **Session Handling and Profile Display**: In `app.js`, after login, `handleIncomingRedirect` manages the session. If the user is logged in, the app fetches and displays the user's profile name using Solid's client libraries.

4. **Proof of Concept**: This setup successfully demonstrates logging in with Solid OIDC and fetching/displaying basic profile information (e.g., name) from the user's WebID profile. 
