import props from 'js/core/props';

import exampleVert from '../shaders/example-vert';
import exampleFrag from '../shaders/example-frag';

class Example extends THREE.Object3D {
  constructor() {
    super();

    // ##
    // INIT
    // const exampleMaterial = new THREE.MeshLambertMaterial({
    //   color: 0xdddddd,
    //   shading: THREE.FlatShading,
    // });
    const exampleShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: {
          type: 'v4',
          value: new THREE.Vector4(0.9, 0.715, 0.072, 1) },
      },
      vertexShader: exampleVert,
      fragmentShader: exampleFrag,
      wireframe: true,
    });
    // - object
    const exampleGeometry = new THREE.BoxGeometry(1, 1, 1);
    // - CREATE MESH
    this.exampleMesh = new THREE.Mesh(exampleGeometry, exampleShaderMaterial);

    // ##
    // ADD TO EXAMPLE OBJECT
    this.add(this.exampleMesh);

    // ##
    // SAVE BINDING
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    this.rotation.x += props.rotation;
    this.rotation.y += props.rotation;
  }
}

module.exports = Example;
