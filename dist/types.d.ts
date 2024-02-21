export type ItemType = 'l' | 'lt' | 't' | 'tr' | 'r' | 'rb' | 'b' | 'lb' | 'rotate' | 'skew';
export type Point = {
    x: number;
    y: number;
};
export type BoundRect = {
    left: number;
    top: number;
    width: number;
    height: number;
};
export type ChangeData = Point & {
    width: number;
    height: number;
    rotation: number;
    skew: Point;
};