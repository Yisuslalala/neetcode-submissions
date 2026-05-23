class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const splitS = s.split(``);
        const splitT = t.split(``);
        const sortedS = splitS.sort();
        const sortedT = splitT.sort();
        const joinedS = sortedS.join(``);
        const joinedT = sortedT.join(``);
        return joinedS === joinedT ? true : false;
    }
}
