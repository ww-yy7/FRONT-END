# ES6

### 变量

1. let 声明变量
   1-块级作用域
   2-不能重复声明
   3-变量提升没有
   暂存性死区
   4-不与顶层对象挂钩
2. const 声明变量
   1-常量
   2-不能重复定义
   3-块级作用域
   4-声明不提升，块级作用域
   5-不与顶层对象挂钩
   6-定义对象的话，对象里面的值可以改变，如果不想改变，用 freeze
3. 解构赋值
   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
4. 模板字符串
   1- ``:分隔的字面量，允许多行字符串、带嵌入表达式的字符串插值和一种叫带标签的模板的特殊结构。
   2-${}：用于在字符串中插入动态的变量或表达式
5. 字符串扩展
   1-includes 函数
