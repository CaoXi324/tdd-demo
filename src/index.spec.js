import MarsRover from './index';

describe('MarsRover', () => {
      it('should get right position', () => {
            const marsRover = new MarsRover(1, 1, 'north');
            const expectedPosition = {
                  x: 1,
                  y: 1,
                  orientation: 'north'
            }
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

      it('should turn correctly when the order is turning', () => {
            const marsRover = new MarsRover(1, 1, 'north', 'L');
            const expectedPosition = {
                  x: 1,
                  y: 1,
                  orientation: 'west'
            };
            marsRover.turn();
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

      it('should move correctly when the order is moving', () => {
            const marsRover = new MarsRover(1, 1, 'north', 'M');
            const expectedPosition = {
                  x: 1,
                  y: 2,
                  orientation: 'north'
            };
            marsRover.moveForward();
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

})