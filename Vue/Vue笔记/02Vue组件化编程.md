# Vue 组件化编程

### 模块与组件、模块化与组件化

1. 模块

- 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件
- 为什么：js 文件很多很复杂
- 作用：复用 js,简化 js 的编写，提高 js 运行效率

2. 组件

- 理解：用来实现局部（特定）功能效果的代码集合(html/css/js/image.)
- 为什么：一个界面的功能很复杂
- 作用：复用编码，简化项目编码，提高运行效率

3. 模块化  
   当应用中的 js 都以模块来编写的，那这个应用就是一个模块化的应用。
4. 组件化  
   当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用，

### 非单文件组件

- Vue 中使用组件的三大步骤：  
  一、定义组件（创建组件）  
  二、注册组件
  三、使用组件（写组件标签）
- 如何定义一个组件？  
  使用 `Vue.extend(options)`创建，其中 `options` 和 `new Vue(options)`时传入的那个 `options`,几乎一样，但有点区别，区别如下：
  1. e1 不要写，为什么？  
     最终所有的组件都要经过一个 vm 的管理，由 vm 中的 e1 决定服务哪个容器
  2. data 必须写成函数，为什么？  
      避免组件被复用时，数据存在引用关系。  
      备注：使用 `template` 可以配置组件结构。
     ```JS
     <!-- 第三步：编写组件标签 -->
     const student = Vue.extend({
        template: `
        <div>
          <h2>学生姓名:{{studentName}}</h2>
          <h2>学生年龄:{{age}}</h2>
        </div>
        `,
        data() {
            return {
                studentName: 'ff',
                age: 18
            }
        }
     })
     ```

### 如何注册组件？

1. 局部注册：靠 new Vue 的时候传入 components.选项

   ```JS
    new Vue({
        el: '#root',
        //第二步：注册组件（局部注册）
        components: {
            school,
            student,
        }
      })
   ```

2. 全局注册：靠 Vue.component('组件名'，组件)  
   `Vue.component('hello', hello)`

- 编写组件标签： `<school></school>`

- 几个注意点：

  1.关于组件名：

  - 一个单词组成：  
    第一种写法（首字母小写）：schoo1  
    第二种写法（首字母大写）：Schoo1
  - 多个单词组成：  
    第一种写法(kebab-case 命名)：my-school  
    第二种写法(CamelCase 命名)：ySchool(需要 Vue 脚手架支持)
  - 备注：  
    (1).组件名尽可能回避 HTML 中己有的元素名称，例如：h2、H2 都不行。  
    (2).可以使用 name 配置项指定组件在开发者工具中呈现的名字。

  2. 关于组件标签：  
     第一种写法：`<school></school>`  
     第二种写法：`<schoo1/>`  
     备注：不用使用脚手架时，`<schoo1/>`会导致后续组件不能渲染。
  3. 一个简写方式：  
     `const school=Vue.extend(options)`可简写为：`const school=options`

3. 关于 VueComponent:

   1. school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是 `Vue.extend `生成的
   2. 我们只需要写`<school/>`或`<schoo1></schoo1>`,Vue 解析时会帮我们创建 school 组件的实例对象， 即 Vue 帮我们执行的：`new VueComponent(options).`
   3. 特别注意：每次调用 Vue.extend,返回的都是一个全新的 VueComponent!!!!
   4. 关于 this 指向：
      (1)组件配置中：
      data 函数、methods 中的函数、watch 中的函数、computed 中的函数它们的 this 均是 Vue
      (2)new Vue()配置中：
      data 函数、methods 中的函数、watch 中的函数、computed 中的函数它们的 this 均是 VueComponent 的实例对象
      5.VueComponent 的实例对象，以后简称 vc(也可称之为：组件实例对象)。
      Vue 的实例对象，以后简称 vm

4. 一个重要的内置关系：`VueComponent.prototype.__proto__===Vue.prototype`  
   为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性方法

### 单文件组件
