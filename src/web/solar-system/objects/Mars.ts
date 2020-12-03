import {MeshStandardMaterial, TextureLoader} from 'three';
import {OrbitalObject} from './OrbitalObject';

/**
 * Object: Earth
 * Radius: 6.371 km
 * Mass: 5,972 * 10^24 kg
 * Distance To Sun: 149.600.000 km
 */
export class Mars extends OrbitalObject {
  constructor() {
    super(6, Mars.getMaterial());
    this.mesh.position.x = 40;
  }

  public animate(time: number) {
    this.mesh.position.x = this.center.mesh.position.x + (this.distanceToCenter * Math.cos(time * 0.5));
    this.mesh.position.z = this.center.mesh.position.z + (this.distanceToCenter * Math.sin(time * 0.5));
    this.mesh.rotation.y += 0.01;
  }

  private static getMaterial() {
    const textureLoader = new TextureLoader();
    const material = new MeshStandardMaterial();
    const texture = textureLoader.load('/img/marsmap.jpg');
    material.map = texture;
    material.bumpMap = texture;
    material.bumpScale = 0.4;
    return material;
  }
}

