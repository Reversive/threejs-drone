import { Shape } from "three";
import ExtrusionPiece from "./extrusion_piece";

export default class BodyFuselage extends ExtrusionPiece {
    constructor({x, y, z, color, depth}) {
        const shape = new Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0.5, 0.5);
        shape.lineTo(1.5, 0.5);
        shape.lineTo(2, 0);
        shape.lineTo(1.5, -0.5);
        shape.lineTo(0.5, -0.5);
        shape.lineTo(0, 0);
        super({shape, x, y, z, color, depth});
    }
}