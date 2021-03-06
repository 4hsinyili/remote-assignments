def binary_search_first(numbers, target):
    def inner_search(inner_low, inner_high):
        inner_mid = (inner_low + inner_high)//2
        if inner_high == inner_low or inner_high -1 == inner_mid:
            if target == numbers[inner_low]:
                return inner_low 
            elif target == numbers[inner_mid]:
                return inner_mid 
            elif target == numbers[inner_high]:
                return inner_high 
            else:
                return a_bit_larger()
        elif target == numbers[inner_mid]:
            results.append(inner_mid)
            return inner_search(inner_low, inner_mid-1)
        elif target == numbers[inner_high]:
            results.append(inner_high)
            return inner_search(inner_low, inner_high -1)
        elif target == numbers[inner_low]:
            results.append(inner_low)
            return results[-1]
        elif target > numbers[inner_high] or target < numbers[inner_low] :
            return a_bit_larger()
        elif target > numbers[inner_mid]:
            return inner_search(inner_mid, inner_high)
        elif target < numbers[inner_mid]:
            return inner_search(inner_low, inner_mid)
        else:
            return a_bit_larger()
    def a_bit_larger():
        if target == numbers[results[-1]]:
            return results[-1]
        else:
            new_target = target + 1
            return binary_search_first(numbers, new_target)

    numbers.sort()
    high = len(numbers) - 1
    mid = (high + 1 )//2
    '''
    If len() is not allowed, I will use:

    high = -1
    for i in numbers:
        high += 1
    '''
    results = [-1]
    
    if target == numbers[mid]:
        results.append(mid)
        return inner_search(0, mid-1)
    elif target == numbers[high]:
        results.append(high)
        return inner_search(0, high - 1)
    elif target == numbers[0]:
        return 0
    elif target > numbers[high]:
        return high+1
        # this is how bisect.bisect_right will return
    elif target < numbers[0]:
        return 0
    elif target > numbers[mid]:
        return inner_search(mid, high)
    elif target < numbers[mid]:
        return inner_search(0, mid)

print(binary_search_first([1, 2, 5, 5, 5, 6, 7], 2)) # should print 1 (the index of the target number ‘2’) 
print(binary_search_first([1, 2, 5, 5, 5, 6, 7], 5)) # should print 2 (the index of the ‘first’ target number ‘5’ shows up) 
print(binary_search_first([1, 2, 5, 5, 5, 6, 7], 3)) # should print 2 (since it can’t find number 3, return the index of ‘the smallest number larger then 3', that is, the index of the ‘first’ number 5)