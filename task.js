// JS code to find the count of each letter in a given String
// input = 'abacabad'
// output= 'a4b2c1d1'

const countLetters = (str) => {
    let counter = {},
    output = '';
    for(let i=0; i<str.length; i++) {
        if( Object.keys(counter).indexOf(str[i]) === -1 ) {
            counter[str[i]] = 1;
        } else {
            counter[str[i]] += 1;
        }
    }
    for(let j of Object.entries(counter)) {
        output+=j.join('');
    }
    return output;
}
// console.log(countLetters('abacabad'))


// closure with increment and decrement function
function btnClick() {
    let count=0;
    return {
        increment: function () {
            count+=1;
            return count;
        },
        decrement: function () {
            count-=1;
            return count;
        }
    }
}
// let newCounter = btnClick()
// document.getElementById('plusBtn').addEventListener('click',()=>{
//     let count = newCounter.increment();
//     document.getElementById('counter').innerText = count;
// })
// document.getElementById('minusBtn').addEventListener('click',()=>{
//     let count = newCounter.decrement();
//     document.getElementById('counter').innerText = count;
// })

var levelOrder = function(root) {
    let results = [];
    const lot = (root,level) => {
        if(!root) return;
        if(results[level]) {
            results[level].push(root.val)
        } else {
            results[level] = [root.val]
        }
        lot(root.left,level+1);
        lot(root.right,level+1);
    }
    lot(root,0);
    return results;
};

console.log(levelOrder([3,9,20,null,null,15,7]));