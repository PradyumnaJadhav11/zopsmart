function sum(first){
    let total = first
    function addNext(nextNum){
        if (nextNum === undefined){
            return total
        }
        total += nextNum
        return addNext
    }
    return addNext
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(3)(7)()); // 10
