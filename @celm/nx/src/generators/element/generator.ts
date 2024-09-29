import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { ElementGeneratorSchema } from './schema';

function getName(
  options: ElementGeneratorSchema,
  startWithLowerCase: boolean,
  join = '',
): string {
  const name = options.name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
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
  const projectRoot = readProjectConfiguration(tree, options.project).root;
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(projectRoot, options.path),
    substitutions,
  );
  await formatFiles(tree);
}

export default elementGenerator;
