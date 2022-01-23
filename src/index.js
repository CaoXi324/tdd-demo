export default class MarsRover {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    getPosition() {
        const position = {
            x: this.x,
            y: this.y,
            orientation: this.orientation
        }
        return position;
    }

    turn(direction) {
        const LEFT = 'L';
        const RIGHT = 'R';
        const orientations = ['north', 'east', 'south', 'west'];
        if(direction === LEFT) {
            orientations.unshift('west');
            const newIndex = orientations.lastIndexOf(this.orientation) - 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else if(direction === RIGHT) {
            orientations.push('north');
            const newIndex = orientations.indexOf(this.orientation) + 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else {
            return
        }
    }

}
