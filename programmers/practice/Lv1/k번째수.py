def solution(array, commands):
    result = []

    for i in commands:
        temp = array[i[0] - 1 : i[1]]
        temp.sort()
        result.append(temp[i[2] - 1])

    return result


# test
solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
# return [5, 6, 3]
