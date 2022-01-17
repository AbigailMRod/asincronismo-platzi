const somethingWillHappen = () =>{
    return new Promise ((resolve, reject) => {
        if(true){
            resolve("Hey!");
        } else {
            reject ("Upppssss!");
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));



const somethingWillHappen2 = () => {
    return new  Promise ((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve ("True");
            },2000)
        }else{
            const error = new Error ("Upppssss!!!");
            reject(error);
        }
    });
}

somethingWillHappen2()  
    .then (response =>  console.log(response))
    .catch(error => console.log(error));


/**para correr varias promesas al mismo tiempo se utiliza promises.all */

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(error =>{
        console.error(error);
    })