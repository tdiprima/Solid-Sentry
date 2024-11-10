# solid-6088

This setup provides a foundational example of how Solid OIDC works in practice.

1. **Solid OIDC Integration**: I created a simple app using `app.js` and `index.html` to demonstrate Solid OIDC login and profile access.

2. **Login Functionality**: I set up a login button in `index.html` that, when clicked, initiates the Solid login process with an OpenID Connect (OIDC) issuer (`https://solidcommunity.net`) configured in `app.js`.

3. **Session Handling and Profile Display**: In `app.js`, after login, `handleIncomingRedirect` manages the session. If the user is logged in, the app fetches and displays the user's profile name using Solid's client libraries.

4. **Proof of Concept**: This setup successfully demonstrates logging in with Solid OIDC and fetching/displaying basic profile information (e.g., name) from the user's WebID profile. 



### A. Start the Solid Community Server on Port 3003 with a Specific Config

```sh
npx @solid/community-server -p 3003 #-c @css:config/file.json
```

- If you do this, then uncomment the proper `SOLID_IDP` in app.js
- **npx**: Executes the specified package (`@solid/community-server`) without needing a global installation.
- **`@solid/community-server`**: Runs the Solid Community Server, a server that enables you to host personal data pods for Solid applications.
- **`-p 3003`**: Sets the server to run on port `3003` instead of the default port.
- **`-c @css:config/file.json`**: Specifies a configuration file (`file.json`) located within the `@css:config` directory, defining server setup details like storage, authentication, and access control settings. <mark>**EXCEPT**</mark> we didn't install `@solid/community-server` so that folder and file does not exist.

This command launches the Solid Community Server with custom configurations on port 3003.

### B. Install Solid Client Libraries for Browser Authentication
```sh
npm install @inrupt/solid-client-authn-browser @inrupt/solid-client
```

- **`@inrupt/solid-client-authn-browser`**: A library for handling authentication in browser-based applications using Solid, helping users log in to Solid pods and handle session management.
- **`@inrupt/solid-client`**: A library for interacting with Solid pods, allowing you to read from and write to pod data, manage permissions, and more.

This command installs both libraries, making it easier to build applications that authenticate users and access their data on Solid pods.

<br>
