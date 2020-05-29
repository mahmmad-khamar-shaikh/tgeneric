import '../src/index';
class Person {
    id: number;
    name: string;
}

describe("Numeric array items", () => {
    var numericArray: Array<number>;
    beforeEach(() => {
        numericArray = new Array<number>();
        numericArray.push(3);
        numericArray.push(100);
        numericArray.push(2);
        numericArray.push(10);
        numericArray.push(4);
    });

    it("Should initialized array with no items", () => {
        expect(numericArray).toBeDefined();
    })
    it("Should initialized array with 5 items", () => {
        expect(numericArray.length).toBe(5);
    })
    it("Should return first element from array", () => {
        expect(numericArray.first()).toBe(3);
    });
    it("Should return last elemet from array", () => {
        expect(numericArray.last()).toBe(4);
    });

});

