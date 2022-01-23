import moveMarsRover from './index';

describe('', () => {
    it('should move one mars rover correctly', () => {
        const input = '5 5\n1 2 N\nLMLMLMLMM';
        const expectedOutput = '1 3 N'
        expect(moveMarsRover(input)).toEqual(expectedOutput);
    })

    it('should move multiple mars rovers correctly', () => {
        const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
        const expectedOutput = '1 3 N\n5 1 E'
        expect(moveMarsRover(input)).toEqual(expectedOutput);
        
    })
})