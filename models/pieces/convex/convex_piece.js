import { Mesh, MeshBasicMaterial, MeshPhongMaterial } from "three";
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';

export default class ConvexPiece extends Mesh {
    constructor({points, x, y, z, color}) {
        const geometry = new ConvexGeometry(points);
        // const material = new MeshBasicMaterial({ color, side: 2 });
        const phongSettings = {
            color : color,
            emissive : 0x191515,
            specular: 0xf4f0f0,
            shininess : 50,
            side: 2,
        };
        const material = new MeshPhongMaterial(phongSettings)
        super(geometry, material);
        this.position.set(x, y, z);
    }
}