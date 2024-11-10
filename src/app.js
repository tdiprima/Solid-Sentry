import { login, handleIncomingRedirect, fetch } from "@inrupt/solid-client-authn-browser";
import { getSolidDataset, getThing, getStringNoLocale } from "@inrupt/solid-client";

// const SOLID_IDP = "https://inrupt.net";
// const SOLID_IDP = "https://solidcommunity.net";
const SOLID_IDP = "http://localhost:3003";

// Handle redirect after login
handleIncomingRedirect().then((session) => {
  console.log("Session:", session);
  if (session.isLoggedIn) {
    displayProfile(session.webId);
  }
});

// Login button click event
document.getElementById("loginButton").addEventListener("click", () => {
  login({ oidcIssuer: SOLID_IDP, redirectUrl: window.location.href });
});

// Fetch and display profile info
async function displayProfile(webId) {
  const dataset = await getSolidDataset(webId, { fetch: fetch });
  const profile = getThing(dataset, webId);
  const name = getStringNoLocale(profile, "http://xmlns.com/foaf/0.1/name");
  document.getElementById("profile").textContent = `Hello, ${name || "user"}!`;
}
