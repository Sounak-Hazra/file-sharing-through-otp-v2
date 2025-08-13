const copyTextToClioboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text coppyed")
        })
        .catch((e) => {
            console.log(e.message)
        })
}

export default copyTextToClioboard