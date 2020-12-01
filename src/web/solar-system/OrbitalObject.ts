import {Material, Mesh, MeshBasicMaterial, SphereBufferGeometry} from 'three';

export abstract class OrbitalObject {
  protected geometry: SphereBufferGeometry;
  protected center: OrbitalObject;
  protected material: Material;
  protected radius: number;
  protected mass: number;
  protected distanceToCenter: number;
  public mesh: Mesh;

  constructor(radius: number, material: Material) {
    this.radius = radius;
    this.material = material;
    this.geometry = new SphereBufferGeometry(this.radius, 32, 32);
    this.mesh = new Mesh(this.geometry, this.material);
  }

  public setMaterial(material: Material) {
    this.material = material;
    this.mesh.material = this.material;
  }

  public setCenterOfGravity(center: OrbitalObject, distanceToCenter: number) {
    this.center = center;
    this.distanceToCenter = distanceToCenter;
    this.mesh.position.x = this.center.mesh.position.x + this.distanceToCenter;
  }

  public animate(time: number) {
    this.mesh.rotation.y += 0.01;
  }
}

