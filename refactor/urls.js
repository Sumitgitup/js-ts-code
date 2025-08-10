// Refactor this code

function getURL({dev = false, nextTasks = false, prevTasks = false} = {}) {
    const basePath = "/tasks";
    const params = new URLSearchParams();

    if (dev) {
        params.set('status', 'ACTIVE');
        params.set('dev', 'true');
        params.set('size', '20');
    }

    if (nextTasks) {
        params.set('hasNext', 'true');
    }
    if (prevTasks) {
        params.set('hasPrev', 'true');
    }

    const query = params.toString();
    const url = query ? `${basePath}?${query}` : basePath;
    return {url}
}


console.log( getURL());