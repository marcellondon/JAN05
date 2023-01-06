const isPalindrome = (string) => {
    const stringArray = string.split('')

    const reversedArray = stringArray.reverse();

    const reversedString = reversedArray.join('');

    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(''));