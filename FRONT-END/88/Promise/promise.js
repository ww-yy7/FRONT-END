class Promise {
  //构造方法
  constructor(executor) {
    //添加属性
    //保存实例对象的this的值
    const self = this; //self/this/that都可以
    self.PromiseState = "pending";
    self.PromiseResult = null;
    self.callbacks = [];

    //resolve 函数
    function resolve(data) {
      if (self.PromiseState !== "pending") return;
      //1.修改对象的状态（promiseState)
      self.PromiseState = "resolved"; //成功的值
      //2.设置对象结果值  (promiseReasult)
      self.PromiseResult = data;
      //调用成功的回调函数
      // if (self.callback.onResolved) {
      //   self.callback.onResolved(data);
      // }
      self.callbacks.forEach((item) => {
        item.onResolved(data);
      });
    }
    //reject函数
    function reject(data) {
      //判断状态，promise状态只能修改一次
      if (self.PromiseState !== "pending") return;
      //1.修改对象的状态（promiseState)
      self.PromiseState = "rejected"; //成功的值
      //2.设置对象结果值  (promiseResult)
      self.PromiseResult = data;
      //调用失败的回调函数
      // if (self.callback.onReject) {
      //   self.callback.onReject(data);
      // }
      self.callbacks.forEach((item) => {
        item.onRejected(data);
      });
    }
    try {
      //同步调用「执行器函数」
      executor(resolve, reject);
    } catch (e) {
      //修改promise对象的状态为「失败」
      reject(e);
    }
  }
  //then方法封装
  then(onResolved, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
      if (self.PromiseState === "pending") {
        // 假如当前状态还是pending状态，将回调函数保存起来
        self.callbacks.push({
          onResolved(value) {
            // onResolved(self.PromiseResult)
            try {
              const result = onResolved(self.PromiseResult); // 执行成功的回调 result接收返回值
              if (result instanceof Promise) {
                // 3. 如果回调函数返回的是promise
                // result.then(
                //   value => {
                //     resolve(value) // 当result成功时，让return的promise也成功
                //   },
                //   reason => {
                //     reject(reason) // 当result失败时，让return的promise也失败
                //   }
                // )
                result.then(resolve, reject); // 简洁写法
              } else {
                // 2. 如果回调函数返回的不是promise
                resolve(result);
              }
            } catch (error) {
              //1. 如果抛出异常
              reject(error);
            }
          },
          onRejected(reason) {
            // onRejected(self.PromiseResult)
            try {
              const result = onRejected(self.PromiseResult); // 执行失败的回调 result接收返回值
              if (result instanceof Promise) {
                // 3. 如果回调函数返回的是promise
                result.then(resolve, reject);
              } else {
                // 2. 如果回调函数返回的不是promise
                resolve(result);
              }
            } catch (error) {
              //1. 如果抛出异常
              reject(error);
            }
          },
        });
      } else if (self.PromiseState === "resolved") {
        // resolved
        setTimeout(() => {
          /**
           * 1. 如果抛出异常，return的promise就会失败，reason是error
           * 2. 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
           * 3. 如果回调函数返回的是promise，return的promise结果就是这个promise的结果
           */
          try {
            const result = onResolved(self.PromiseResult); // 执行成功的回调 result接收返回值
            if (result instanceof Promise) {
              // 3. 如果回调函数返回的是promise
              // result.then(
              //   value => {
              //     resolve(value) // 当result成功时，让return的promise也成功
              //   },
              //   reason => {
              //     reject(reason) // 当result失败时，让return的promise也失败
              //   }
              // )
              result.then(resolve, reject); // 简洁写法
            } else {
              // 2. 如果回调函数返回的不是promise
              resolve(result);
            }
          } catch (error) {
            //1. 如果抛出异常
            reject(error);
          }
        }, 0);
      } else {
        // rejected
        setTimeout(() => {
          try {
            const result = onRejected(self.PromiseResult); // 执行失败的回调 result接收返回值
            if (result instanceof Promise) {
              // 3. 如果回调函数返回的是promise
              result.then(resolve, reject);
            } else {
              // 2. 如果回调函数返回的不是promise
              resolve(result);
            }
          } catch (error) {
            //1. 如果抛出异常
            reject(error);
          }
        }, 0);
      }
    });
  }
  //catch方法
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  // 添加resolve方法
  static resolve(value) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        // value是promise => 使用value的结果作为promise的结果
        value.then(resolve, reject);
      } else {
        // value不是promise => promise状态变为成功，数据是value
        resolve(value);
      }
    });
  }
  //添加reject方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
  //添加all方法
  static all(promises) {
    //返回结果为promise对象
    return new Promise((resolve, reject) => {
      //声明变量
      let count = 0;
      let arr = [];
      //遍历
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            //得知对象的状态是成功
            //每个对象都成功，加变量
            count++;
            //将当前promise对象成功的结果存入到数组中
            arr[i] = v;
            if (count === promises.length) {
              resolve(arr);
            }
          },
          (r) => {
            reject();
          }
        );
      }
    });
  }
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value) => {
            // Promise.resolve(promises[i]).then(value => { // 防止数组中有不是promise的元素
            // 修改返回对象的状态为 成功
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
}
