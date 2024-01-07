export const userService = {
    authenticate,
};

function authenticate(username: string, password: string) {

    const user = {
        id: "9001",
        name: "Web Admin",
        email: "admin@example.com"
    }; //(3)

    return user
    if (username !== "admin" && password !== "admin") { //(1)
        return null; //(2)
    }


    return user; //(4) 
}