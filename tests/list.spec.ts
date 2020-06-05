import { IList, List } from '../src/index';
class Heoros {
    Name: string;
    Alias: string;
    SuperStrength: number;
}


describe("Typescript Generic List  ", () => {
    var testList: IList<number>;
    beforeEach(() => {
        testList = new List<number>();
    });
    it("Should initialized array with no items", () => {
        expect(testList).toBeDefined();
    });
    it("Should add item to array with", () => {
        testList.add(1);
        expect(testList.count()).toBe(1);
    });
});

