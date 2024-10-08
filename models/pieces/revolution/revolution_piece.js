import { LatheGeometry, Mesh, MeshBasicMaterial } from "three";

export default class RevolutionPiece extends Mesh {
    constructor({shape, x, y, z, radius, color, height}) {
        const points = shape.getSpacedPoints(256);
        const geometry = new LatheGeometry(points, 256);
        const material = new MeshBasicMaterial({ color, side: 2 });
        super(geometry, material);
        this.position.set(x, y, z);
        this.height = height;
        this.radius = radius;
    }
}