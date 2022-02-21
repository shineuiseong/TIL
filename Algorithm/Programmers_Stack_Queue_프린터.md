# 큐스택 [ 프린터 ]

## 문제설명

<br/>

> 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

<br/>

```
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
```

<br/>

> 예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
> 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
> 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

## 제한사항

<br/>

> 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
> 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
> location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

## 풀이

```javascript
function solution(priorities, location) {
  var answer = 0

  // 중요도가 높은 문서를 먼저 인쇄 하는 프린터 개발

  // 1. 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities
  // 2. 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지 location
  // 3. 내가 인쇄를 요청한 문서가 몇번째로 인쇄되는지 return

  let count = 0

  while (priorities.length > 0) {
    // 맨 첫요소 꺼낸다
    let n = priorities.shift()

    if (
      priorities.some((num) => {
        return num > n
      })
    ) {
      priorities.push(n)
    } else {
      count++
      if (location === 0) {
        answer = count
        return count
      }
    }

    if (location === 0) {
      location = priorities.length - 1
    } else {
      location--
    }
  }

  return answer
}
```

#

<br/>

# 학습

## arr.every 메소드

<br/>

```javascript
arr.every(function(currentValue, index, array), thisValue))
```

<br/>

- every()는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다.
- 모든 case가 true일때 true를 반환합니다.
- 하나라도 false이면 반환 값은 false입니다.
- 기존 배열 값은 변경되지 않습니다.

<br/>

### 파라미터

<br/>

1. function

- **currentValue** - 배열내에서 순차적으로 입력되는 엘리먼트
- **index** - 현재 엘리먼트의 배열 내 index
- **array** - 현재 엘리먼트가 속한 배열

<br/>

2. thisValue

- **thisValue** - 함수 내부에서 사용될 this에 대한 값

### 예제

<br/>

```javascript
var objArr = [
  { name: '철수', age: 10 },
  { name: '영희', age: 10 },
  { name: '바둑이', age: 2 },
]

console.log(objArr.every((item) => item.age > 5)) //false (바둑이 탈락!)
console.log(objArr.every((item) => item.age > 1)) //true
```

<br/>

## arr.some 메소드

<br/>

```javascript
arr.some(function(currentValue, index, array), thisValue))
```

<br/>

- some()은 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 하나라도 true가 있는지 확인합니다.
- <span style="color: #ffd33d">하나라도 true가 발생하면 true를 반환합니다</span>
- 모두 false인 경우만 false를 반환합니다.
  every가 and 조건이라면 some은 or 조건입니다.
  기존 배열 값은 변경되지 않습니다.

<br/>

### 파라미터

<br/>

1. function

- **currentValue** - 배열내에서 순차적으로 입력되는 엘리먼트
- **index** - 현재 엘리먼트의 배열 내 index
- **array** - 현재 엘리먼트가 속한 배열

<br/>

2. thisValue

- **thisValue** - 함수 내부에서 사용될 this에 대한 값

### 예제

<br/>

```javascript
var objArr = [
  { name: '철수', age: 10 },
  { name: '영희', age: 10 },
  { name: '바둑이', age: 2 },
]

console.log(objArr.some((item) => item.age > 5)) //true
console.log(objArr.some((item) => item.age > 10)) //false (모두 탈락!)
```

<br/>
