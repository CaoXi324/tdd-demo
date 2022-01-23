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

      it('should turn correctly', () => {
            const marsRover = new MarsRover(1, 1, 'north');
            const direction = 'L';
            const expectedPosition = {
                  x: 1,
                  y: 1,
                  orientation: 'west'
            };
            marsRover.turn(direction);
            expect(marsRover.getPosition()).toEqual(expectedPosition);

      })

})