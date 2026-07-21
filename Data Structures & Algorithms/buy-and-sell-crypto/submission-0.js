class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxprofit = 0;
        let minprice = prices[0];
        for(let i=1;i<prices.length;i++){
            if(prices[i]<minprice){
                minprice = prices[i];
            }else{
              const profit = prices[i] - minprice;
              maxprofit = Math.max(maxprofit , profit);
            }

        }
        return maxprofit
    }
}
