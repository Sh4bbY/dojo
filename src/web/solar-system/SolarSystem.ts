import {
  BufferGeometry, Camera, Float32BufferAttribute, Light, MathUtils, PCFSoftShadowMap, PerspectiveCamera, PointLight, Points, PointsMaterial, Scene, WebGLRenderer,
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {OrbitalObject} from './OrbitalObject';

export class SolarSystem {
  private readonly scene: Scene;
  private readonly renderer: WebGLRenderer;
  private camera: Camera;
  private controls: OrbitControls;
  private light: Light;
  private timeFactor: number;
  private objects: OrbitalObject[];
  private frameCount: number;
  private cameraTarget: number;
  private pause: boolean = false;

  constructor(selector: string) {
    this.scene = new Scene();
    this.renderer = SolarSystem.getRenderer(selector);

    this.objects = [];
    this.frameCount = 0;
    this.cameraTarget = 0;
    this.timeFactor = 0.001;

    this.setupCamera();
    this.setupControls();
    this.setupLight();
    this.setupStars();

    this.animate();
  }

  private static getRenderer(selector): WebGLRenderer {
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    const parentEl = document.querySelector(selector);
    parentEl.style.display = 'flex';
    parentEl.style.justifyContent = 'center';
    parentEl.style.overflow = 'hidden';
    parentEl.appendChild(renderer.domElement);

    return renderer;
  }

  public addObject(object: OrbitalObject) {
    this.objects.push(object);
    this.scene.add(object.mesh);
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (!this.pause) {
      const time = this.frameCount++ * this.timeFactor;
      this.objects.forEach(obj => obj.animate(time));
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private setupCamera() {
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    this.camera.position.z = 100;
  }

  private updateCameraTarget() {
    this.cameraTarget = this.cameraTarget < this.objects.length - 1 ? this.cameraTarget + 1 : 0;
    const position = this.objects[this.cameraTarget].mesh.position;
    this.controls.target.set(position.x, position.y, position.z);
  }

  private setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls = new MapControls(this.camera, this.renderer.domElement);

    document.body.addEventListener('keyup', event => {
      // console.log('keyup-event', event);
      switch (event.code) {
        case 'Space':
          this.pause = !this.pause;
          break;
        case 'KeyC':
          this.updateCameraTarget();
          break;
      }
    });
  }

  private setupLight() {
    this.light = new PointLight();
    this.light.position.set(0, 0, 0);
    this.light.castShadow = true;
    this.scene.add(this.light);
  }

  private setupStars() {
    const geometry = new BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      vertices.push(MathUtils.randFloatSpread(10000)); // x
      vertices.push(MathUtils.randFloatSpread(10000)); // y
      vertices.push(MathUtils.randFloatSpread(10000)); // z
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

    const particles = new Points(geometry, new PointsMaterial({color: 0x888888}));
    this.scene.add(particles);
  }
}
