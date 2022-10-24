import IAddSchemaOption from '@configs/interfaces/IAddSchemaOption';
import { Argv } from 'yargs';

export default function addBuilder(argv: Argv<{}>) {
  // have no alias option
  argv.option('files', {
    describe: 'configuration file path',
    type: 'string',
    default: [],
    array: true,
  });

  return argv as Argv<IAddSchemaOption>;
}