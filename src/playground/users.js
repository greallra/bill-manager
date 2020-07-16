export default ()=>{
    let promise = new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
      
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve({mick: 27, age: 'jim'}), 1000);
      });
    return promise;
}