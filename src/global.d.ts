import './prototypes'

declare global {
    interface Array<T> { 
        /**
         * Number Array'in içerisindeki maximum değeri verir.
         */
        getMax(this: Array<number>): number;
        /**
         * Number Array'in elemanlarından indicator'den küçük veya eşit elemanları seçip, içerisinden en büyüğü döner ve elemanı Array'den çıkartır.
         */
        getMaxAndRemove(this: Array<number>, indicator: number): number; 
        /**
         * Number Array'in içerisinde indicator'den küçük veya eşit olan sayıların listesini verir.
         */
        getSmallerOrEqualElements(this: Array<number>, indicator: number): number[];
        /**
         * Verilen Array içerisinde gezinerek searchElement ile aynı değere sahip ilk elemanı Array'den çıkartır.
         */
        popElement<T>(this: T[], searchElement: T): T[];
    }
}

export { }