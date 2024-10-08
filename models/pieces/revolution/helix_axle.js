import RevolutionPiece from "./revolution_piece";
import { Shape } from "three";

export default class HelixAxle extends RevolutionPiece {
    constructor({x, y, z, radius, height, color}) {
        const shape = new Shape();
        shape.moveTo(0, 0);
        shape.lineTo(radius, 0);
        shape.lineTo(radius, height);
        shape.lineTo(0, height);
        shape.lineTo(radius, 0);
        
        super({
            shape,
            x,
            y,
            z,
            radius,
            color,
            height
        });
    }
}