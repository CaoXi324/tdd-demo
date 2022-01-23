import MarsRover from "./MarsRover";

export default function moveMarsRover(input) {
    const inputItems = input.split('\n');
    let output = '';
    inputItems.forEach((element, index) => {
        if(index % 2 === 1) {
            const position = element.split(' ');
            const order = inputItems[index+1]
            const marsRover = new MarsRover(Number(position[0]), Number(position[1]), position[2], order);
            marsRover.move();
            const newPosition = marsRover.getPosition();
            const formatedPosition = Object.values(newPosition).join(' ');
            output = output + formatedPosition + '\n'; 

        }
    });
    
    return output.slice(-output.length, -1);



}