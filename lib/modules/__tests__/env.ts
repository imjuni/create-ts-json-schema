import IAddSchemaOption from '@configs/interfaces/IAddSchemaOption';
import IBaseOption from '@configs/interfaces/IBaseOption';
import IDeleteSchemaOption from '@configs/interfaces/IDeleteSchemaOption';
import { TOUTPUT_FORMAT } from '@configs/interfaces/TOUTPUT_FORMAT';

export const baseOption: IBaseOption = {
  config: undefined,
  project: '.',
  types: [],
  skipError: true,
  output: '.',
};

export const addCmdOption: IAddSchemaOption = {
  ...baseOption,
  discriminator: 'add-schema',
  files: [],
  multiple: false,
  generatorOption: {},
  format: TOUTPUT_FORMAT.JSON,
};

export const deleteCmdOption: IDeleteSchemaOption = {
  ...baseOption,
  discriminator: 'delete-schema',
  multiple: false,
};
