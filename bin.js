#!/usr/bin/env node

const fs = require('fs-extra');
const { resolve } = require('path');

const cwd = process.cwd(); // 当前shell执行的地址
const name = process.argv?.[2]; // 传入的项目名

const targetPath = resolve(cwd, name);
const templatePath = resolve(__dirname, 'template');

// 根据模板复制创建目录
function makeProject(copyPath) {
  const isHaveDir = fs.existsSync(targetPath); // 创建的项目是否已经存在
  if (isHaveDir) {
    console.log(`Error: ${cwd}/${name} is already exists!`);
  } else {
    fs.mkdir(targetPath);
    fs.copySync(copyPath, targetPath);

    const package = require(templatePath + '/package.json');

    package.name = name;
    package.keywords = [name];
    fs.writeJSONSync(resolve(targetPath, 'package.json'), package, {
      spaces: 2
    });

    console.log('----------------------------');
    console.log('Create react component template done:', resolve(process.cwd(), name));
    console.log(`Please "cd ${resolve(process.cwd(), name)}" , and run "yarn install" or "npm install"`);
    console.log('----------------------------');
  }
}

makeProject(templatePath);
