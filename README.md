# node-localhost

XAMP is clunky / annoying. What if you just want to host a static site?

### Setup
I'm assuming you've installed [node.js]
  - Clone the repo
  - In a terminal / command prompt, enter the repo folder and ```npm install```
  - ```node server.js```
  - Point your browser to ```localhost:1337```

You can also access the hosted site from any device on your network by pointing it to your host's IP address, ex: ```192.168.99.999:1337```

This also allows you to use TypeKit on your localhost, provided you added ```localhost``` to your kit's allowed domains list. If you want to view your site on other devices, you'll need to add your IP address as well.

### Use
  - the `public` folder is the public root of your server
  - you'll need to set a route for each page in `server.js`. One is already set up for `index`.



   [node.js]: <http://nodejs.org>