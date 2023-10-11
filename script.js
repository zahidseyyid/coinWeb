// function formatNumber(number) {
//     // Sayıyı milyarlar cinsinden bir değere böl
//     const inBillions = number / 1000000000;

//     // Sayıyı virgülden sonra iki basamak olacak şekilde yuvarla
//     const rounded = Math.round((inBillions + Number.EPSILON) * 100) / 100;

//     // Sayıyı string olarak dönüştür ve dolar işareti, nokta ve 'B' ekle
//     return "$" + rounded.toFixed(2) + " B";
// }

// const number = 521302690962;
// const formattedNumber = formatNumber(number);
// console.log(formattedNumber); // Çıktı: $521.30 B
