const timeArr = ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]

function MostFreeTime(strArr) {
    let minArr = []
    let longest = 0
    
    function timeCalc(time) {
        let min = 0
        if(time.match(/pm/i)) {
            min += 720
        }
        if(time.split(':')[0] !== '12') {
           min += time.split(':')[0] * 60
        } 
        min += Number(time.split(':')[1].match(/[0-9][0-9]/)[0])
        return min
    }
    
    for(let i = 0; i < strArr.length; i++) {
        let time1 = strArr[i].split('-')[0]
        let time2 = strArr[i].split('-')[1]
        minArr.push([timeCalc(time1), timeCalc(time2)])
    }    
    
    minArr.sort(function(a, b) {
        return a[0] - b[0]
    })
    console.log(minArr,'minArr');
    
    for(let j = 0; j < minArr.length - 1; j++) {
        console.log(minArr[j + 1][0] ,"-", minArr[j][1]);
        if(longest < minArr[j + 1][0] - minArr[j][1]) {
            longest = minArr[j + 1][0] - minArr[j][1]
        }
    }
    
    let hours = 0
    while(longest >= 60) {
        longest -= 60;
        hours ++
    }
    
    if(hours.toString().length === 1) {
        hours = "0" + hours
    }
    if(longest.toString().length === 1) {
        return hours + ":0" + longest
    } else {
        return hours + ":" + longest
    }
}

let freetime = MostFreeTime(timeArr);
console.log(freetime);