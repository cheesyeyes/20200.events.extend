import EventEmitter from 'events';

class Events {
  constructor(){
    this.events = {};
  }

  on(eventName, callback){
    if(this.events[eventName]){
      this.events[eventName].push(callback);
    }else{
      this.events[eventName] = [callback];
    }
  }

  go(eventName, ...rest){
    if(this.events[eventName]){
      this.events[eventName].forEach(cb =>{
        cb(...rest);
      })
    }
  }
}

const ee = new Events();

ee.on('push', () => {
  console.log('you pushed me!');
});

ee.on('push', (name) => {
  console.log(name+' you moose!');
});

class Thing extends EventEmitter{
  constructor(){
    super();
    this.set = {
      title : function(title){
        return console.log('listen to '+title);
      },
      subtitle : function(title){
        return console.log('listen to '+title);
      }
    }
  }
}

let guy = new Thing();
guy.set.title('big guy');
guy.set.subtitle('yellow tree');

addEventListener('mouseup', function(){
  ee.go('push', 'Lennon');
});
