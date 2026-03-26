import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const brandOutputDir = path.join(projectRoot, 'src/_generated/brand')

describe('Brander Integration', () => {
  describe('Brand Configuration', () => {
    it('brand.config.ts should export a configuration object', async () => {
      const config = await import(path.join(projectRoot, 'brand.config.ts')).then((m) => m.default)
      expect(config).toBeDefined()
      expect(typeof config).toBe('object')
    })

    it('should have company name from environment', async () => {
      const config = await import(path.join(projectRoot, 'brand.config.ts')).then((m) => m.default)
      expect(config.name).toBeDefined()
      expect(typeof config.name).toBe('string')
    })

    it('should have color palette configured', async () => {
      const config = await import(path.join(projectRoot, 'brand.config.ts')).then((m) => m.default)
      expect(config.colors).toBeDefined()
      expect(config.colors.primary).toBeDefined()
      expect(config.colors.secondary).toBeDefined()
      expect(config.colors.accent).toBeDefined()
    })

    it('should have app configuration', async () => {
      const config = await import(path.join(projectRoot, 'brand.config.ts')).then((m) => m.default)
      expect(config.app).toBeDefined()
      expect(config.app.apiBaseUrl).toBeDefined()
    })
  })

  describe('Generated Brand Tokens', () => {
    it('brand output directory should exist', () => {
      expect(fs.existsSync(brandOutputDir)).toBe(true)
    })

    it('should have generated CSS tokens file', () => {
      const tokensCssFile = path.join(brandOutputDir, 'tokens.css')
      expect(fs.existsSync(tokensCssFile)).toBe(true)
    })

    it('should have generated TypeScript tokens file', () => {
      const tokensTsFile = path.join(brandOutputDir, 'tokens.ts')
      expect(fs.existsSync(tokensTsFile)).toBe(true)
    })

    it('should have generated JSON tokens file', () => {
      const tokensJsonFile = path.join(brandOutputDir, 'tokens.json')
      expect(fs.existsSync(tokensJsonFile)).toBe(true)
    })

    it('tokens.css should contain CSS variables', () => {
      const tokensCssFile = path.join(brandOutputDir, 'tokens.css')
      const content = fs.readFileSync(tokensCssFile, 'utf-8')
      expect(content).toContain('--primary-')
      expect(content).toContain('oklch')
    })

    it('tokens.json should be valid JSON', () => {
      const tokensJsonFile = path.join(brandOutputDir, 'tokens.json')
      const content = fs.readFileSync(tokensJsonFile, 'utf-8')
      expect(() => JSON.parse(content)).not.toThrow()
    })

    it('tokens.ts should export colors object', () => {
      const tokensTsFile = path.join(brandOutputDir, 'tokens.ts')
      const content = fs.readFileSync(tokensTsFile, 'utf-8')
      expect(content).toContain('export')
    })
  })

  describe('Tailwind Preset Adapter', () => {
    it('should have Tailwind preset adapter', () => {
      const adapterPath = path.join(brandOutputDir, 'adapters', 'tailwind.preset.ts')
      expect(fs.existsSync(adapterPath)).toBe(true)
    })

    it('Tailwind preset should be valid TypeScript', async () => {
      const adapterPath = path.join(brandOutputDir, 'adapters', 'tailwind.preset.ts')
      const content = fs.readFileSync(adapterPath, 'utf-8')
      expect(content).toContain('export')
      expect(content).toContain('default')
    })
  })

  describe('Theme Outputs', () => {
    it('should have light theme CSS', () => {
      const lightTheme = path.join(brandOutputDir, 'themes', 'light.css')
      expect(fs.existsSync(lightTheme)).toBe(true)
    })

    it('should have dark theme CSS', () => {
      const darkTheme = path.join(brandOutputDir, 'themes', 'dark.css')
      expect(fs.existsSync(darkTheme)).toBe(true)
    })

    it('light theme should contain CSS variables', () => {
      const lightTheme = path.join(brandOutputDir, 'themes', 'light.css')
      const content = fs.readFileSync(lightTheme, 'utf-8')
      expect(content).toContain('--')
    })
  })

  describe('Environment Variables', () => {
    it('.env file should exist', () => {
      const envFile = path.join(projectRoot, '.env')
      expect(fs.existsSync(envFile)).toBe(true)
    })

    it('.env.example file should exist for documentation', () => {
      const envExampleFile = path.join(projectRoot, '.env.example')
      expect(fs.existsSync(envExampleFile)).toBe(true)
    })

    it('.env should not be tracked in git', () => {
      const gitignoreFile = path.join(projectRoot, '.gitignore')
      const content = fs.readFileSync(gitignoreFile, 'utf-8')
      expect(content).toContain('.env')
    })
  })

  describe('Validation', () => {
    it('tokens.json should have colors property', () => {
      const tokensJsonFile = path.join(brandOutputDir, 'tokens.json')
      const content = fs.readFileSync(tokensJsonFile, 'utf-8')
      const tokens = JSON.parse(content)
      expect(tokens.color).toBeDefined()
      expect(tokens.color.primitive).toBeDefined()
    })

    it('generated CSS should not be empty', () => {
      const tokensCssFile = path.join(brandOutputDir, 'tokens.css')
      const content = fs.readFileSync(tokensCssFile, 'utf-8')
      expect(content.length).toBeGreaterThan(100)
    })
  })
})
