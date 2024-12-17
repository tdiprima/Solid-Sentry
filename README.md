# Solid-Sentry

This project demonstrates a basic implementation of Solid OIDC for secure login and profile access in a web application.

### Overview

1. **Solid OIDC Integration**: The app showcases Solid OpenID Connect (OIDC) integration using `app.js` and `index.html` to handle login and fetch user profiles.
2. **Login and Session Management**: A login button triggers the OIDC flow with a designated issuer (`https://solidcommunity.net`). Post-login, `app.js` processes the session and, if valid, retrieves basic profile data, such as the user's name.
3. **Proof of Concept**: This setup serves as a foundational example of authenticating and accessing user data using Solid's framework.

### Setup and Usage

1. **Start the Solid Community Server** (optional for local development):

   ```sh
   npx @solid/community-server -p 3003 #-c @css:config/file.json
   ```

2. **Install Dependencies**:

   ```sh
   npm install @inrupt/solid-client-authn-browser @inrupt/solid-client
   ```

   - **`@inrupt/solid-client-authn-browser`**: A library for handling authentication in browser-based applications using Solid, helping users log in to Solid pods and handle session management.
   - **`@inrupt/solid-client`**: A library for interacting with Solid pods, allowing you to read from and write to pod data, manage permissions, and more.

3. **Run the App**:

   ```sh
   npm start
   ```

The app will be accessible on http://localhost:5173/ with OIDC functionality ready for testing.

<br>
