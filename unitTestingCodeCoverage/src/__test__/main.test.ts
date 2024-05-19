import { add } from "../main";

describe('main functions', () => {
    test('it should add correctly', () => {
        //assign
        const x: number = 5;
        const y: number = 3;
        let sum: number = 0;

        //act
        sum = add(x, y);

        //assert
        expect(sum).toBe(8);
    })
})