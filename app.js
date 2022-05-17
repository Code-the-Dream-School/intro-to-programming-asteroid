async function getAllUsers() {
    let url = "users.json";
    try {
        // There will be code within this try block
        let result = await fetch(url);
        return await result.json();
    } catch (error) {
        console.log(error);
    }
}