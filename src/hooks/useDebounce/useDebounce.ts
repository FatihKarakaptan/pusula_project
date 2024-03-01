import { useEffect, useState } from "react";

/**
 * Verilen değerin değişimlerini, delay süresinden sonra yansıtır.
 * @default delay: 250ms
 */
export function useDebounce<T>(value: T, delay?: number): T {
  // basit debounce hook'u, input değişimlerinin sürekli hesaplama veya validasyon yapmasını engellemek için performans arttırıcı
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value); // value değişimleri 250ms sonra state'e yansır
    }, delay ?? 250);

    return () => {
      clearTimeout(timer); // Bu delay sürecinde olan input değişimleri timeout'u temizleyip yeni bir tane oluşturacağından kullanıcıdan input'u kesintili bir şekilde state'e yansıtır.
    };
  }, [value, delay]);

  return debouncedValue;
}
