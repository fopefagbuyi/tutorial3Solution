// Checks whether the value is an even integer.
let even_predicate = function (value)
{
    // Convert numeric strings to numbers for testing.
    let numberValue = Number(value);

    // Null, NaN, non-integers, and non-finite values are not even.
    if (value === null || !Number.isFinite(numberValue) || !Number.isInteger(numberValue)) {
        return false;
    }

    return numberValue % 2 === 0;
};


// Checks whether the value is an odd integer.
let odd_predicate = function (value)
{
    // Convert numeric strings to numbers for testing.
    let numberValue = Number(value);

    // Null, NaN, and non-integers values are not odd.
    if (value === null || !Number.isFinite(numberValue) || !Number.isInteger(numberValue)) {
        return false;
    }

    return numberValue % 2 !== 0;
};


// Checks whether the value is undefined.
let undefined_predicate = function (value)
{
    return value === undefined;
};


// Checks whether the value is null.
let null_predicate = function (value)
{
    return value === null;
};


// Applies the predicate to the given value.
let check = function (predicate, value)
{
    return predicate(value);
};


// Returns the dictionary function corresponding to the language.
let getDictionary = function (lang)
{
    // Dictionary for English numbers.
    let englishDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };


    // Dictionary for French numbers.
    let frenchDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };


    // Lowercase the language so any capitalization is accepted.
    if (lang.toLowerCase() === "e" || lang.toLowerCase() === "english") {
        return englishDictionary;
    }

    return frenchDictionary;
};


// Test the English dictionary.
let english = getDictionary("English");
console.log(english(1));
console.log(english(3));

// Test the French dictionary.
let french = getDictionary("F");
console.log(french(1));
console.log(french(3));