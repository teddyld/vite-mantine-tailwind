import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider, createTheme } from "@mantine/core";

// Import your MantineUI theme
const theme = createTheme({});

import React from "react";

export function setupRender(ui: React.ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <MantineProvider theme={theme}>{children}</MantineProvider>
      ),
    }),
  };
}
