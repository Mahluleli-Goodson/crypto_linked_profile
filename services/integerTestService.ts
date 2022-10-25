import {bigDenominations, denominations, doubles, singular, tens} from "../utils/integerTestUtil";

export const convertToString = (passedValue: number): string => {
    if (passedValue > 9999999999) {
        return "Too large";
    }

    let stringValue = "";
    const addMinus = Math.sign(passedValue) == -1 ? "minus" : "";
    const chunkedNumber = chunkNumberString(passedValue.toString());

    for (let i = chunkedNumber.length - 1; i >= 0; i--) {
        const bigDenom = bigDenominations[i];
        stringValue += `${get3DigitsAsString(parseInt(chunkedNumber[i]))} ${bigDenom}`;
    }
    stringValue = `${addMinus} ${stringValue}`;

    return stringValue.replace(/ +/g, " "); // remove many whitespaces
}

const chunkNumberString = (source: string) => {
    const target = [];
    for (
        const array = Array.from(source);
        array.length;
        target.push(array.splice(-3).join(""))
    ) {
    }
    return target;
}

const get3DigitsAsString = (numValue: number) => {
    const splitToArray = (numValue.toString()).split("").map(_stringNum => parseInt(_stringNum));
    let stringValue = "";

    if (numValue == 0) return singular[numValue];

    while (splitToArray.length > 0) {

        if (splitToArray[0] > 0) {
            const asInteger = parseInt(splitToArray.join(""));
            // get Denomination
            let denom = getDenomination(asInteger);

            // add the "and" in denomination if there's extra integers e.g. 108
            if (denom == denominations[2] && (asInteger % 100) > 0) {
                denom += " and";
            }

            //get String Value
            const stringVal = (splitToArray.length == 2) ? getStringValue(asInteger) : getStringValue(splitToArray[0]);
            // merge String
            stringValue = `${stringValue} ${stringVal} ${denom} `;
        }

        // then exit loop if last 2 values converted, else shift() & loop
        (splitToArray.length == 2 && splitToArray[0] > 0) ? (splitToArray.length = 0) : splitToArray.shift();
    }

    return stringValue;
}

const getStringValue = (numValue: number): string => {
    let stringValue = singular[numValue] ?? doubles[numValue];

    if (!stringValue && Math.floor(numValue / 10) >= 2) {
        const tensDivisor = Math.floor(numValue / 10) * 10;
        const remainder = numValue % 10;
        stringValue = `${tens[tensDivisor]} ${(remainder > 0 ? singular[remainder] : "")}`;
    }
    return stringValue;
}

const getDenomination = (numValue: number): string => {
    const base10Log = Math.floor(Math.log10(numValue));
    return denominations[base10Log] ?? "";
}
