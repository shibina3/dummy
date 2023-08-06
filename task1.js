// Hacker wants to play a game with numbers. The game is simple. If a digit rotates 180 degrees to form new digit, then it's a valid number else it's invalid. Suppose 0,1,6 are rotated 180 degrees, they became 0,1,9. So these are valid numbers else 2,3 are rotated 180 degrees, they become an invalid number.
function checkValid(num) {
    let valid = [0, 1, 6, 8, 9];
    let numArr = num.toString().split('');
    let rotateNum = {
        0: 0,
        1: 1,
        6: 9,
        8: 8,
        9: 6
    }
    let newNum = '';
    for (let i = 0; i < numArr.length; i++) {
        if (valid.indexOf(parseInt(numArr[i])) != -1) {
            newNum += rotateNum[numArr[i]];
        } else {
            newNum += numArr[i];
        }
    }
    let output = parseInt(newNum.split('').reverse().join(''));
    return output;
}

console.log(checkValid(16894));