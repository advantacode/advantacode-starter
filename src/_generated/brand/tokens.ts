export const metadata = {
  "version": "0.0.1",
  "generated": "2026-03-09T00:44:30.935Z",
  "themes": [
    "light",
    "dark"
  ],
  "adapters": [
    "tailwind",
    "bootstrap",
    "figma"
  ],
  "artifacts": [
    "tokens.css",
    "themes/light.css",
    "themes/dark.css",
    "tokens.json",
    "tokens.scss",
    "adapters/bootstrap.variables.scss",
    "adapters/tailwind.preset.ts",
    "adapters/figma.tokens.json",
    "tokens.ts",
    "metadata.json"
  ],
  "cssPrefix": ""
} as const;

export const tokens = {
  "color": {
    "primitive": {
      "primary": {
        "50": "oklch(0.97 0.232542 303.9)",
        "100": "oklch(0.93 0.232542 303.9)",
        "200": "oklch(0.87 0.232542 303.9)",
        "300": "oklch(0.8 0.232542 303.9)",
        "400": "oklch(0.72 0.232542 303.9)",
        "500": "oklch(0.65 0.232542 303.9)",
        "600": "oklch(0.57 0.232542 303.9)",
        "700": "oklch(0.49 0.232542 303.9)",
        "800": "oklch(0.4 0.232542 303.9)",
        "900": "oklch(0.32 0.232542 303.9)",
        "950": "oklch(0.24 0.232542 303.9)"
      },
      "secondary": {
        "50": "oklch(0.97 0.01188 285.805)",
        "100": "oklch(0.93 0.01188 285.805)",
        "200": "oklch(0.87 0.01188 285.805)",
        "300": "oklch(0.8 0.01188 285.805)",
        "400": "oklch(0.72 0.01188 285.805)",
        "500": "oklch(0.65 0.01188 285.805)",
        "600": "oklch(0.57 0.01188 285.805)",
        "700": "oklch(0.49 0.01188 285.805)",
        "800": "oklch(0.4 0.01188 285.805)",
        "900": "oklch(0.32 0.01188 285.805)",
        "950": "oklch(0.24 0.01188 285.805)"
      },
      "accent": {
        "50": "oklch(0.97 0.176688 305.504)",
        "100": "oklch(0.93 0.176688 305.504)",
        "200": "oklch(0.87 0.176688 305.504)",
        "300": "oklch(0.8 0.176688 305.504)",
        "400": "oklch(0.72 0.176688 305.504)",
        "500": "oklch(0.65 0.176688 305.504)",
        "600": "oklch(0.57 0.176688 305.504)",
        "700": "oklch(0.49 0.176688 305.504)",
        "800": "oklch(0.4 0.176688 305.504)",
        "900": "oklch(0.32 0.176688 305.504)",
        "950": "oklch(0.24 0.176688 305.504)"
      },
      "info": {
        "50": "oklch(0.97 0.147869 237.323)",
        "100": "oklch(0.93 0.147869 237.323)",
        "200": "oklch(0.87 0.147869 237.323)",
        "300": "oklch(0.8 0.147869 237.323)",
        "400": "oklch(0.72 0.147869 237.323)",
        "500": "oklch(0.65 0.147869 237.323)",
        "600": "oklch(0.57 0.147869 237.323)",
        "700": "oklch(0.49 0.147869 237.323)",
        "800": "oklch(0.4 0.147869 237.323)",
        "900": "oklch(0.32 0.147869 237.323)",
        "950": "oklch(0.24 0.147869 237.323)"
      },
      "success": {
        "50": "oklch(0.97 0.192007 149.579)",
        "100": "oklch(0.93 0.192007 149.579)",
        "200": "oklch(0.87 0.192007 149.579)",
        "300": "oklch(0.8 0.192007 149.579)",
        "400": "oklch(0.72 0.192007 149.579)",
        "500": "oklch(0.65 0.192007 149.579)",
        "600": "oklch(0.57 0.192007 149.579)",
        "700": "oklch(0.49 0.192007 149.579)",
        "800": "oklch(0.4 0.192007 149.579)",
        "900": "oklch(0.32 0.192007 149.579)",
        "950": "oklch(0.24 0.192007 149.579)"
      },
      "warning": {
        "50": "oklch(0.97 0.161668 86.047)",
        "100": "oklch(0.93 0.161668 86.047)",
        "200": "oklch(0.87 0.161668 86.047)",
        "300": "oklch(0.8 0.161668 86.047)",
        "400": "oklch(0.72 0.161668 86.047)",
        "500": "oklch(0.65 0.161668 86.047)",
        "600": "oklch(0.57 0.161668 86.047)",
        "700": "oklch(0.49 0.161668 86.047)",
        "800": "oklch(0.4 0.161668 86.047)",
        "900": "oklch(0.32 0.161668 86.047)",
        "950": "oklch(0.24 0.161668 86.047)"
      },
      "danger": {
        "50": "oklch(0.97 0.207849 25.331)",
        "100": "oklch(0.93 0.207849 25.331)",
        "200": "oklch(0.87 0.207849 25.331)",
        "300": "oklch(0.8 0.207849 25.331)",
        "400": "oklch(0.72 0.207849 25.331)",
        "500": "oklch(0.65 0.207849 25.331)",
        "600": "oklch(0.57 0.207849 25.331)",
        "700": "oklch(0.49 0.207849 25.331)",
        "800": "oklch(0.4 0.207849 25.331)",
        "900": "oklch(0.32 0.207849 25.331)",
        "950": "oklch(0.24 0.207849 25.331)"
      },
      "neutral": {
        "50": "oklch(0.97 0.01188 285.805)",
        "100": "oklch(0.93 0.01188 285.805)",
        "200": "oklch(0.87 0.01188 285.805)",
        "300": "oklch(0.8 0.01188 285.805)",
        "400": "oklch(0.72 0.01188 285.805)",
        "500": "oklch(0.65 0.01188 285.805)",
        "600": "oklch(0.57 0.01188 285.805)",
        "700": "oklch(0.49 0.01188 285.805)",
        "800": "oklch(0.4 0.01188 285.805)",
        "900": "oklch(0.32 0.01188 285.805)",
        "950": "oklch(0.24 0.01188 285.805)"
      }
    },
    "semantic": {
      "light": {
        "background": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "surface": {
          "ref": "neutral.100",
          "value": "oklch(0.93 0.01188 285.805)"
        },
        "text": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "muted": {
          "ref": "neutral.100",
          "value": "oklch(0.93 0.01188 285.805)"
        },
        "muted-foreground": {
          "ref": "neutral.700",
          "value": "oklch(0.49 0.01188 285.805)"
        },
        "card": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "card-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "popover": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "popover-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "border": {
          "ref": "neutral.200",
          "value": "oklch(0.87 0.01188 285.805)"
        },
        "input": {
          "ref": "neutral.200",
          "value": "oklch(0.87 0.01188 285.805)"
        },
        "ring": {
          "ref": "primary.500",
          "value": "oklch(0.65 0.232542 303.9)"
        },
        "primary": {
          "ref": "primary.600",
          "value": "oklch(0.57 0.232542 303.9)"
        },
        "primary-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "secondary": {
          "ref": "secondary.600",
          "value": "oklch(0.57 0.01188 285.805)"
        },
        "secondary-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "accent": {
          "ref": "accent.600",
          "value": "oklch(0.57 0.176688 305.504)"
        },
        "accent-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "info": {
          "ref": "info.600",
          "value": "oklch(0.57 0.147869 237.323)"
        },
        "info-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "success": {
          "ref": "success.600",
          "value": "oklch(0.57 0.192007 149.579)"
        },
        "success-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "warning": {
          "ref": "warning.600",
          "value": "oklch(0.57 0.161668 86.047)"
        },
        "warning-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "danger": {
          "ref": "danger.600",
          "value": "oklch(0.57 0.207849 25.331)"
        },
        "danger-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        }
      },
      "dark": {
        "background": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "surface": {
          "ref": "neutral.900",
          "value": "oklch(0.32 0.01188 285.805)"
        },
        "text": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "muted": {
          "ref": "neutral.900",
          "value": "oklch(0.32 0.01188 285.805)"
        },
        "muted-foreground": {
          "ref": "neutral.300",
          "value": "oklch(0.8 0.01188 285.805)"
        },
        "card": {
          "ref": "neutral.900",
          "value": "oklch(0.32 0.01188 285.805)"
        },
        "card-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "popover": {
          "ref": "neutral.900",
          "value": "oklch(0.32 0.01188 285.805)"
        },
        "popover-foreground": {
          "ref": "neutral.50",
          "value": "oklch(0.97 0.01188 285.805)"
        },
        "border": {
          "ref": "neutral.800",
          "value": "oklch(0.4 0.01188 285.805)"
        },
        "input": {
          "ref": "neutral.800",
          "value": "oklch(0.4 0.01188 285.805)"
        },
        "ring": {
          "ref": "primary.400",
          "value": "oklch(0.72 0.232542 303.9)"
        },
        "primary": {
          "ref": "primary.500",
          "value": "oklch(0.65 0.232542 303.9)"
        },
        "primary-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "secondary": {
          "ref": "secondary.500",
          "value": "oklch(0.65 0.01188 285.805)"
        },
        "secondary-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "accent": {
          "ref": "accent.500",
          "value": "oklch(0.65 0.176688 305.504)"
        },
        "accent-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "info": {
          "ref": "info.500",
          "value": "oklch(0.65 0.147869 237.323)"
        },
        "info-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "success": {
          "ref": "success.500",
          "value": "oklch(0.65 0.192007 149.579)"
        },
        "success-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "warning": {
          "ref": "warning.500",
          "value": "oklch(0.65 0.161668 86.047)"
        },
        "warning-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        },
        "danger": {
          "ref": "danger.500",
          "value": "oklch(0.65 0.207849 25.331)"
        },
        "danger-foreground": {
          "ref": "neutral.950",
          "value": "oklch(0.24 0.01188 285.805)"
        }
      }
    }
  }
} as const;

export type Metadata = typeof metadata;
export type Tokens = typeof tokens;
