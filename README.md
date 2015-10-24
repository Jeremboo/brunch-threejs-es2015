# Brunch app


This is brunch skeleton for starting a project in **WebGL** with [Three.js](http://threejs.org/),  [ES6](http://es6-features.org) and [WAGNER](https://github.com/spite/Wagner).


## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
* Create a new project and download dependencies :
	* `brunch new myapp --skeleton https://github.com/Jeremboo/brunch-threejs-es6` - create new project
    * `npm install & bower install` - Brunch plugins and Bower dependencies
* Or use git to clone the brunch-react-sass repository : 
	* `git clone https://github.com/Jeremboo/brunch-threejs-es6`


## How to use

* **Like brunch basic skeleton, use :**
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production

    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.

* **Specific to this skeleton :**
	
	* You can use this dir `/app/js/components/` for placed your THREE.object3D components. For my part, I create one component for each 3D objet. There is an example of object 3D in this dir (`Exemple.js`) for showing you how can you create a THREE.object3D with ES6.
	
    * This directory `/app/js/core/` contain the classes of setting :
        * `Webgl.js` initialises the 3D scene and the camera.
        * `Loop.js` allows to manage the frame animation for each update of 3Dobjects.
        * `props.js` is a file who contains all variables of settings who can be use in all other file. It's specially created for be used by [dat.gui](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage)
        
    * `/app/js/main.js` allows to show you how all of this files are using for create and animate a 3D object.

    * I also used [WAGNER](https://github.com/spite/Wagner)  for have a choice of post processing already avaible.


## Thanks to

   - [Valentin Daguenet](http://vdaguenet.fr/) and his repository [Threejs-starter-kit](https://github.com/vdaguenet/threejs-starter-kit).
   
   - [Florian Zumbrunn](http://www.floz.fr/) for his starter kit during his Three.js workshop. 