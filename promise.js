const promise = new Promise((resolve, reject) => {
    // let us add some operation

    // return the state
    if (success) {
        resolve(value); // change the state of the promise from pending to fuflfilled with a value
    } else {
        reject(error); // change the state of the promise from pending to rejected with the error reason
    }
})

// Once the promise reaches either rejected or fulfilled, it can't go to another state. It just stays in that state



// Get users of an application

let success_flag = false;

function getAllUsers() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success_flag) {
                resolve([
                    { first_name: "George", userid: "georgeo" },
                    { first_name: "Karla", userid: "karlaf" },
                ]);
            } else {
                reject("Failed to retrieve the users");
            }
        }, 500);
    });
}


function onFulfilled(users) {
    console.log(users);
}

function onRejected(error) {
    console.log(error);
}

const promise2 = getAllUsers();
promise2.then(onFulfilled, onRejected);

// promise2.then(
//     (users)  => console.log,
//     (error) => console.log
// );

let response = fetch(url);
response.then(response, error)


