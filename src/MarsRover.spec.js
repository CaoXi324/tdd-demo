import MarsRover from './MarsRover';

describe('MarsRover', () => {
      it('should get right position', () => {
            const marsRover = new MarsRover(1, 1, 'N');
            const expectedPosition = {
                  x: 1,
                  y: 1,
                  orientation: 'N'
            }
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

      it('should turn correctly when the order is turning', () => {
            const marsRover = new MarsRover(1, 1, 'N', 'L');
            const expectedPosition = {
                  x: 1,
                  y: 1,
                  orientation: 'W'
            };
            marsRover.turn();
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

      it('should move forward correctly when the order is moving', () => {
            const marsRover = new MarsRover(1, 1, 'N', 'M');
            const expectedPosition = {
                  x: 1,
                  y: 2,
                  orientation: 'N'
            };
            marsRover.moveForward();
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

      it('should move correctly when the order contains both turning and moving forward', () => {
            const marsRover = new MarsRover(1, 2, 'N', 'LMLMLMLMM');
            const expectedPosition = {
                  x: 1,
                  y: 3,
                  orientation: 'N'
            };
            marsRover.move();
            expect(marsRover.getPosition()).toEqual(expectedPosition);
      })

})