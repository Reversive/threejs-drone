import ConvexPiece from "./convex_piece";
import { Vector3 } from "three";

export default class BodyNose extends ConvexPiece {
    constructor({x, y, z, color}) {
        const points = [
            new Vector3(0, 0, 0),
            new Vector3(2, 0, 0),
            new Vector3(1.5, 0.5, 0),
            new Vector3(0.5, 0.5, 0),
        
            new Vector3(0.25, 0, 1),
            new Vector3(1.75, 0, 1),
            new Vector3(1.25, 0.15, 1),
            new Vector3(0.75, 0.15, 1),

            new Vector3(1.5, -0.5, 0),
            new Vector3(0.5, -0.5, 0),

            new Vector3(1.25, -0.15, 1),
            new Vector3(0.75, -0.15, 1),
            
        ];
        super({
            points,
            x,
            y,
            z,
            color
        });
    }
}