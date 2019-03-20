# Local-Tiles-Server
This project aims to provide a solution about local tiles server



## What you will gain?

* Use Leaflet.js to build a interactive maps
* Learn how to use Express.js as backend and provide APIs
* Use Nginx  as local server and store static resources
* Pull tiles from OpenStreetMap (OSM) to local 



## How to do?

### Step1: Leaflet

Official Tutorial:   [https://leafletjs.com/examples/quick-start/](https://leafletjs.com/examples/quick-start/)

* Include Leaflet CSS file in the head of your HTML file

  ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
     integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
     crossorigin=""/>
  ```

* Include Leaflet JS file **after** CSS

  ```html
   <!-- Make sure you put this AFTER Leaflet's CSS -->
   <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
     integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
     crossorigin=""></script>
  ```

* Include a `div` in with a certain `id` in your HTML

  ```html
   <div id="mapid"></div>
  ```

* Create map view and draw tileLayer 

  ```javascript
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  ```

BUT, you should follow latest usage from official tutorial 

### Step2: Build Express.js as an backend and provide APIs

Before you do anything, you need to install Node.js and npm

* Create project (RestAPIServer)

  ```shell
  mkdir RestAPIServer
  cd RestAPIServer
  npm init # package.json will appear
  ```

* Install Express

  ```shell
  npm install express --save 
  ```

* add index.js

  ```js
  // FileName: index.js
  // Import express
  let express = require('express')
  // Initialize the app
  let app = express();
  // Setup server port
  var port = process.env.PORT || 8080;
  // Send message for default URL
  app.get('/', (req, res) => res.send('Hello World with Express'));
  // Launch app to listen to specified port
  app.listen(port, function () {
       console.log("Running RestHub on port " + port);
  });
  ```

* add APIs (create api-routes.js)

  ```javascript
  // Filename: api-routes.js
  // Initialize express router
  let router = require('express').Router();
  // Set default API response
  router.get('/', function (req, res) {
      res.json({
         status: 'API Its Working',
         message: 'Welcome to RESTHub crafted with love!',
      );
  });
  // Export API routes
  module.exports = router;
  ```

* Change the index.js because this api

  ```javascript
  // FileName: index.js
  // Import express
  let express = require('express')
  // Initialize the app
  let app = express();
  // Setup server port
  var port = process.env.PORT || 8080;
  // Send message for default URL
  app.get('/', (req, res) => res.send('Hello World with Express'));
  // Launch app to listen to specified port
  app.listen(port, function () {
       console.log("Running RestHub on port " + port);
  });
  
  // Add the code below to index.js
  // Import routes
  let apiRoutes = require("./api-routes")
  // Use Api routes in the App
  app.use('/api', apiRoutes)
  ```

* Start your API server

  ```shell
  node index.js # then you can check localhost:8080 on your browser
  ```

#### Project structure

```
RestAPIServer
	- api-routes (empty)
	- controller (empty)
	- model (empty)
	- node_modules (files that installed before)
	- api-routes.js
	- index.js
	- package.json
	
```

### Step 3: Configure your Nginx

Since I use Windows OS, so I just need to download the [.exe file](http://nginx.org/en/docs/windows.html)

```shell
cd your_nginx_file
nginx.exe # Turn on
nginx.exe -s stop # Turn off
```

So there is no additional usage, we just need to put these thing into `Nginx`

### Step 4: Download map tiles

The standard URL format would be `https://xxxxx/{z}/{x}/{y}` . Also, there have a lot of open source map like OpenstreetMap, Mapbox etc. I just mention some usages and you can see how it works. [Here](https://github.com/brandonxiang/pyMap) is my reference tool 

* install requirement package 

  ```shell
  pip install requirementx.txt
  ```

* edit your config.conf file

  ```
  [config]
  下载方式 = 瓦片编码
  左上横轴 = 803
  左上纵轴 = 984
  右下横轴 = 857
  右下纵轴 = 1061
  级别 = 8
  项目名 = test
  地图地址 = default
  
  OR
  
  [config]
  下载方式 = 地理编码
  左上横轴 = 113.889962
  左上纵轴 = 22.456671
  右下横轴 = 114.212686
  右下纵轴 = 22.345576
  级别 = 13
  项目名 = sample
  地图地址 = gaode
  ```

* use getMapTiles.py

## How to use this repository QUICKLY

```shell
git clone https://github.com/halolong/Local-Tiles-Server.git
# install nginx and replace the `html` folder
# delete the node_modules and install express like mentioned above
# RUN getMaptiles.py and pull map tiles to local PC
# When you ready these things
cd your_nginx_folder
Nginx.exe
cd ../your_RestAPISever_folder
node index.js
# Then you can enjoy right now!
```





## 



