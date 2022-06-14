
/// 函数执行一次后，大于间隔时间才允许执行第二次
function throttle(fn,delay){
  let last = 0;
  return function(...args){
    const now = Date.now();
    if(now - last > delay){
      last = now;
      fn.apply(this,args);
    }
  }
}


// /// 函数再多次调用的情况下，仅响应最后一次调用
function debounce(fn, delay){
  let timer = null;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{fn.apply(this, args)}, delay)
  }
}





// function throttle(fn, delay){
//   let last = 0;
//   return function(){
//     let now = Date.now();
//     if(Date.now() - last > delay){
//       last = now;
//       return fn.call(this);
//     }
//   }
// }


// /// 函数再多次调用的情况下，仅响应最后一次调用
// function debounce(fn, delay){
//   let timer = null;
//   return function(){
//     clearTimeout(timer);
//     timer = setTimeout(()=>fn.apply(this), delay);
//   }


// }