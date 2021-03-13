'''
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
nums[0] + nums[1] is 9 '''
def twoSum(nums, target):
    first = 0
    for num in nums:
        if (target - num) in nums:
            second = nums.index(target - num)
            result = [first, second]
            break
        else:
            pass
        # old version
        # try:
        #     second = nums.index(target - num)
        #     result = [first, second]
        #     break
        # except:
        #     pass
        # first += 1
    return result


if __name__=='__main__':
    #Time Complexity: O(n*n)
    #Space Complexity: O(1)
    print(twoSum([2, 7, 11, 15], 9))