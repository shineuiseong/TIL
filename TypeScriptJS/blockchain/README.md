## TypeScript를 연습하는 TypeChain(블럭체인) 프로젝트

#

## 구현

- Block 클래스

  - 변수 타입 지정

```typescript
    public index : number
    public hash : string
    public previousHash : string
    public data : string
    public timestamp : number

```

<br/>

- 생성자
  - 4개 매개변수를 갖는다.

```typescript
   constructor(index:number, hash:string, previousHash:string, data:string, timestamp : number)
    {
        this.index = index
        this.hash = hash
        this.previousHash = previousHash
        this.data = data
        this.timestamp = timestamp
    }

```

<br/>

- static
  - calculateBlockHash : 해쉬 계산
  - validateStructure : 데이터 검증

```typescript
   static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string=>
    Crypto.SHA256(index+previousHash+timestamp+data).toString()

    static validateStructure = (aBlock:Block):boolean=>typeof aBlock.index ==="number" &&
     typeof aBlock.hash ==="string" && typeof aBlock.previousHash ==="string" &&
     typeof aBlock.timestamp ==="number" && typeof aBlock.data ==="string"
```

<br/>

# 결과

![블록체인 결과](https://user-images.githubusercontent.com/30334829/154982107-b3862d29-fb22-4e82-af54-7995728679bd.png)
