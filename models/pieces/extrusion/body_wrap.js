import { Shape } from "three";

export default class ExtrusionPiece extends ExtrusionPiece {
    constructor({x, y, z, color, depth}) {
        const shape = new Shape();
        super({
            shape,
            x,
            y,
            z,
            color,
            depth
        });
    }
}