import { ExtrudeGeometry, Mesh, MeshBasicMaterial } from "three";

export default class ExtrusionPiece extends Mesh {
    constructor({shape, x, y, z, color, depth}) {
        const geometry = new ExtrudeGeometry(shape, { depth, bevelEnabled: false, steps: 1024 });
        const material = new MeshBasicMaterial({ color, side: 2 });
        super(geometry, material);
        this.position.set(x, y, z);
        this.depth = depth;
    }
}