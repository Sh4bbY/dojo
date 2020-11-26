import * as fs from 'fs';
import * as path from 'path';

function getTemplateFiles(dirPath: string): string[] {
  const contents = fs.readdirSync(dirPath, {withFileTypes: true});
  const directories = contents.filter(content => content.isDirectory());
  const dirTemplates = directories.reduce((arr, dir) => arr.concat(getTemplateFiles(path.join(dirPath, dir.name))), []);
  const templates = contents.filter(file => file.isFile() && file.name.endsWith('template.ts'));
  return dirTemplates.concat(templates.map(file => path.join(dirPath, file.name)));
}

function copySolutionFiles(paths: string[]) {
  paths.forEach(templatePath => {
    const dir = templatePath.substring(0, templatePath.lastIndexOf('/'));
    const templateName = templatePath.substring(templatePath.lastIndexOf('/'));
    const solutionName = templateName.replace('.template.ts', '.solution.ts');
    const solutionPath = path.join(dir, solutionName);

    if (!fs.existsSync(solutionPath)) {
      fs.copyFileSync(templatePath, solutionPath);
    }
  });
}

const root = path.join(process.cwd(), 'src');
const files = getTemplateFiles(root);
copySolutionFiles(files);
