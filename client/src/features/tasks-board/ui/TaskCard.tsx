import { FC } from 'react';
import { Title } from 'shared/ui/Title';
import { TaskModel } from 'entities/task/lib/Model';

interface ITaskCardProps {
  className?: string;
  task: TaskModel;
}

export const TaskCard: FC<ITaskCardProps> = (props) => {
  const {
    className,
    task
  } = props;

  return (
    <div className={className}>
      <Title as="h4">
        {task.get('name')}
      </Title>
    </div>
  )
}
