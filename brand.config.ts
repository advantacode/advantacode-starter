/**
 * Brand configuration - Source of truth for all branding and app settings
 * Configure these values by setting environment variables in .env
 *
 * Brand Colors:
 * - PRIMARY_COLOR: Main brand color (default: purple-500)
 * - SECONDARY_COLOR: Secondary color (default: zinc-700)
 * - NEUTRAL_COLOR: Neutral color (default: zinc-700)
 * - ACCENT_COLOR: Accent color (default: purple-400)
 * - INFO_COLOR: Info state color (default: sky-500)
 * - SUCCESS_COLOR: Success state color (default: green-500)
 * - WARNING_COLOR: Warning state color (default: yellow-500)
 * - DANGER_COLOR: Danger/error state color (default: red-500)
 *
 * Application Settings:
 * - COMPANY_NAME: Your company name
 * - CSS_PREFIX: Custom CSS prefix for brand tokens
 * - VITE_APP_NAME: Application display name
 * - VITE_APP_HOST: Development host (e.g., localhost:5173)
 * - VITE_PORT: Development server port
 * - VITE_API_BASE_URL: Backend API base URL
 */
export default {
  // Company & App Settings
  name: process.env.COMPANY_NAME || 'My Company',
  appName: process.env.VITE_APP_NAME || 'Frontend Starter',

  // Brander output and stylesheet integration.
  project: {
    outDir: 'src/_generated/brand',
    styleFile: 'src/style.css'
  },

  // Development & Deployment
  app: {
    host: process.env.VITE_APP_HOST || 'localhost:5173',
    port: Number(process.env.VITE_PORT || 5173),
    apiBaseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'
  },

  // CSS & Styling
  css: {
    prefix: process.env.CSS_PREFIX ?? ''
  },

  // Brand Color Palette
  colors: {
    primary: process.env.PRIMARY_COLOR || 'purple-500',
    secondary: process.env.SECONDARY_COLOR || 'zinc-700',
    neutral: process.env.NEUTRAL_COLOR || process.env.SECONDARY_COLOR || 'zinc-700',
    accent: process.env.ACCENT_COLOR || 'purple-400',
    info: process.env.INFO_COLOR || 'sky-500',
    success: process.env.SUCCESS_COLOR || 'green-500',
    warning: process.env.WARNING_COLOR || 'yellow-500',
    danger: process.env.DANGER_COLOR || 'red-500'
  },

  typography: {
    fontSans: 'Inter',
    fontMono: 'JetBrains Mono'
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
}
