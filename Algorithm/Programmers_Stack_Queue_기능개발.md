# 큐 [ 기능개발 ]

## 문제설명

<br/>

> 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
> 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
> 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

## 제한사항

<br/>

> 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
> 작업 진도는 100 미만의 자연수입니다.
> 작업 속도는 100 이하의 자연수입니다.
> 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

## 풀이

```javascript
// 배포되어야 하는 순서대로 작업의 진도가 적힌 정수배열 progresses
// 각 작업의 개발 속도가 적힌 정수배열 speeds
// 각 배포마다 몇개의 기능이 배포되는지 return

function solution(progresses, speeds) {
  var answer = []

  // 배포일
  let day = 1

  //기능
  let temp = 0

  // 진도
  let progress = 0

  while (progresses[0]) {
    //첫번째 기능 작업 진도
    progress = progresses[0] + speeds[0] * day

    if (progress >= 100) {
      temp++ //기능 +1

      //작업한 첫번쨰 요소 제거
      progresses.shift()
      speeds.shift()
    } else {
      //  배포완료 기능이 있는경우
      if (temp > 0) {
        answer.push(temp)
      }
      day++
      temp = 0
    }
  }
  answer.push(temp)

  return answer
}
```

#

<br/>

# 학습

<br/>

## 배열 관련 메소드 ( push,pop,shift,unshift,splice)

<br/>

### Array.prototype.pop()

- 기능
  > pop() 메서드는 배열에서 마지막 요소를 제거하여 그 값을 호출자(caller)에게 반환합니다.

<br/>

- 문법

  ```
  arr.pop()
  ```

<br/>

- 반환값

  > 배열에서 제거한 나머지 요소.빈 배열의 경우 undefined 반환 .

<br/>

- 예시
  ```javascript
  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
  console.log(plants.pop()) // "tomato" console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]
  ```

<br/>

### Array.prototype.push()

- 기능 > push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
  배열을 닮은 객체에 call() 또는 apply()로 사용될 수 있습니다. (예시 참고)
  만약 length 속성이 숫자로 변환 될 수 없다면 인덱스는 0을 사용합니다.

<br/>

- 문법

  ```
  arr.push(element1[, ...[, elementN]])
  ```

<br/>

- 매개변수

  > elementN : 배열의 끝에 추가할 요소.

<br/>

- 반환값

  > 호출한 배열의 새로운 length 속성.

<br/>

- 예시
  ```javascript
  const animals = ['pigs', 'goats', 'sheep']
  const count = animals.push('cows')
  console.log(count)
  // 4. 두 개를 추가하면 5 console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]
  ```

<br/>

- 여러 배열 합치기 : apply()사용
  ```javascript
  var vegetables = ['양배추', '고구마']
  var moreVegs = ['상추', '당근']
  Array.prototype.push.apply(vegetables, moreVegs)
  console.log(vegetables)
  // ['양배추', '고구마, '상추', '당근']
  ```

<br/>

### Array.prototype.shift()

- 기능
  > shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.이 메서드는 배열의 길이를 변하게 합니다.shift 메서드는 0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한 칸씩 앞으로 당기고 제거된 값을 반환 합니다. 만약 배열의 length가 0이라면 undefined를 리턴 합니다.

<br/>

- 문법

  ```
  arr.shift()
  ```

<br/>

- 반환값

  > 배열에서 제거한 요소. 빈 배열의 경우 undefined 를 반환합니다.

<br/>

- 예시
  ```javascript
  const array1 = [1, 2, 3]
  const firstElement = array1.shift()
  console.log(array1)
  // Array [2, 3] console.log(firstElement); // 1
  ```

<br/>

<br/>

### Array.prototype.unshift()

- 기능
  > unshift() 메서드는 주어진 값인 새로운 요소를 배열 형태의 객체 시작점에 삽입하고, 새로운 길이를 반환합니다

<br/>

- 문법

  ```
  arr.unshift([...elementN])
  ```

<br/>

- 매개변수

  > 메서드를 호출한 배열의 새로운 length 속성.

<br/>

- 반환값

  > 메서드를 호출한 배열의 새로운 length 속성.

<br/>

- 예시
  ```javascript
  const array1 = [1, 2, 3]
  console.log(array1.unshift(4, 5))
  console.log(array1) // Array [4, 5, 1, 2, 3]
  ```

<br/>

### Array.prototype.splice()

- 기능
  > splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

<br/>

- 문법

  ```javascript
  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  ```

<br/>

- 매개변수

  > start : 배열의 변경을 시작할 인덱스입니다.

  > deleteCount (옵션기능) : 배열에서 제거할 요소의 수입니다.

<br/>

- 반환값

  > 제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다. 아무 값도 제거하지 않았으면 빈 배열을 반환합니다. 만약 제거할 요소의 수와 추가할 요소의 수가 다른 경우 배열의 길이는 달라집니다.

<br/>

- 예시
  ```javascript
  const months = ['Jan', 'March', 'April', 'June']
  months.splice(1, 0, 'Feb') // inserts at index 1
  console.log(months) //Array ["Jan", "Feb", "March", "April", "June"]
  months.splice(4, 1, 'May') // replaces 1 element at index 4
  console.log(months) // Array ["Jan", "Feb", "March", "April", "May"]
  ```

<br/>
