import { TasksBoard } from 'features/tasks-board';
import { useTasksBoard } from 'features/tasks-board/lib/useTasksBoard';
import { useSearchParams } from 'react-router-dom';
import { Title } from 'shared/ui/Title';

export default function Page() {
  const [searchParams] = useSearchParams();
  const boardID: number = Number(searchParams.get('boardID'));

  // const {
  //   columns,
  //   tasks
  // } = useTasksBoard(boardID);

  return (
    <main>
      <Title as="h1" >
        This is board page {}
      </Title>
      {/* <TasksBoard
        columns={columns}
      /> */}
    </main>
  )
}
