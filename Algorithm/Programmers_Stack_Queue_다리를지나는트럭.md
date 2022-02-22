# 큐스택 [ 다리를 지나는 트럭 ]

## 문제설명

<br/>

> 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
> 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

<br/>

```
경과시간  다리를지난트럭 다리를건너는트럭   대기트럭
0	    []	        []	        [7,4,5,6]
1~2	    []	        [7]	        [4,5,6]
3	    [7]	        [4]	        [5,6]
4	    [7]	        [4,5]	    [6]
5	    [7,4]	    [5]	        [6]
6~7	    [7,4,5]	    [6]	        []
8	    [7,4,5,6]   []	        []
```

<br/>

> 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
> solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

## 제한사항

<br/>

> bridge_length는 1 이상 10,000 이하입니다.
> weight는 1 이상 10,000 이하입니다.
> truck_weights의 길이는 1 이상 10,000 이하입니다.
> 모든 트럭의 무게는 1 이상 weight 이하입니다.

## 풀이

```javascript
// 1. 트럭이 최대 bridge_length대 올라갈수있음

// 2. 다리는 weight이하까지 무게 견딜수있음

// count : 경과시간

// bridge  : 다리

// sum : 총 무게

// wating_truck[] :

let truck_weigths = [7, 4, 5, 6]
let weight = 10
let bridge_length = 2

const solution = (bridge_length, weight, truck_weights) => {
  // Array.from 원하는 만큼 배열을 초기화가능  0으로 초기화
  let bridge = Array.from({ length: bridge_length }, () => 0)

  let count = 0
  // 걸린시간

  while (bridge.length) {
    bridge.shift()

    count += 1

    // 트럭이 있는만큼
    if (truck_weights.length) {
      // 배열내 모두 더하고
      let sum = bridge.reduce(function add(sum, cur) {
        return sum + cur
      })
      //console.log(sum)
      // [0,0]
      // 총 트럭 무게 + 0 <= 다리무게
      if (sum + truck_weights[0] <= weight) {
        // 트럭 첫번쨰꺼 꺼내서 bridge에 넣는다.
        bridge.push(truck_weights.shift())
      } else {
        // 아니면 0을 넣는다
        bridge.push(0)
      }
    }

    return count
    //console.log(bridge)
  }

  //console.log(sum)
}
```

#

<br/>

# 학습

- Array.from에 대해서 사용법을 학습할수 있었음.

- 이전 해쉬\_위장 문제에서도 reduce를 활용하여 풀었는데
  좀더 사용법을 더 숙지하여 풀수 있었다.
