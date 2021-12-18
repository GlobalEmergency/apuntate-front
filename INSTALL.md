# Install local application
With this steps you can run in your local machine the development environment.

You need first the API server that can be found in https://github.com/GlobalEmergency/apuntate-back

- Install ionic Globally `npm i -g ionic`
- Update local policiy to execute remote signed `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` Execute as admin powershell
- Install dependencies `npm i`
- Configure your backend url in `enviroment\environment.ts`
- Run application `ionic s`

## Compile application to publish
- Update `environment\environment.prod.ts` with your API url server
- Run `ionic build --prod`
- Upload `www` folder to your root http server
