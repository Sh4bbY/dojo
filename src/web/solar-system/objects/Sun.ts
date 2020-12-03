import {MeshBasicMaterial, TextureLoader} from 'three';
import {OrbitalObject} from './OrbitalObject';

/**
 * Object: Sun
 * Radius: 696.340 km
 * Mass: 1,989 * 10^30 kg
 */
export class Sun extends OrbitalObject {
  constructor() {
    super(20, Sun.getMaterial());
    this.mesh.position.x = 0;
    this.mesh.position.y = 0;
    this.mesh.position.z = 0;
  }

  public animate() {
    this.mesh.rotation.y -= 0.001;
  }

  private static getMaterial() {
    const material = new MeshBasicMaterial();
    const textureLoader = new TextureLoader();
    material.map = textureLoader.load('/img/sunmap.jpg');
    return material;
  }
}

