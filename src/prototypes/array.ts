/**
 * Number Array'indeki en büyük elemanı dönecektir
 * Sadece Number Array'lerde kullanılabilir
 */
Array.prototype.getMax = function (this: number[]): number {
  // sadece number array'lerinde kullanılabilir
  return Math.max(...this);
};

/**
 * Number Array'inde bulunan indicator'den küçük veya eşit elemanların Array'ini döner
 * Sadece Number Array'lerde kullanılabilir
 */
Array.prototype.getSmallerOrEqualElements = function (
  this: number[],
  indicator: number
): number[] {
  // sadece number array'lerinde kullanılabilir
  return this.filter((t) => t <= indicator);
};

/**
 * Array'den belirtilen elemanı çıkartır, bu eleman bulunamaz ise array'i aynen döner.
 * Primitive type'larda kullanıma uygundur, object veya array gibi referans üzerinden inen tiplerde farklı bir eşitlik metodu yazılmalıdır.
 */
Array.prototype.popElement = function <T>(this: T[], searchElement: T): T[] {
  // bütün array'lerde kullanılabilir
  const elementIndex = this.findIndex((t) => t === searchElement);
  return elementIndex >= 0 ? this.splice(elementIndex, 1) : this; // eleman bulunursa çıkar, bulunamazsa aynı array devam etmeli
};

/**
 * Array'den indicator'den küçük veya eşit en büyük sayıyı çıkartır. Array'i manipule eder.
 * Sadece Number Array'lerde kullanılabilir
 */
Array.prototype.getMaxAndRemove = function (
  this: number[],
  indicator: number
): number {
  // sadece number array'lerinde kullanılabilir
  const max = this.getSmallerOrEqualElements(indicator).getMax();
  this.popElement(max);
  return max;
};
