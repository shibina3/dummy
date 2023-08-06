// Monk and Nice strings

function processData(input) {
    //Enter your code here
    var arr = input.split(" ");
    var n = parseInt(arr[0]);
    var str = arr.slice(1);
    var count = 0;
    var result = [];
    for(var i=0;i<n;i++){
        count = 0;
        for(var j=0;j<i;j++){
            if(str[i]>str[j]){
                count++;
            }
        }
        result.push(count);
    }
    console.log(result.join("\n"));
}