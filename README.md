# Brunch app


This is brunch skeleton for starting a project in **WebGL** with [Three.js](http://threejs.org/),  [ES2015](http://es6-features.org) and [WAGNER](https://github.com/spite/Wagner).


## Getting started

* Install (if you don't have them):
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Brunch](http://brunch.io): `npm install -g brunch`
* Create a new project :
  * Deploy with brunch :
    * `brunch new myapp --skeleton https://github.com/Jeremboo/brunch-threejs-es6` - create new project
  * Or use git to clone the brunch-threejs-es6 repository :
    * `git clone https://github.com/Jeremboo/brunch-threejs-es6`
* Download dependencies :
    * `npm run deploy` or `npm install && npm start`


## How to use

* `npm start` or `brunch watch --server` to watch the project with continuous rebuild.
* `npm run prod` or `brunch build --production` to build minified project for production.


## More

* **Like brunch basic skeleton :**
  * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
  * Place static files you want to be copied from `app/assets/` to `public/`.

* **Specific to this skeleton :**

  * You can use this dir `/app/js/components/` for placed your THREE.object3D components. For my part, I create one component for each 3D objet. There is an example of object 3D in this dir (`Example.js`) for showing you how can you create a THREE.object3D with ES6.

  * `/app/js/shaders` contains each fragments and vertices `.glsl` files. If you need to use a couple of `.glsl` file for build a `ShaderMaterial`, you just need to import this files. Look at `Example.js` for more details.

  * This directory `/app/js/core/` contain the classes of setting :
      * `Webgl.js` initializes the 3D scene and the camera.
      * `Loop.js` allows to manage the frame animation for each update of 3Dobjects.
      * `props.js` is a file who contains all variables of settings who can be use in all other file. It's specially created for be used by [dat.gui](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage)

  * `/app/js/main.js` allows to show you how all of this files are using for create and animate a 3D object.

  * I also added [WAGNER](https://github.com/spite/Wagner) for have a choice of post processing already available.


## Thanks to

   - [Valentin Daguenet](http://vdaguenet.fr/) and his repository [Threejs-starter-kit](https://github.com/vdaguenet/threejs-starter-kit).

   - [Florian Zumbrunn](http://www.floz.fr/) for his starter kit during his Three.js workshop at Gobelins, l'école de l'image.
