var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-z0-9]/i.test(s[left])) {
            left++;
        }

        while (left < right && !/[a-z0-9]/i.test(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
