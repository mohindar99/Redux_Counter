export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload1:num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}