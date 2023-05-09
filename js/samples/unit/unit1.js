/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name === "Jordan"){
        return "Bonjour Jordan"
    }

    return `Hello, ${name}`
}
