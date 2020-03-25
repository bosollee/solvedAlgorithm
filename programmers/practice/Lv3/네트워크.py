
def dfs(computers, visited, start):
    stack = [start]
    while stack:
        j = stack.pop()
        if visited[j] == 0: # 방문한 요소라고 체크(0 -> 1)한다.
            visited[j] = 1
        for i in range(0, len(computers)):
            if computers[j][i] == 1 and visited[i] == 0:
                stack.append(i)

def solution(n, computers):
    answer = 0
    visited = [0 for i in range(n)]

    i = 0
    while 0 in visited: # 셋 다 1로 바뀌어야 끝난다.
        if visited[i] == 0:
            dfs(computers, visited, i)
            answer += 1 # 한번 돌았으니까 결과값에 1 더해준다.
        i += 1
    print(answer)
    return answer


# test
solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])  # return 2
solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])  # return 1
solution(4, [[1, 1, 0, 0], [1, 1, 0, 1], [0, 0, 1, 1], [0, 1, 1, 1]])  # return 1
