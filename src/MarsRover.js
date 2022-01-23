export default class MarsRover {
    constructor(x, y, orientation, order) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.order = order;
    }

    getPosition() {
        const position = {
            x: this.x,
            y: this.y,
            orientation: this.orientation
        }
        return position;
    }

    turn() {
        const direction = this.order;
        const LEFT = 'L';
        const RIGHT = 'R';
        const orientations = ['north', 'east', 'south', 'west'];
        if (direction === LEFT) {
            orientations.unshift('west');
            const newIndex = orientations.lastIndexOf(this.orientation) - 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else if (direction === RIGHT) {
            orientations.push('north');
            const newIndex = orientations.indexOf(this.orientation) + 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else {
            return
        }
    }

    moveForward() {
        switch (this.orientation) {
            case 'north':
                this.y++;
                break;
            case 'east':
                this.x++;
                break;
            case 'south':
                this.y--;
                break;
            case 'west':
                this.x--;
                break;
        }
    }

    move() {
        const orderItems = this.order.split('');
        orderItems.forEach(orderItem => {
            this.order = orderItem;
            if(orderItem === 'L' || orderItem === 'R') {
                this.turn();
            } else if (orderItem === 'M') {
                this.moveForward();
            } else {
                return;
            }
        });
    }

}
