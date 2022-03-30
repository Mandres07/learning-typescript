# learning-typescript
A repository with TypeScript code of my TypeScript learning path

## TypeScript Core Types
| Type    | Examples         | Description                                                  |
| ------- | ---------------- | ------------------------------------------------------------ |
| number  | 1, 5.3, -10      | All numbers                                                  |
| string  | 'Hi', "Hi", `Hi` | All text values                                              |
| boolean | true, false      | Just true or false values                                    |
| object  | {age:30}         | Any javascript object                                        |
| Array   | [1, 2, 3]        | Any javascript array, its elements can be flexible or strict |
| Tuples  | [1, 2]           | Added by TypeScript: Fixed-Length Array                      |
| Enum    | enum {NEW, OLD}  | Added by TypeScript: Enumerated global constants             |
| Any     | *                | Any kind of value                                            |
 
## Watchmode, compiling entire project
To enter watchmode use the command:
```
tsc [filename].ts -w
```

To setup the entire project compilation use the command:
```
tsc --init
```

Then to compile entire project use the command:
```
tsc
```

That can be combined ith watchmode with:
```
tsc -w
```