import { GradesPipe } from './grades.pipe';

describe('GradesPipe', () => {

  let grade:GradesPipe;

  beforeEach(() => {
    grade = new GradesPipe();
  });


  it('create an instance', () => {
    expect(grade).toBeTruthy();
  });

  // 2. Test grade  Valid Value
  it('should return "Outstanding" when input is  "1" ', () => {
    const result:string  = grade.transform(1);
    expect(result).toBe("Outstanding");
  });

  // 3. Test grade Valid Value
  it('should return "Excellent" when input is  "2" ', () => {
    const result:string  = grade.transform(2);
    expect(result).toBe("Excellent");
  });


  // 4. Test grade Valid Value
  it('should return "Good" when input is  "4" ', () => {
    const result:string  = grade.transform(4);
    expect(result).toBe("Good");
  });

  // 4. Test grade Invalid Value 
  it('should return "" when input value is invalid : 6 ', () => {
    const result:string  = grade.transform(6);
    expect(result).toBe("");
  });

  // 4. Test grade for Invalid Value
  it('should return "" when input value is invalid : 0 ', () => {
    const result:string  = grade.transform(0);
    expect(result).toBe("");
  });


});
