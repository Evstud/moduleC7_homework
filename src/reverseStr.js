export function reverseString(string) {
    const reversedString = string.split("").reverse().join("");
    return "The result is " + reversedString;
}

