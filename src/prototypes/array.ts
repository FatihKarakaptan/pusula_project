Array.prototype.getMax = function (this: number[]): number {
  return Math.max(...this);
};

Array.prototype.getSmallerOrEqualElements = function (
  this: number[],
  indicator: number
): number[] {
  return this.filter((t) => t <= indicator);
};

Array.prototype.popElement = function <T>(this: T[], searchElement: T): T[] {
  // bütün array'lerde kullanılabilir
  const elementIndex = this.findIndex((t) => t === searchElement);
  return elementIndex >= 0 ? this.splice(elementIndex, 1) : this;
};

Array.prototype.getMaxAndRemove = function (
  this: number[],
  indicator: number
): number {
  const max = this.getSmallerOrEqualElements(indicator).getMax();
  this.popElement(max);
  return max;
};
