/**
 * Apex20 Design Tokens - Colors
 * Siga os padrões do shadcn/ui para compatibilidade
 */

export const colors = {
  background: "hsl(240 10% 3.9%)",
  foreground: "hsl(0 0% 98%)",
  card: {
    DEFAULT: "hsl(240 10% 3.9%)",
    foreground: "hsl(0 0% 98%)",
  },
  popover: {
    DEFAULT: "hsl(240 10% 3.9%)",
    foreground: "hsl(0 0% 98%)",
  },
  primary: {
    DEFAULT: "hsl(0 72.2% 50.6%)", // Apex Red
    foreground: "hsl(0 0% 98%)",
  },
  secondary: {
    DEFAULT: "hsl(240 3.7% 15.9%)",
    foreground: "hsl(0 0% 98%)",
  },
  muted: {
    DEFAULT: "hsl(240 3.7% 15.9%)",
    foreground: "hsl(240 5% 64.9%)",
  },
  accent: {
    DEFAULT: "hsl(240 3.7% 15.9%)",
    foreground: "hsl(0 0% 98%)",
  },
  destructive: {
    DEFAULT: "hsl(0 62.8% 30.6%)",
    foreground: "hsl(0 0% 98%)",
  },
  border: "hsl(240 3.7% 15.9%)",
  input: "hsl(240 3.7% 15.9%)",
  ring: "hsl(0 72.2% 50.6%)",
} as const;
