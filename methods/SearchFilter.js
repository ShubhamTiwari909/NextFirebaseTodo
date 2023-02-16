export const searchFilter = (data,search) => {
    if (search === "" || search.startsWith(" ")) {
        return data
    }
    else {
        return data.title.toUpperCase().startsWith(search.toUpperCase())
    }
}

export const priorityFilter = (data,searchCompleted) => {
    if (searchCompleted === "Completed") {
        return data.completed === true
    }
    if (searchCompleted === "To Do") {
        return data.completed === false
    }
    else {
        return data
    }
}