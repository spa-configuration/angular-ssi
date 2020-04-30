# SPA Configuration - Angular SSI

Example of using server-side includes to inject runtime configuration to an Angular single-page app.

## Notes

 - Bootstrapped using [Angular CLI]
 - Set up for deployment to [Cloud Foundry]

## Usage

This demo includes two sets of configuration:

 - development (in `src/configuration.js`); and
 - production (in `public/config.html`).

The SSI directive in `public/index.html` is replaced by the content of `public/config.html` at
runtime, if SSI is enabled on the server (the included `Staticfile` does this for the Nginx used
in the [Staticfile buildpack]).

To run locally with the development configuration:

```bash
npm start
```

To deploy to CF with the production configuration, using the [CF CLI]:

```bash
npm run build && cf push
```

  [Angular CLI]: https://cli.angular.io/
  [CF CLI]: https://docs.cloudfoundry.org/cf-cli/install-go-cli.html
  [Cloud Foundry]: https://cloudfoundry.org/
  [Staticfile buildpack]: https://docs.cloudfoundry.org/buildpacks/staticfile/index.html
