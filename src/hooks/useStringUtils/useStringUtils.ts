import {
  invalidElementExistMessage,
  invalidInputForTimeGenerationMessage,
  wrongFormatMessage,
} from "./constants";
import { ConvertionResult } from "./types";

/**
 * Verilen string üzerinde yapılabilecek utility'leri içerir.
 */
export const useStringUtils = (value: string) => {
  /**
   * string'in dönüşüm için uygun olup olmadığını kontrol eder.
   */
  const isStringValidForTimeGeneration = (): ConvertionResult => {
    const elements = value
      .replace(/\s/g, "")
      .split(",")
      .filter((t) => t !== "");

    if (elements.length !== 4)
      return { success: false, message: wrongFormatMessage }; // Split sonucu 4 eleman yok ise hata

    const isInvalidElementExist = elements.find(
      (t) => t.length !== 1 || Number.isNaN(parseFloat(t))
    ); //number'a dönüşemeyecek bir değer, negatif veya tek basamaklı olmayan bir sayı var ise hata

    if (isInvalidElementExist)
      return { success: false, message: invalidElementExistMessage };

    return { success: true };
  };

  /**
   * string üzerinden üretilecek maximum saat'i verir.
   */
  const getMaxTime = (): ConvertionResult => {
    const validationRes = isStringValidForTimeGeneration(); // input string'in valid olup olmadığı
    if (!validationRes.success) return validationRes; // hata varsa direkt dönülmeli

    const elements = value
      .replace(/\s/g, "")
      .split(",")
      .filter((t) => t !== "")
      .map((t) => Number(t)); // boşlukları uçurup sayıya dönüştürme işlemi

    const startsWithTwo =
      elements.find((t) => t === 2) &&
      elements.getSmallerOrEqualElements(5).length > 2 &&
      elements.getSmallerOrEqualElements(3).length > 1; // iki ile başlama kuralı, başta kullanılacak olan 2 de dahil 3 tane sayı 6 dan küçük 2 tane sayı 4 ten küçük olmalı
    const startsWithOneOrZero =
      elements.getSmallerOrEqualElements(1).length > 0 &&
      elements.getSmallerOrEqualElements(5).length > 1; // sıfır veya bir ile başlama kuralı, başta kullanılacak olan sıfır veya bir de dahil 2 tane sayı 6 dan küçük olmalı

    if (startsWithTwo || startsWithOneOrZero) {
      // iki ile başlayan kuralı
      const firstDigit = elements.getMaxAndRemove(startsWithTwo ? 2 : 1); // iki var ise 2'yi, yok ise 0 veya 1'den büyük olanı alacaktır.
      const secondDigit = elements.getMaxAndRemove(startsWithTwo ? 3 : 9); // iki ile başlıyor ise max 3 olabilir, 0 veya 1 ile başlıyor ise bir limitasyon yok(tek basamaklılık ve pozitiflik harici, sıfır dahil)
      const thirdDigit = elements.getMaxAndRemove(5); // 3. basamak her zaman 5 ve altında bir değer olmalı
      return {
        success: true,
        value: `${firstDigit}${secondDigit}:${thirdDigit}${elements[0]}`,
      }; // bu zamana dek maximizasyonu yapmış olduk, kalan eleman en sona eklenmeli
    } else {
      return { success: false, message: invalidInputForTimeGenerationMessage }; // business error burada handle edilebilir
    }
  };

  return { getMaxTime };
};
