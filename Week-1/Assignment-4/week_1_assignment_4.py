def binary_search_position(numbers, target):
    def inner_search(numbers, target, mid, one_end):
        new_mid = (one_end + mid)//2
        if target == numbers[new_mid]:
            return new_mid
        elif new_mid == mid:
            return -1
        elif one_end > mid and target > numbers[one_end]:
            return -1
        elif one_end > mid and target > numbers[new_mid]:
            return inner_search(numbers, target, new_mid, one_end)
        elif one_end < mid and target < numbers[mid]:
            return -1
        elif one_end < mid and target < numbers[new_mid]:
            return inner_search(numbers, target, new_mid, 0)
        else:
            return -1
    high = -1
    for i in numbers:
        high += 1
    mid = (high + 1 )//2
    
    if target == numbers[mid]:
        return mid
    elif target == numbers[high]:
        return high
    elif target == numbers[0]:
        return 0
    elif target > numbers[high]:
        return -1
    elif target > numbers[mid]:
        return inner_search(numbers, target, mid, high)
    elif target < numbers[0]:
        return -1
    elif target < numbers[mid]:
        return inner_search(numbers, target, mid, 0)


print(binary_search_position([1, 2, 5, 6, 7], 1)) # should print 0 
print(binary_search_position([1, 2, 5, 6, 7], 6)) # should print 3