import RevolutionPiece from "./revolution_piece";
import { Shape } from "three";

export default class HelixArm extends RevolutionPiece {
    constructor({x, y, z, innerRadius, outerRadius, height, color}) {
        const shape = new Shape();
        shape.moveTo(0,0);
        shape.lineTo(innerRadius, 0);
        shape.lineTo(outerRadius, height);
        shape.lineTo(0, height);
        shape.lineTo(0, 0);
        
        super({
            shape,
            x,
            y,
            z,
            innerRadius,
            color,
            height
        });
    }
}