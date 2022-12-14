import IDatabaseRecord from '@modules/interfaces/IDatabaseRecord';
import ora from 'ora';

type TChildToParentData =
  | { command: 'record'; data: IDatabaseRecord[] }
  | { command: 'kill-me' }
  | {
      command: 'message';
      data: string;
      channel?: keyof Pick<ora.Ora, 'succeed' | 'fail' | 'info'>;
    };

export default TChildToParentData;
