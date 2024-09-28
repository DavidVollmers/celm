import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { elementGenerator } from './generator';
import { ElementGeneratorSchema } from './schema';

describe('celement generator', () => {
  let tree: Tree;
  const options: ElementGeneratorSchema = {
    name: 'test',
    project: 'test',
    path: '.',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await elementGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
