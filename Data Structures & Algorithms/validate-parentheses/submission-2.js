class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = new Map([
            ['(',')'],
            ['[',']'],
            ['{','}']
        ])
        for(let ch of s){
            if(map.has(ch)){
                stack.push(ch);
            }else{
                if(stack.lenfth===0){
                    return false;
                }
                const top = stack.pop();
                if(map.get(top) !==ch){
                    return false
                }
            }
        }
        return stack.length == 0;
    }
}
