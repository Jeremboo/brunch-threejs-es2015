import webgl from 'js/core/Webgl';
import loop from 'js/core/Loop';
import props from 'js/core/props';
import Exemple from 'js/components/Exemple';


// ##
// INIT
webgl.init();
document.body.appendChild( webgl.dom );
// - Add object update to loop
loop.add(webgl._binds.onUpdate);

// ##
// GUI
let gui = new dat.GUI();
gui.add(props, 'rotation', 0.01, 1);
gui.close();

// ##
// EXEMPLE LIGHT
let light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set(1, 1, 1);
webgl.add(light);
// ##
// EXEMPLE BOX
let exemple = new Exemple();
webgl.add(exemple.exempleMesh)
loop.add(exemple._binds.onUpdate);

// ##
// RENDERER
loop.start();


// ##
// ON RESIZE
window.addEventListener( "resize", () => {
  webgl._binds.onResize();
}, false );
