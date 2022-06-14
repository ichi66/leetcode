function objectCreation(constrcut, ...arr){
  const o = new Object();
  constrcut.apply(o, arr);
  o.__proto__ = constrcut.protoType;
  return o;
}


function Person(name){
  this.name = name;
}


const person =  objectCreation(Person, 'good');
console.log(person)




function throttle(fn, delay){
  let lastTime = 0;
  return function(...args){
    const now = Date.now();
    if(now - lastTime >=delay){
      fn.apply(this.args);
      lastTime = now;
    }
  }
}

function debounce(fn, delay){
  let timer = null;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay);

  }
}