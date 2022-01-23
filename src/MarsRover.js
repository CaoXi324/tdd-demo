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
        const orientations = ['N', 'E', 'S', 'W'];
        if (direction === LEFT) {
            orientations.unshift('W');
            const newIndex = orientations.lastIndexOf(this.orientation) - 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else if (direction === RIGHT) {
            orientations.push('N');
            const newIndex = orientations.indexOf(this.orientation) + 1;
            const newOrientation = orientations[newIndex];
            this.orientation = newOrientation;
        } else {
            return
        }
    }

    moveForward() {
        switch (this.orientation) {
            

            case 'N':
                this.y++;
                break;
            case 'E':
                this.x++;
                break;
            case 'S':
                this.y--;
                break;
            case 'W':
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
