import { Model } from 'shared/lib/Model';
import { ITaskRawData } from '../types/data';

interface ITaskFields {
  name: string;
  id: number;
}

export class TaskModel extends Model<ITaskFields> {

  constructor(taskData: ITaskRawData) {
    super({
      idField: 'id',
      fields: {
        name: taskData.name,
        id: taskData.id
      }
    });
  }
}