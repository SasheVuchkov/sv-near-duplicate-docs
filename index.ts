export {
  makeAsyncDuplicatesFinder,
  makeDuplicatesFinder,
} from "./src/Factory/duplicatesFinderFactory";
export { makeCandidatesFinder } from "./src/Factory/candidatesFinderFactory";
export { makeJaccartSimilarityCalculator } from "./src/Factory/calculatorFactory";
export {
  makeBaseSparseMatrix,
  makeSignatureMatrix,
} from "./src/Factory/matrixFactory";
export {
  makeWordShinglingTool,
  makeStringShinglingTool,
} from "./src/Factory/shinglingToolFactory";

export { getCompactHasher } from "./src/Factory/hasherFactory";
export { makeMergeSortAlgo } from "./src/Factory/sortAlgoFactory";

export { default as BaseSparseMatrix } from "./src/ShinglingTool/BaseSparseMatrix";
export { default as BaseSignatureMatrix } from "./src/ShinglingTool/BaseSignatureMatrix";
export { default as WordShinglingTool } from "./src/ShinglingTool/WordShinglingTool";
export { default as StringShinglingTool } from "./src/ShinglingTool/StringShinglingTool";
export { default as JaccardSimilarityCalculato } from "./src/SimilarityCalculator/JaccardSimilarityCalculator";
export { default as CandidatesBucket } from "./src/Util/CandidatesBucket";
export { default as MergeSort } from "./src/Util/MergeSort";
export { default as saltGenerator } from "./src/Util/SaltGenerator";
export { default as BaseCandidatesFinder } from "./src/BaseCandidatesFinder";
export { default as BaseNearDuplicatesFinder } from "./src/BaseNearDuplicatesFinder";
export { default as BaseAsyncNearDuplicatesFinder } from "./src/BaseAsyncNearDuplicatesFinder";

export { default as AbstractNearDuplicatesFinder } from "./src/AbstractNearDuplicatesFinder";
export { default as NearDuplicatesFinder } from "./src/NearDuplicatesFinder";
export { default as AsyncNearDuplicatesFinder } from "./src/AsyncNearDuplicatesFinder";
export { default as CandidatesFinder } from "./src/CandidatesFinder";
export { default as SortAlgo } from "./src/Util/SortAlgo";
export { default as SimilarityCalculator } from "./src/SimilarityCalculator/SimilarityCalculator";
export { default as SparseMatrix } from "./src/ShinglingTool/SparseMatrix";
export { default as SignatureMatrix } from "./src/ShinglingTool/SignatureMatrix";
export { default as ShinglingTool } from "./src/ShinglingTool/ShinglingTool";
export { default as OffersShinglesByDoc } from "./src/ShinglingTool/OffersShinglesByDoc";
export { default as FromSparseMatrix } from "./src/ShinglingTool/FromSparseMatrix";
