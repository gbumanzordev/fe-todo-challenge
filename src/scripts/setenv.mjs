import { writeFile } from 'fs';

import * as dotenv from 'dotenv';
dotenv.config();

const getEnvironmentKeys = () => {
  return {
    production: process.env['PRODUCTION'],
    apiUrl: process.env['API_URL'],
  };
};

const getEnvFileContent = () => {
  const { apiUrl, production } = getEnvironmentKeys();

  return `export const environment = {
  production: ${production},
  apiUrl: '${apiUrl}',
};`;
};

const targetPaths = [`./src/environments/environment.ts`, `./src/environments/environment.development.ts`];
const envFileContent = getEnvFileContent();

targetPaths.forEach((targetPath) => {
  writeFile(targetPath, envFileContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
  });
});
