const promise = new Promise(function(resolve, reject) {
  //console.log('doing something...');
  setTimeout(function(){
    resolve('ellle');

  }, 2000);
});

// 2.Consumers: then, catch, finally
promise 
.then(function(value) {
  console.log(value);
}).catch(function(error){
  console.log(error);
});