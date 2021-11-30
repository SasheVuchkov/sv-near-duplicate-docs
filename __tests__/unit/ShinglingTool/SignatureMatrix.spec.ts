import BaseSignatureMatrix from "../../../src/ShinglingTool/BaseSignatureMatrix";
import BaseSparseMatrix from "../../../src/ShinglingTool/BaseSparseMatrix";
import { makeMergeSortAlgo } from "../../../src/Factory/sortAlgoFactory";

describe("Testing ShinglingTool/BaseSignatureMatrix class", () => {
  let generatorCalled = 0;
  const saltGeneratorMock = (): number =>
    [555, 666, 777, 888][generatorCalled++];

  test("Test case: The method getSignatureLength return the right value", () => {
    const matrix = new BaseSignatureMatrix(
      { sigLength: 100 },
      saltGeneratorMock,
      makeMergeSortAlgo()
    );
    expect(matrix.getSignatureLength()).toEqual(100);
  });

  test("Test case: The method getRows return the right values", () => {
    generatorCalled = 0;

    const matrix = new BaseSignatureMatrix(
      { sigLength: 3 },
      saltGeneratorMock,
      makeMergeSortAlgo()
    );
    const shinglingMatrix = new BaseSparseMatrix();
    shinglingMatrix.addItem("Like Die Hard", "document1");
    shinglingMatrix.addItem("but with sloths", "document1");
    shinglingMatrix.addItem("and giant ladybugs", "document1");

    const noMatrixResult = matrix.getRows();
    expect(noMatrixResult.next()).toEqual({ done: true, value: undefined });

    matrix.fromSparseMatrix(shinglingMatrix);

    const expectedCount = 3;
    const expectedRows = [
      undefined,
      { document1: { "555": 71910738 } },
      { document1: { "666": 71910883 } },
      { document1: { "777": 71910512 } },
    ];

    let count = 0;

    const rows = matrix.getRows();
    for (const row of rows) {
      count += 1;
      expect(row).toEqual(expectedRows[count]);
    }

    expect(count).toEqual(expectedCount);
  });
});
