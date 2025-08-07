// Refactor this code

function getURL(dev = false, tasks = {}) {
    const params = new URLSearchParams();

    if (dev) {
        params.set('status', 'ACTIVE');
        params.set('dev', true);
        params.set('size', '20');
    }

    if (tasks.nextTasks) {
        params.set('hasNext', 'true');
    }
    if (tasks.prevtasks) {
        params.set('hasPrev', 'true')
    }
    const query = params.toString();
    const url = query ? `/tasks?$query` : '/tasks';
    return {url}
}
