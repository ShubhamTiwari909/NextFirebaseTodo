export const sortTask = (a,b) => {
    const taskA = a.title.toUpperCase(); // ignore upper and lowercase
    const taskB = b.title.toUpperCase(); // ignore upper and lowercase
    if (taskA < taskB) {
        return -1;
    }
    if (taskA > taskB) {
        return 1;
    }
    // names must be equal
    return 0;
}