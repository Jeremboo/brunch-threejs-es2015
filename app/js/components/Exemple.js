import props from 'js/core/props';

class Exemple extends THREE.Object3D {
	constructor(){
		super();

		// ##
		// INIT
		// -- material
		this.material = new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading } );		
		// -- exemple of three object
		this.exempleGeometry = new THREE.BoxGeometry( 1, 1, 1 );
		this.exempleMesh = new THREE.Mesh( this.exempleGeometry, this.material );
		
		// ##
		// SAVE BINDING
		this._binds = {};
		this._binds.onUpdate = this._onUpdate.bind(this);
	}

	_onUpdate() {
		this.exempleMesh.rotation.x += props.rotation;
		this.exempleMesh.rotation.y += props.rotation;
	}

	/*createShaderMaterial() {
		let shaderName = shaderToon["shaderName"];
		let u = THREE.UniformsUtils.clone(shaderName.uniforms);
		let vs = shaderName.vertexShader;
		let fs = shaderName.fragmentShader;

		let material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs });
		material.uniforms.uDirLightPos.value = light.position;
		material.uniforms.uDirLightColor.value = light.color;

		return material;
	}*/
}

module.exports = Exemple;