import props from 'js/core/props';

class Webgl {
  constructor( ){
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, 0, 1, 1000);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer({
      antialias : true
    });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor(0x0c171a);
    this.dom = this.renderer.domElement;

    this.usePostprocessing = false;
    // this.composer = new WAGNER.Composer(this.renderer);
    // this.composer.setSize(this.width, this.height);
    this.initPostprocessing();

    this._binds = {};
    this._binds.onUpdate = this._onUpdate.bind( this );
    this._binds.onResize = this._onResize.bind( this );
  }

  init() {
    window.addEventListener( "orientationchange", this._binds.onResize, false );
    this._onResize();
  }

  initPostprocessing() {
    if (!this.usePostprocessing) return;
    this.vignettePass = new WAGNER.VignettePass();
    this.fxaaPass = new WAGNER.FXAAPass();
  }

  add(mesh) {
    this.scene.add(mesh);
  }

  _onUpdate() {
    if (this.usePostprocessing) {
      this.composer.reset();
      this.composer.renderer.clear();
      this.composer.render(this.scene, this.camera);
      this.composer.pass(this.fxaaPass);
      this.composer.pass(this.vignettePass);
      this.composer.toScreen();
    } else {
      this.renderer.autoClear = false;
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    }
  }

  _onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}

module.exports = new Webgl();
