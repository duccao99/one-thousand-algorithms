/**
 * Problem: Log the zodiac according to the year of
 * a person was born.
 *
 * Understanding the problem
 * - What is zodiac?
 * + Zodiac is a animal system that asign to human
 * + Zodiac have 12 animals
 * + Asia zodiac
 *   + chuột
 *   + trâu
 *   + cọp
 *   + mèo
 *   + rồng
 *   + rắn
 *   + ngựa
 *   + dê
 *   + khỉ
 *   + gà
 *   + chó
 *   + heo
 * + non-asia zodiac
 *
 * - How to calculate Asian Zodiac?
 * + 1990: ngựa
 * + 1991: dê
 * + 1992: khỉ
 * + 1993: gà
 * + 1994: chó
 * + 1995: heo
 * + 1996: chuột
 * + 1997: trâu
 * + 1998: cọp
 * + 1999: mèo
 * + Total zodiac animal: 12
 *
 * + 1999 mod 12 = 7
 * + 1998 mod 12 = 6
 * + 1997 mod 12 = 5
 * + 1996 mod 12 = 4
 * + 1995 mod 12 = 3
 * + 1994 mod 12 = 2
 * + 1993 mod 12 = 1
 * + 1992 mod 12 = 0
 *
 * + 1991 mod 12 = 11
 * + 1990 mod 12 = 10
 *
 *
 *
 * + step 1: create an array to contains zodiac animal
 * + step 2: let array index as a bornYear modulo 12
 *   + index = 0: khỉ
 *   + index = 1: gà
 *   + index = 2: chó
 *   + index = 3: heo
 *   + index = 4: chuột
 *   + index = 5: trâu
 *   + index = 6: cọp
 *   + index = 7: mèo
 *   + index = 8: rồng
 *   + index = 9: rắn
 *   + index = 10: ngựa
 *   + index = 11: dê
 *  + step 3: calculate bornYear modulo 12
 *  + step 4: return zodiac[step3 ret]
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} personBornYear
 */
function getAsiaZodiac(personBornYear) {
  const asianZodiacAnimal = [
    "khỉ",
    "gà",
    "chó",
    "heo",
    "chuột",
    "trâu",
    "cọp",
    "mèo",
    "rồng",
    "rắn",
    "ngựa",
    "dê",
  ];
  const personBornYearModuloTwelfth = personBornYear % 12;
  return asianZodiacAnimal[personBornYearModuloTwelfth];
}

{
  const year = 1996;
  console.log(getAsiaZodiac(year));
}
