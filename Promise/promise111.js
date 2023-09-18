/**
 * Promise构造函数
 * @param {*} executor 执行器函数（同步执行）(resolve, reject) => {}
 */
function Promise(executor) {

  const self = this; // 保存当前实例对象的this的值
  // 添加属性
  self.PromiseState = "pending";// 给promise对象指定status属性，初始值为pending
  self.PromiseResult = null // 给promise对象指定一个用于存储结果数据的属性
  self.callbacks = [] // 存的是对象 每个元素的结构：{onResolved() {}, onRejected() {}}

  /**
   * executor内部定义成功时调用的函数
   * @param {*} value 成功的值
   * @returns 
   */
  function resolve(value) {
    // 如果当前状态不是pending，直接结束
    if (self.PromiseState !== "pending") return
    // 1. 修改对象的状态（promiseState）为 fulfilled
    self.PromiseState = "resolved"
    // 2. 设置对象结果值（promiseResult）为 value
    self.PromiseResult = value
    // 如果有待执行的callback函数，立即【异步】执行回调函数onResolved
    if (self.callbacks.length > 0) {
      setTimeout(() => { // 放入队列中执行所有成功的回调
        self.callbacks.forEach(callbacksObj => {
          callbacksObj.onResolved(value)
        })
      }, 0)
    }
  }
  
  /**
   * executor内部定义失败时调用的函数
   * @param {*} reason 失败的原因
   * @returns 
   */
  function reject(reason) {
    // 如果当前状态不是pending，直接结束
    if (self.PromiseState !== "pending") return
    // 1. 修改对象的状态（promiseState）为 rejected
    self.PromiseState = "rejected"
    // 2. 设置对象结果值（promiseResult）为 reason
    self.PromiseResult = reason
    // 如果有待执行的callback函数，立即【异步】执行回调函数onRejected
    if (self.callbacks.length > 0) {
      setTimeout(() => { // 放入队列中执行所有失败的回调
        self.callbacks.forEach(callbacksObj => {
          callbacksObj.onRejected(reason)
        })
      }, 0)
    }
  }
  
  // 立即【同步】执行executor函数
  try {
    executor(resolve, reject)
  } catch(error) { // 如果执行器抛出异常，promise对象变成rejected状态
    reject(error)
  }
}

//then
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this
  return new Promise((resolve, reject) => {
    if (self.PromiseState === "pending") { // 假如当前状态还是pending状态，将回调函数保存起来
      self.callbacks.push({
        onResolved(value) {
          // onResolved(self.PromiseResult)
          try {
            const result = onResolved(self.PromiseResult) // 执行成功的回调 result接收返回值
            if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
              // result.then(
              //   value => {
              //     resolve(value) // 当result成功时，让return的promise也成功
              //   },
              //   reason => {
              //     reject(reason) // 当result失败时，让return的promise也失败
              //   }
              // )
              result.then(resolve, reject) // 简洁写法
            } else { // 2. 如果回调函数返回的不是promise
              resolve(result)
            }
          } catch (error) { //1. 如果抛出异常
            reject(error)
          }
         },
        onRejected(reason) {
          // onRejected(self.PromiseResult)
          try {
            const result = onRejected(self.PromiseResult) // 执行失败的回调 result接收返回值
            if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
              result.then(resolve, reject)
            } else { // 2. 如果回调函数返回的不是promise
              resolve(result)
            }
          } catch (error) { //1. 如果抛出异常
            reject(error)
          }
         }
      })
    } else if (self.PromiseState === "resolved") { // resolved
      setTimeout(() => {
        /**
         * 1. 如果抛出异常，return的promise就会失败，reason是error
         * 2. 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
         * 3. 如果回调函数返回的是promise，return的promise结果就是这个promise的结果
         */
        try {
          const result = onResolved(self.PromiseResult) // 执行成功的回调 result接收返回值
          if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
            // result.then(
            //   value => {
            //     resolve(value) // 当result成功时，让return的promise也成功
            //   },
            //   reason => {
            //     reject(reason) // 当result失败时，让return的promise也失败
            //   }
            // )
            result.then(resolve, reject) // 简洁写法
          } else { // 2. 如果回调函数返回的不是promise
            resolve(result)
          }
        } catch (error) { //1. 如果抛出异常
          reject(error)
        }
      }, 0)
    } else { // rejected
      setTimeout(() => {
        try {
          const result = onRejected(self.PromiseResult) // 执行失败的回调 result接收返回值
          if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
            result.then(resolve, reject)
          } else { // 2. 如果回调函数返回的不是promise
            resolve(result)
          }
        } catch (error) { //1. 如果抛出异常
          reject(error)
        }
      }, 0)
    }
  })
}
/**
 * Promise函数对象resolve方法
 * @param {*} value 成功的值
 * @returns 一个成功/失败的promise
 */
Promise.resolve = function (value) {
  // 返回一个成功/失败的promise
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) { // value是promise => 使用value的结果作为promise的结果
      value.then(resolve,reject)
    } else { // value不是promise => promise状态变为成功，数据是value
      resolve(value)
    }
  })
}
/**
 *Promise函数对象race方法
 * @param {Array<Promise>} promises 
 * @returns 返回 一个promise，其结果由第一个完成的promise决定
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++){
      // promises[i].then(value => {
      Promise.resolve(promises[i]).then(value => { // 防止数组中有不是promise的元素
        // 修改返回对象的状态为 成功
        resolve(value)
      }, reason => {
        reject(reason)
      })
    }
  })
}
