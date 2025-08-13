

const saveInLocal = (data, name) => {
    const allFiles = JSON.parse(localStorage.getItem(name)) || []
    allFiles.push(data)
    localStorage.setItem(name, JSON.stringify(allFiles))
    console.log("done")
}

export default saveInLocal