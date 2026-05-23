class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          const seens = {};
            for (let i = 0; i < nums.length; i++) {
                const difference = target - nums[i];
                if (seens.hasOwnProperty(difference)) {
                return [seens[difference], i];
                }

                seens[nums[i]] = i;
            }

            return [];
    }
}
