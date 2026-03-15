#!/usr/bin/env node

const { execSync } = require('node:child_process');
const { readFileSync, writeFileSync } = require('node:fs');

const args = process.argv.slice(2);
const versionType = args[0];
const isDryRun = args.includes('--dry-run');

if (!versionType) {
  console.error('❌ Usage: node version.js <patch|minor|major|alpha|beta|rc|stable> [--dry-run]');
  process.exit(1);
}

const validTypes = ['patch', 'minor', 'major', 'alpha', 'beta', 'rc', 'stable'];
if (!validTypes.includes(versionType)) {
  console.error(`❌ Invalid version type. Must be one of: ${validTypes.join(', ')}`);
  process.exit(1);
}

// Read current package.json to calculate new version
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const currentVersion = packageJson.version;

// Calculate new version manually
let newVersion;
const [major, minor, patch] = currentVersion.replace(/-.*$/, '').split('.').map(Number);

switch (versionType) {
  case 'patch':
    newVersion = `${major}.${minor}.${patch + 1}`;
    break;
  case 'minor':
    newVersion = `${major}.${minor + 1}.0`;
    break;
  case 'major':
    newVersion = `${major + 1}.0.0`;
    break;
  case 'stable': {
    // Remove prerelease suffix to get stable version
    const stableMatch = currentVersion.match(/^(\d+\.\d+\.\d+)(?:-\w+\.\d+)?$/);
    if (stableMatch) {
      newVersion = stableMatch[1];
    } else {
      console.error('❌ Current version is not a prerelease version');
      process.exit(1);
    }
    break;
  }
  case 'alpha':
  case 'beta':
  case 'rc': {
    // Handle prerelease versions
    const prereleaseMatch = currentVersion.match(/^(\d+\.\d+\.\d+)(?:-(\w+)\.(\d+))?$/);
    if (prereleaseMatch) {
      const [, baseVersion, preType, preNum] = prereleaseMatch;
      if (preType === versionType) {
        newVersion = `${baseVersion}-${versionType}.${parseInt(preNum || '0', 10) + 1}`;
      } else {
        newVersion = `${baseVersion}-${versionType}.0`;
      }
    } else {
      newVersion = `${major}.${minor}.${patch + 1}-${versionType}.0`;
    }
    break;
  }
}

if (isDryRun) {
  console.log(`🔍 DRY RUN: Would update version from ${currentVersion} to ${newVersion}`);
  console.log('📝 Files that would be modified:');
  console.log('  - package.json');
  console.log('  - jsr.json');
  console.log('🏷️  Git operations that would be performed:');
  console.log('  - git add package.json jsr.json');
  console.log(`  - git commit -m "chore: bump version to ${newVersion}"`);
  console.log(`  - git tag v${newVersion}`);
  console.log('✅ No changes were made (dry run mode)');
  process.exit(0);
}

console.log(`🔄 Updating version from ${currentVersion} to ${newVersion}`);

// Update both files with new version
packageJson.version = newVersion;
writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);

const jsrJson = JSON.parse(readFileSync('jsr.json', 'utf8'));
jsrJson.version = newVersion;
writeFileSync('jsr.json', `${JSON.stringify(jsrJson, null, 2)}\n`);

// Create git commit and tag
execSync('git add package.json jsr.json', { stdio: 'inherit' });
execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });
execSync(`git tag v${newVersion}`, { stdio: 'inherit' });

console.log(`✅ Version updated to ${newVersion} in both package.json and jsr.json`);
