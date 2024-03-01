import "./prototypes";

declare global {
  interface Array<T> {
    /**
     * Number Array'indeki en büyük elemanı döner
     * Sadece Number Array'lerde kullanılabilir
     */
    getMax(this: Array<number>): number;
    /**
     * Array'den indicator'den küçük veya eşit en büyük sayıyı çıkartır. Array'i manipule eder.
     * Sadece Number Array'lerde kullanılabilir
     */
    getMaxAndRemove(this: Array<number>, indicator: number): number;

    /**
     * Number Array'inde bulunan indicator'den küçük veya eşit elemanların Array'ini döner
     * Sadece Number Array'lerde kullanılabilir
     */
    getSmallerOrEqualElements(this: Array<number>, indicator: number): number[];
    /**
     * Array'den belirtilen elemanı çıkartır, bu eleman bulunamaz ise array'i aynen döner.
     * Primitive type'larda kullanıma uygundur, object veya array gibi referans üzerinden inen tiplerde farklı bir eşitlik metodu yazılmalıdır.
     */
    popElement<T>(this: T[], searchElement: T): T[];
  }
}

export {};
