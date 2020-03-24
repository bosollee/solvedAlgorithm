/**
 * @param {array} phone_book
 */

function solution(phone_book) {
  let answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    phone_book.map(phone => {
      if (phone.startsWith(phone_book[i]) && phone !== phone_book[i]) {
        answer = false;
      }
    });
  }
  console.log(answer);
  return answer;
}

// test
solution(["119", "97674223", "1195524421"]); // return False
solution(["123", "456", "789"]); // return True
solution(["12", "123", "1235", "567", "88"]); // return False
