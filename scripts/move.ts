import { resolve } from 'node:path'
import fse from 'fs-extra'

const componentsDir = resolve(__dirname, '../packages/components', 'dist')
const volarPath = resolve(process.cwd(), 'volar.d.ts')
const targetDir = resolve(__dirname, '../packages/pkg-name', 'es/components')
const volarTargetPath = resolve(__dirname, '../packages/pkg-name', 'volar.d.ts')

async function main() {
  try {
    await fse.ensureDir(componentsDir)
    await fse.ensureFile(volarPath)
    fse.copySync(componentsDir, targetDir, { overwrite: true })
    fse.copyFileSync(volarPath, volarTargetPath)
  }
  catch (error) {
    console.error(error)
  }
}

main()
