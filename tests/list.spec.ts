import { IList, List } from '../src/index';
class Heoros {
    Name: string;
    Alias: string;
    SuperStrength: number;
}
describe("Typescript Generic List  ", () => {
    let testList: IList<number>;
    let heroList: IList<Heoros>

    beforeEach(() => {
        testList = new List<number>();
        heroList = new List<Heoros>();

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
    it("Should return true if list contains 1", () => {
        testList.add(1);
        testList.add(2);
        testList.add(3);
        expect(testList.contains(1)).toBeTrue();
    });
    it("Should return true if list contain 2", () => {
        testList.add(1);
        testList.add(2);
        testList.add(3);
        expect(testList.exists(ele => ele === 2)).toBeTrue();
    });
    it("Should return Steve Rogers if list conatin 2", () => {

        heroList.add({ Name: "Tony Stark", Alias: "Iron Man", SuperStrength: 8 });
        heroList.add({ Name: "Steve Rogers", Alias: "Captiain America ", SuperStrength: 8 });
        heroList.add({ Name: "Bruse Banner", Alias: "Hulk", SuperStrength: 8 });
        expect(heroList.find(hero => hero.Name.toLowerCase() === "steve rogers").Name).toBe("Steve Rogers");
    });



    
});

