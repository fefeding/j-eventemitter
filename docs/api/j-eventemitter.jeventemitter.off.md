<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-eventemitter](./j-eventemitter.md) &gt; [JEventEmitter](./j-eventemitter.jeventemitter.md) &gt; [off](./j-eventemitter.jeventemitter.off.md)

## JEventEmitter.off() method

移除给定的事件的一个监听器

**Signature:**

```typescript
off<T extends string | symbol | Array`<string>`>(event: T, fn?: (...args: any[]) => void, context?: any, once?: boolean): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | T | 事件名，可以是字符串、符号或字符串数组 |
|  fn | (...args: any\[\]) =&gt; void | _(Optional)_ 可选，监听函数，参数列表为可变参数 |
|  context | any | _(Optional)_ 可选，上下文对象 |
|  once | boolean | _(Optional)_ 可选，是否只执行一次 |

**Returns:**

this

返回 EventEmitter 实例
