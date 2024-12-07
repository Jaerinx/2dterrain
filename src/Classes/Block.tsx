export class Block {
  nums: number[];
  x: number;
  y: number;
  constructor(nums: number[], x: number, y: number) {
    this.nums = nums;
    this.x = x;
    this.y = y;
  }
  getLength() {
    return this.nums.length;
  }
  delete(num: number) {
    if (this.nums.includes(num) && this.nums.length > 1) {
      const index = this.nums.indexOf(num);
      this.nums.splice(index, 1);
    }
  }
  setNum(num: number) {
    this.nums = [num];
  }

  getWeightedNum(MultiplierArr: number[]) {
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i] * MultiplierArr[i];
    }
    return sum;
  }
  getNums() {
    return this.nums;
  }
}
