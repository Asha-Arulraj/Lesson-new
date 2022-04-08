var promise = new Promise(function(resolve, reject) {
    const x = "welcome";
    const y = "Goodbye"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Successs, You are welcome');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
    

        var promise1 = new Promise(function(resolve, reject) {
            throw new Error('Some error has occurred')
        })
        
        promise1
            .then(function(successMessage) {
                console.log(successMessage);
            })
            .catch(function(errorMessage) {
            //error handler function is invoked
                console.log(errorMessage);
            });
        