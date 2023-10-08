# Vue 核心

## 一、初识 Vue

1. 想让 Vue 工作，就必须创建一个 Vue 实例，且要传入一个配置对象
2. root 里的容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue 语法
3. root 容器里面的代码被称为【Vue 模板】
4. Vue 实例和容器是一一对应的
5. 真实开发中只有一个 Vue 实例，并且会配合着组件一起使用
6. {{xxx}}中的 xxx 要写 js 表达式，且 xxx 可以自动读取到 data 中的所有属性；
7. 一旦 data 中的数据发生变化，那么页面中用到该数据的地方也会自动更新
8. 注意区分 js 表达式和 js 代码（代码）：
   - 表达式  
     (1). a  
     (2). a+b  
     (3). demo(1) 函数调用表达式  
     (4). x===y?'a':'b' 三元表达式
   - js 代码（语句）  
     (1). if(){}  
     (2). for(){}

## 二、模板语法

- Vue 模板语法有 2 大类：

1. 插值语法：  
   功能：用于解析标签体内容  
   写法：{{xxx}},xxx 要写 js 表达式，且 xxx 可以自动读取到 data 中的所有属性；
2. 指令语法  
   功能：用于解析标签（包括：标签属性，标签体内容，绑定事件）  
   举例：v-bind:href="xxx"或简写为:href:"xxx",xxx 同样要写 js 表达式，且 xxx 可以自动读取到 data 中的所有属性；

- 备注：  
   Vue 中有很多的指令。且形式都是：v-???，此处 v-bind 为举例

## 三、数据绑定

- Vue 中有 2 种数据绑定的方式：

1. 单向绑定(v-bind):数据只能从 data 流向页面。
2. 双向绑定(v-mode1):数据不仅能从 data 流向页面，还可以从页面流向 data。

- 备注：

1. 双向绑定一般都应用在表单类元素上（如：input、select 等）
2. v-model:value 可以简写为 v-model,因为 v-model 默认收集的就是 value 值。

## 四、el 与 data 的两种写法

- data 与 el 的 2 种写法

1. e1 有 2 种写法  
   (1) new Vue 时候配置 el 属性。  
   (2) 先创建 Vue 实例，随后再通过 vm.$mount('#root')指定 el 的值。
2. data 有 2 种写法  
   (1) 对象式  
   (2) 函数式

- 如何选择：目前哪种写法都可以，以后学习到组件时，data 必须使用函数式，否则会报错。

3.  一个重要的原则：  
    由 Vue 管理的函数，一定不要写箭头函数，一旦写了箭头函数，this 就不再是 Vue 实例了。

## 五、MVVM 模型

1. M:模型(Model):对应 data 中的数据
2. V:视图(View):模板
3. VM:视图模型(ViewModel):ue 实例对象 e

   ![组成的图](image.png)

- 观察发现：

1. data 中所有的属性，最后都出现在了 vm 身上。
2. vm 身上所有的属性及 Vue 原型上所有属性，在 Vue 模板中都可以直接使用。

## 六、数据代理

### 1. Object.defineproperty 方法

1. writable:true 控制属性是否可以被修改，控制台也看的当为 TRUE 的时候属性值可以被修改
2. configurable:true 控制属性是否可以被删除
3. enumerable:true 控制属性是否可以枚举，true 的话简单的说就是可以遍历获取该值
4. 注意：当使用了 getter 或 setter 方法，不允许使用 writable 和 value 这两个属性(如果使用，会直接报错滴)

5. get 是获取值的时候的方法，类型为 function ，获取值的时候会被调用，不设置时为 undefined；  
   当有人读取 person 的 age 属性时，get 函数(getter)就会被调用，且返回值就是 age 的值

6. set 是设置值的时候的方法，类型为 function ，设置值的时候会被调用，undefined；  
   当有人修改 person 的 age 属性时，set 函数(setter)就会被调用，且会收到修改的具体值

7. get 或 set 不是必须成对出现，任写其一就可以
   get：当有人读取 person 的 age 属性时，get 函数(getter)就会被调用，且返回值就是 age 的值

### 2. Vue 中的数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

1. Vue 中的数据代理：
   通过 vm 对象来代理 data 对象中属性的操作（读/写）
2. Vue 中数据代理的好处：
   更加方便的操作 data 中的数据
3. 基本原理：
   通过 Object,defineProperty()把 data 对象中所有属性添加到 vm 上。  
    为每一个添加到 vm 上的属性，都指定一个 getter/setter。  
    在 getter,/setter 内部去操作（读/写）data 中对应的属性。
   ![Alt text](image-1.png)
