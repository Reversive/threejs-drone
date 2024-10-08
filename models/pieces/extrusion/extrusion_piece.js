import { ExtrudeGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial } from "three";

export default class ExtrusionPiece extends Mesh {
    constructor({shape, x, y, z, color, depth}) {
        const geometry = new ExtrudeGeometry(shape, { depth, bevelEnabled: false, steps: 1024 });
        // const material = new MeshBasicMaterial({ color, side: 2 });
        const phongSettings = {
            color : color,
            emissive : 0x191515,
            specular: 0xf4f0f0,
            shininess : 50,
            side: 2,
        };
        const material = new MeshPhongMaterial(phongSettings);
        super(geometry, material);
        this.position.set(x, y, z);
        this.depth = depth;
    }
}