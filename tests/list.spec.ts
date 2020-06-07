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
    it("Should clear list when clear is called ", () => {
        testList.add(2);
        testList.add(5);
        expect(testList.clear().length).toBe(0);

    });
    it("Should return true if list contains 1",()=>{
     testList.add(1);
     testList.add(2);
     testList.add(3);
     expect(testList.contains(1)).toBeTrue();
    });
});

