import type { Preview } from "@storybook/react";
import "./globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#09090b" }, // Apex Background
      ],
    },
  },
};

export default preview;
