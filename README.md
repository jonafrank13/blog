# Blog (blog)

A frontend for a blogging platform

I followed the design elements from https://www.truecaller.com/ so that we can reuse the components here and plug it in the existing system

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

### Things i could have done better, given more time
- Separated the central store from app.service, this would have been the best practice
- Added test cases for the components
- Modularized the code further as there is greater scope for bettering it always
- Added the proxy for all routes, but didnt do so as the exception was only for one path and didnt make sense to add additional hops
- provide more props for each component so that it's truly customizable, like styles, classes etc
- Cleaned up the mainlayout.vue to make it further modularized

### Final notes
- Would love to discuss the architectural decisions i made here in person
- I focused on delivering a very good output in a short time rather than spending too much time in code, hence the choice of frameworks used
