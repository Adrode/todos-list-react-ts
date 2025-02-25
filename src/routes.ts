export const toTasks = () => "/tasks";
export const toAuthor = () => "/author";

export const toTask =
    ({ id }: { id: string } = { id: ":id" }): string => `/tasks/${id}`;