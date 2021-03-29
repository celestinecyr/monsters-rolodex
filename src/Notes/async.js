const myPromise = new Promise((resolve,reject) => {
    if(true){
        setTimeout(() => {
            resolve('i have succeeded');
        }, 1000);                    //after 1000ms we want to run the function in {}
        //after 1s, we want to run the function resolve(), i.e. after 1s we want the resolve key to call the value of 'i have succeeded'
        //Now, our Promise holds this value. & in order for us to access it .. line 13
    } else {
        reject('i have failed');
    }
});

//we have to say:
myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));

/*
The Promise is given a function, of which, has 2 arguments - resolve and reject
It is a promise that this object will eventually have a value. It will either be a resolved vakue of a rejected value. We use the resolve value when our API call is successful, and reject value when API call gives us an error
but the promise will be in a state where it's pending until either the resolve or reject has been called. (eg setTimeout)
*/