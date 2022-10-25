import logger from '@tools/logger';
import findUp from 'find-up';
import fs from 'fs';
import { parse } from 'jsonc-parser';
import minimist from 'minimist';
import { getDirnameSync } from 'my-node-fp';

const log = logger();

function getConfigFilePath(argv: minimist.ParsedArgs, projectPath?: string): string | undefined {
  const argvConfigFilePath = argv.c ?? argv.config;
  const projectDirPath = projectPath != null ? getDirnameSync(projectPath) : undefined;

  const configFilePathSearchResultOnCwd = findUp.sync('.ctjsrc');
  const configFilePathSearchProjectDirPath =
    projectDirPath != null ? findUp.sync('.ctjsrc', { cwd: projectDirPath }) : undefined;

  return (
    argvConfigFilePath ?? configFilePathSearchResultOnCwd ?? configFilePathSearchProjectDirPath
  );
}

export default function preLoadConfig() {
  try {
    const argv = minimist(process.argv.slice(2));

    const tsconfigPath =
      argv.project != null || argv.p != null
        ? findUp.sync([argv.project, argv.p])
        : findUp.sync('tsconfig.json');

    const configFilePath = getConfigFilePath(argv, tsconfigPath);
    const config = configFilePath != null ? parse(fs.readFileSync(configFilePath).toString()) : {};

    return {
      ...config,
      p: tsconfigPath,
      project: tsconfigPath,
      c: configFilePath,
      config: configFilePath,
    };
  } catch (catched) {
    const err = catched instanceof Error ? catched : new Error('unknown error raised');

    log.error(err);
    log.error(err.stack);

    return {};
  }
}