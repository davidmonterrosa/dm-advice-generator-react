const getAdviceQuote = async () => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        if(!response.ok) {
            throw new Error("Could not fetch advice due to internal error.")
        }
        const data = await response.json();
        return data;
        // return [data.slip.advice, data.slip.id];
    } catch (error) {
        console.error("Internal Error", error)
        return "Internal Error";
    }
}

export { getAdviceQuote }