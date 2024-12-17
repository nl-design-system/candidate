export interface TestResult {
  baseline: string;
  date: string;
  fail: string[];
  pass: string[];
  notApplicable: string[];
  notTested: string[];
  cannotTell: string[];
}
