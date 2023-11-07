import { FetchStatus, useFetch } from 'shared/hooks/useFetch';

export const useTasksBoard = (boardID: number) => {
  const tasks = useFetch(`http://localhost:5050/board/${boardID}/tasks`);
  const columns = useFetch(`http://localhost:5050/board/${boardID}columns`);

  return {
    tasks: tasks.data,
    columns: columns.data,
  };
}
