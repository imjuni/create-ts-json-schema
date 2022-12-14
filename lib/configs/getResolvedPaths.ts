import IAddSchemaOption from '@configs/interfaces/IAddSchemaOption';
import IDeleteSchemaOption from '@configs/interfaces/IDeleteSchemaOption';
import IRefreshSchemaOption from '@configs/interfaces/IRefreshSchemaOption';
import IResolvedPaths from '@configs/interfaces/IResolvedPaths';
import ITruncateSchemaOption from '@configs/interfaces/ITruncateSchemaOption';
import { replaceSepToPosix, win32DriveLetterUpdown } from 'my-node-fp';
import path from 'path';

export default function getResolvedPaths<
  T extends IDeleteSchemaOption | IAddSchemaOption | ITruncateSchemaOption | IRefreshSchemaOption,
>(option: T): IResolvedPaths {
  const project = replaceSepToPosix(win32DriveLetterUpdown(path.resolve(option.project), 'upper'));
  const cwd = replaceSepToPosix(path.resolve(win32DriveLetterUpdown(process.cwd(), 'upper')));
  const output = replaceSepToPosix(path.resolve(win32DriveLetterUpdown(option.output, 'upper')));

  return { project, cwd, output };
}
