# 해시 [ 위장 ]

## 문제설명

<br/>

> 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
> 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
> 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항

<br/>

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '\_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

## 풀이

```javascript
function solution(clothes) {
  // -1 = 모든 종류 옷을 안입은 경우
  var answer = 1

  // 해당 배열을 모두검사하여 키값이 존재하면 +1 아니면 1
  let obj = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1
    return a
  }, {})

  // 모든 옷 종류 개별적으로 +1 해야함 이유는 안입을경우는 -1이기떄문
  // value 에 해당 값 모든 곱해주고 -1
  for (let k in obj) {
    answer *= obj[k] + 1
  }

  return answer - 1
}
```

#

<br/>

## 학습

- reduce 함수

```
arr.reduce(callback, initialValue)
```

### 파라미터

1. callback function

- 다음 4가지 인수를 가집니다.

  - **accumulator** - accumulator는 callback함수의 반환값을 누적합니다.
  - **currentValue** - 배열의 현재 요소
  - **index(Optional)** - 배열의 현재 요소의 인덱스
  - **array(Optional)** - 호출한 배열

- > callback함수의 반환 값은 accumulator에 할당되고 순회중 계속 누적되어 최종적으로 하나의 값을 반환합니다.

2. initialValue(Optional)

- > 최초 callback함수 실행 시 accumulator 인수에 제공되는 값, 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고, 빈 배열에서 초기값이 없을 경우 에러가 발생합니다.
