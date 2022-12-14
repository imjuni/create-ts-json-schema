import IDeleteSchemaOption from '@configs/interfaces/IDeleteSchemaOption';
import { Argv } from 'yargs';

export default function deleteBuilder(argv: Argv<{}>) {
  argv.option('multiple', {
    describe: 'use checkbox with multiple selections',
    type: 'boolean',
    default: false,
  });

  return argv as Argv<IDeleteSchemaOption>;
}
