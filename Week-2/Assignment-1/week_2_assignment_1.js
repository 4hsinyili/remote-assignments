function max(numbers){
    let maxNum = numbers[0];
        for (const step in numbers){
            if (numbers[step] >= maxNum){
            maxNum = numbers[step]
            }
        }
    return maxNum
}

function findPosition(numbers,target){
    for (const step in numbers){
        if (numbers[step] === target){
                return step
            }  
    }
    return -1
    }

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first one) 
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1