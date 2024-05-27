const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = `./src/environments/environment.ts`;

let production = false;

if( process.env["APP_ENV"] != "dev" ){
  production = true;
}

let envConfigFile = `export const environment = {
   production: ${production},
   api_url: '${process.env["API_URL"]}'
};
`;


if( process.env["APP_ENV"] == "dev" ){
  envConfigFile += `import 'zone.js/dist/zone-error';`;
}


fs.writeFileSync(targetPath, envConfigFile, 'utf8');
console.log(`Output generated at ${targetPath}`);
