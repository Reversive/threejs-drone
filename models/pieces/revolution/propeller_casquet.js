import { Shape } from "three";
import RevolutionPiece from "./revolution_piece";

export default class PropellerCasquet extends RevolutionPiece {
    constructor({x, y, z, radius, width = 0, height, color}) {
        const shape = new Shape();
        shape.moveTo(radius, 0);
        shape.lineTo(radius + width, 0);
        shape.lineTo(radius + width, height);
        shape.lineTo(radius, height);
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