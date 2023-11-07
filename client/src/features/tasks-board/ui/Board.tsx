import { TaskModel } from 'entities/task/lib/Model';
import { FC } from 'react';
import { Column } from './Column';
import styles from './Board.module.scss';

interface IBoardColumnData {
  name: string;
  tasks: TaskModel[];
}

interface IBoardProps {
  className?: string;
  columns: IBoardColumnData[];
}

export const Board: FC<IBoardProps> = (props) => {
  const {
    columns
  } = props;

  const boardColumns = columns.map((data) => (
    <Column
      className={styles.column}
      name={data.name}
      tasks={data.tasks}
    />
  ))

  return (
    <div className={styles.board}>
      {boardColumns}
    </div>
  )
}
