def find_max(numbers):
    max_number = numbers[0]
    for i in numbers:
        if i >= max_number:
            max_number = i
    return(max_number)
    
def find_position(numbers, target):
    loop_count = 0
    for i in numbers:
        if i == target:
            break
        else:
            loop_count += 1
    try:
        numbers[loop_count]
        return loop_count
    except:
        return -1
        

print(find_max([1, 2, 4, 5]) ); # should print 5
print(find_max([5, 2, 7, 1, 6]) ); # should print 7
print(find_position([5, 2, 7, 1, 6], 5)) # should print 0 
print(find_position([5, 2, 7, 1, 6], 7)) # should print 2 
print(find_position([5, 2, 7, 7, 7, 1, 6], 7)) # should print 2 (the first one) 
print(find_position([5, 2, 7, 1, 6], 8)) #should print -1