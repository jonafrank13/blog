# Blog (blog)

A frontend for wordpress sites utilizing the wordpress APIs
Features Pagination Support , Filter by categories , tags etc

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

### Technical structuring
The dev work is separated into individual concerns and folders

The component folder holds the reusable components created for the app

The pages folder holds the pages of the app, the blogs view and the article view

The config folder has the configurations for the entire app, any configuration could be modified there

The app.service file has the central store and the access methods for the app

### Things i could have done better
- Separated the central store from app.service, this would have been the best practice
- Added test cases for the components
- Modularized the code further as there is greater scope for bettering it always
- provide more props for each component so that it's truly customizable, like styles, classes etc
- Cleaned up the mainlayout.vue to make it further modularized
