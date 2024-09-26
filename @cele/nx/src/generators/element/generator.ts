import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ElementGeneratorSchema } from './schema';

function getName(
  options: ElementGeneratorSchema,
  startWithLowerCase: boolean,
  join = '',
): string {
  const name = options.name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(join);
  if (!startWithLowerCase) return name;
  return name.charAt(0).toLowerCase() + name.slice(1);
}

export async function elementGenerator(
  tree: Tree,
  options: ElementGeneratorSchema,
) {
  console.log(options.name, options.project);
  const substitutions = {
    ...options,
    className: getName(options, false),
    constPrefix: getName(options, true),
    displayName: getName(options, false, ' '),
    elementName: options.name,
  };
  await formatFiles(tree);
}

export default elementGenerator;
