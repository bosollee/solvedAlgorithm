def solution(answers):
    answer = []
    first = [1, 2, 3, 4, 5]
    second = [2, 1, 2, 3, 2, 4, 2, 5]
    third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    first_count = 0
    second_count = 0
    third_count = 0

    for i in range(0, len(answers)):
        if answers[i] == first[i % 5]:
            first_count = first_count + 1
        if answers[i] == second[i % 8]:
            second_count = second_count + 1
        if answers[i] == third[i % 10]:
            third_count = third_count + 1

    max_count = max(first_count, second_count, third_count)
    if max_count == first_count:
        answer.append(1)
    if max_count == second_count:
        answer.append(2)
    if max_count == third_count:
        answer.append(3)

    print(answer)
    return answer


# test
solution([1, 2, 3, 4, 5])  # return [1]
solution([1, 3, 2, 4, 2])  # return [1,2,3]
