import props from 'js/core/props';

import exempleVert from '../shaders/exemple-vert';
import exempleFrag from '../shaders/exemple-frag';

class Exemple extends THREE.Object3D {
  constructor() {
    super();

    // ##
    // INIT
    // - color
    // - materials
    // const exempleMaterial = new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading } );
    const exempleShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
       color: { type: 'v4', value: new THREE.Vector4(0.3, 0.8, 0.4, 1)},
      },
      vertexShader: exempleVert,
      fragmentShader: exempleFrag,
      wireframe : true
    });
    // - object
    const exempleGeometry = new THREE.BoxGeometry(1, 1, 1);
    // - CREATE MESH
    this.exempleMesh = new THREE.Mesh(exempleGeometry, exempleShaderMaterial);

    // ##
    // ADD TO EXEMPLE OBJECT
    this.add(this.exempleMesh);

    // ##
    // SAVE BINDING
    this._binds = {};
    this._binds.onUpdate = this._onUpdate.bind(this);
  }

  _onUpdate() {
    this.rotation.x += props.rotation;
    this.rotation.y += props.rotation;
  }
}

module.exports = Exemple;
