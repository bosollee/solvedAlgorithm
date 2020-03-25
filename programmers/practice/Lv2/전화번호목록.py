# 시간 초과 코드.. 수정 필요
def solution(phone_book):
    answer = True
    for i in range(0,len(phone_book)):
        for phone in phone_book:
            if phone.startswith(phone_book[i]) and phone!= phone_book[i]:
                answer=False;
    print(answer)
    return answer