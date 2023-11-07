import { TaskModel } from 'entities/task/lib/Model'
import { TaskCard } from 'features/tasks-board/ui/TaskCard';
import { FC } from 'react';
import { Title } from 'shared/ui/Title';

interface IColumnProps {
  className?: string;
  tasks?: TaskModel[];
  name: string;

}

export const Column: FC<IColumnProps> = (props) => {
  const {
    className,
    tasks,
    name
  } = props;

  const columnCards = tasks?.map((data) => (
    <TaskCard
      task={data}
    />
  ))

  return (
    <div className={className}>
      <div>
        <Title as="h3">
          {name}
        </Title>
      </div>
      <div>
        {columnCards}
      </div>
    </div>
  )
}
