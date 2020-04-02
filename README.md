# Blog (blog)

A frontend for a blogging platform

## Steps to run the application

### Install the dependencies
```bash
npm i
```

### Start the app in development mode (you will need to install quasar cli npm install -g @quasar/cli)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build
```

### Run proxy server for get all related links alone, only curl command worked hence running the command in a exec function
```bash
node proxy.js
```

### Host the files in the dist folder as a static server to view the app or you can start it in dev mode using quasar