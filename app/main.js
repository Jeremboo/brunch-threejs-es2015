import Webgl from 'js/core/Webgl';
import loop from 'js/core/Loop';
import props from 'js/core/props';
import Exemple from 'js/components/Exemple';


// ##
// INIT
const webgl = new Webgl(window.innerWidth, window.innerHeight);
document.body.appendChild(webgl.dom);
// - Add object update to loop
loop.add(webgl.onUpdate);

// ##
// GUI
const gui = new dat.GUI();
gui.add(props, 'rotation', 0.01, 1);
gui.close();

// ##
// EXEMPLE LIGHT
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(1, 1, 1);
webgl.add(light);

// ##
// EXEMPLE BOX
const exemple = new Exemple();
webgl.add(exemple);
loop.add(exemple.onUpdate);

// ##
// RENDERER
loop.start();


// ##
// ON RESIZE / ORIENTATION CHANGE
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  webgl.onResize(w, h);
}

window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);
