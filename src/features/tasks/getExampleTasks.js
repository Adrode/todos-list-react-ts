export const getExampleTasks = async () => {
    const response = await fetch("/todos-list-react-ts/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};