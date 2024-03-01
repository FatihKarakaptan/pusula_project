export type ConvertionResult = {
    /**
    * Hata alınıp alınmadığını temsil eder. 
    */
    success: boolean
    /**
    * Hata alındığı durumda açıklama mesajıdır. 
    */
    message?: string
    /**
    * Hata alınmadığı durumda dönüşümün sonucu olan değerdir. 
    */
    value?: string
}
