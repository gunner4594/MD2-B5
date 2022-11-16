import {Circle} from "./Circle";
export class Cylinder extends Circle {
    private height: number;
    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.height = height;
    }
    public getVolume (): number {
        return this.height * super.getArea()
    }
}