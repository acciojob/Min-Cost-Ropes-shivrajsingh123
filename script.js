

function mincost(arr) {
    if (arr.length === 1) return 0;
    
    let minHeap = arr.sort((a, b) => a - b);
    let totalCost = 0;
    
    while (minHeap.length > 1) {
        let first = minHeap.shift();
        let second = minHeap.shift();
        let cost = first + second;
        totalCost += cost;
        
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);
    }
    
    return totalCost;
}

// return the min cost
  


module.exports=mincost;
