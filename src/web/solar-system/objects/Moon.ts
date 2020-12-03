import {MeshStandardMaterial, TextureLoader} from 'three';
import {OrbitalObject} from './OrbitalObject';

/**
 * Name: Moon
 * Radius: 1.737,1 km
 * Mass: 7.34767309 * 10^22 kg
 * Distance To Earth: 384.400 km
 */
export class Moon extends OrbitalObject {
  constructor() {
    super(1.737, Moon.getMaterial());
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  public animate(time) {
    this.mesh.position.x = this.center.mesh.position.x + (this.distanceToCenter * Math.cos(time * 5));
    this.mesh.position.z = this.center.mesh.position.z + (this.distanceToCenter * Math.sin(time * 5));
    this.mesh.rotation.y -= this.distanceToCenter * 0.0006;
  }

  private static getMaterial() {
    const textureLoader = new TextureLoader();
    const material = new MeshStandardMaterial();
    material.map = textureLoader.load('/img/moonmap.jpg');
    material.bumpMap = textureLoader.load('/img/moonbumpmap.jpg');
    material.bumpScale = 0.02;
    return material;
  }
}

