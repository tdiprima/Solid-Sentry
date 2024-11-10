#!/bin/bash

# npm run start -- -c config/default.json
# npm run start -- -c solid-oidc.json
# npx @solid/community-server
# npx @solid/community-server -c @css:config/default.json
# npx @solid/community-server -c node_modules/@solid/community-server/config/default.json
# npx @solid/community-server -c @css:config/no-setup.json
# NODE_DEBUG=css:* npx @solid/community-server -c node_modules/@solid/community-server/config/default.json
# npx @solid/community-server --version
npx @solid/community-server -p 3003
