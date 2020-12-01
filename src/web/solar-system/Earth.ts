import {MeshStandardMaterial, TextureLoader} from 'three';
import {OrbitalObject} from './OrbitalObject';

/**
 * Object: Earth
 * Radius: 6.371 km
 * Mass: 5,972 * 10^24 kg
 * Distance To Sun: 149.600.000 km
 */
export class Earth extends OrbitalObject {
  constructor() {
    super(6, Earth.getMaterial());
    this.mesh.position.x = 40;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  public animate(time: number) {
    this.mesh.position.x = this.center.mesh.position.x + (this.distanceToCenter * Math.cos(time));
    this.mesh.position.z = this.center.mesh.position.z + (this.distanceToCenter * Math.sin(time));
    this.mesh.rotation.y += 0.01;
  }

  private static getMaterial() {
    const textureLoader = new TextureLoader();
    const material = new MeshStandardMaterial();
    material.map = textureLoader.load('/img/earthmap.jpg');
    material.bumpMap = textureLoader.load('/img/earthbumpmap.jpg');
    material.bumpScale = 0.4;
    return material;
  }
}

