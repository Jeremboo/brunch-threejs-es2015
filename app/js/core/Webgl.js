export default class Webgl {
  constructor(w, h) {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, w / h, 1, 1000);
    this.camera.position.z = 10;

    this._renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setClearColor(0x0c171a);
    this.dom = this._renderer.domElement;

    this.usePostprocessing = false;
    this._composer = false;
    this._passes = {};
    this.initPostprocessing();
    this.onResize(w, h);

    this.onUpdate = this.onUpdate.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  initPostprocessing() {
    if (!this.usePostprocessing) return;
    // TODO add WAGNER
    this._composer = new WAGNER.Composer(this._renderer);
    this._composer.setSize(this.width, this.height);
    this._passes.vignettePass = new WAGNER.VignettePass();
    this._passes.fxaaPass = new WAGNER.FXAAPass();
  }

  add(mesh) {
    this.scene.add(mesh);
  }

  onUpdate() {
    if (this.usePostprocessing) {
      this._composer.reset();
      this._composer.renderer.clear();
      this._composer.render(this.scene, this.camera);
      // TODO loop to passes
      this._composer.pass(this._passes.fxaaPass);
      this._composer.pass(this._passes.vignettePass);
      this._composer.toScreen();
    } else {
      this._renderer.render(this.scene, this.camera);
    }
  }

  onResize(w, h) {
    this.width = w;
    this.height = h;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this._renderer.setSize(w, h);
  }
}
