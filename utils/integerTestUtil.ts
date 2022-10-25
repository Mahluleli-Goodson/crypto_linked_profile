const singular: { [key: number]: string } = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};

const doubles: { [key: number]: string } = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

const tens: { [key: number]: string } = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

const denominations: { [key: number]: string } = {
    2: "hundred",
    3: "thousand",
    6: "million",
    9: "billion",
};

const bigDenominations: string[] = ["", "thousand", "million", "billion"];

/**
 * clean integer and remove any commas or spaces e.g. 991,999 or 991 999
 * @param stringInt
 */
const sanitizeInteger = (stringInt: string): string => {
    return stringInt.replaceAll(",", "").replace(/\s+/g, "");
}

export {singular, tens, doubles, denominations, bigDenominations, sanitizeInteger};
