"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IsMinSimilarityGuard_1 = __importDefault(require("../../../src/Guard/IsMinSimilarityGuard"));
describe("Testing Guard/IsMinSimilarityGuard", () => {
    const guard = new IsMinSimilarityGuard_1.default();
    test("Test case: Is not number", () => {
        expect(guard.isValid("falsdfkj")).toEqual(false);
        expect(guard.isValid({})).toEqual(false);
    });
    test("Test case: Is less than 0", () => {
        expect(guard.isValid(-1)).toEqual(false);
    });
    test("Test case: Is greater than 1", () => {
        expect(guard.isValid(1.1)).toEqual(false);
    });
    test("Test case: Is minSimilarity", () => {
        expect(guard.isValid(1)).toEqual(true);
    });
    test("Test case: The message is correct", () => {
        expect(guard.getMessage()).toEqual(`Missing or incorrect 'minSimilarity': it must be number between 0 and 1.`);
    });
    test("Test case: The property name is correct", () => {
        expect(guard.getPropertyName()).toEqual(`minSimilarity`);
    });
});
//# sourceMappingURL=IsMinSimilarityGuard.spec.js.map