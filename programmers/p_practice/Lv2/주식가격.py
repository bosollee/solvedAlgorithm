"""
풀이:
초 단위 주식가격 배열
"""

def solution(prices):
    answer = [];
    for i in range(0,len(prices)-1):
        fin = False;
        for j in range(i+1, len(prices)):
            if(prices[i]>prices[j]):
                answer.append(j-i);
                fin = True;
                break;
        if fin==False:
            answer.append(len(prices)-i-1)
    answer.append(0);
    print(answer)
    return answer;

# test
solution([1, 2, 3, 2, 3])  # return [4, 3, 1, 1, 0]