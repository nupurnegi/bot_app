// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  deployment: 'local',
  debug: window['env']['DEBUG'] || true,
  APP_CONFIG_KEY: window['env']['APP_CONFIG_KEY'] || 'APP_CONFIG',
  API_BASE_URL:  window['env']['API_BASE_URL'] || 'http://localhost:3000/api',
  socket: {
    baseUrl: window['env']['IO_BASE_URL'] || 'http://localhost:3000',
    options: {forceNew: false}
  }
};
