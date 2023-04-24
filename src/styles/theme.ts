import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"


type ModeType = "light" | "dark";

// Color Pallete
// Tailwind Shades cmd + k + g
// Ctrl + Shift + P  + Sort Lines Decending and swap them around for light mode
export const tokens = (mode:ModeType) => ({
  ...(mode === 'dark' ? {
      // Dark Mode
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
      },
      primary: {
        100: "#F8F8F8",
        200: "#a1a4aa",
        300: "#727680",
        400: "#434955",
        500: "#141b2b",
        600: "#101622",
        700: "#0c101a",
        800: "#080b11",
        900: "#040509"
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
      }
    } : {
      // Light Mode
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0"
      },
      primary: {
        100: "#040509",
        200: "#080b11",
        300: "#0c101a",
        400: "#f2f0f0",
        500: "#dcd9d9",
        600: "#434955",
        700: "#727680",
        800: "#a1a4aa",
        900: "#d0d1d5"
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
      }
    }
  )
})

// MUI Theme Settings
export const themeSettings = (mode:ModeType) => {
  const colors = tokens(mode)

  return {
    palette: {
      mode: mode,
      ...(mode == "dark" ? {
        primary: {
          main: "#333333"
        },
        secondary: {
          main: "#F8F8F8"
        },
        // action: {
        //   main: colors.greenAccent[500]
        // },
        neutral: {
          main: colors.grey[500],
          dark: colors.grey[700],
          light: colors.grey[100]
        },
        text: {
          primary: "#F8F8F8",
          secondary: "#333333",
          disabled: "#CCCCCC",
          white: "#F8F8F8",
          black: "#333333",
          accent: colors.greenAccent[500]
        },
        background: {
          default: colors.primary[500]
        },
        common: {
          white: "#FFFFFF",
          black: "#0000000"
        }
      } : {
        primary: {
          main: colors.primary[100]
        },
        secondary: {
          main: colors.greenAccent[500]
        },
        neutral: {
          main: colors.grey[500],
          dark: colors.grey[700],
          light: colors.grey[100]
        },
        text: {
          primary: "#333333",
          secondary: "#F8F8F8",
          disabled: "#CCCCCC",
          white: "#F8F8F8",
          black: "#333333",
          accent: colors.greenAccent[500]
        },
        background: {
          default: "#f9fafb"
        },
        common: {
          white: "#FFFFFF",
          black: "#0000000"
        }
      })
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","), 
        fontSize: 14,
      },
    }
  }
}

// Centext for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

// export const useMode = () => {
//   const [mode, setMode] = useState<ModeType>("dark")

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === "light" ? "dark" : "light"))
//     }),
//     []
//   )
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

//   return [theme, colorMode]
//}

export const useMode = () => {
  const [mode, setMode] = useState<ModeType>("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prevMode => prevMode === "light" ? "dark" : "light")
  }), []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};