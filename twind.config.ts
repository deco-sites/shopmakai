/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  preflight: (preflight) => ({
    ...preflight,

    // Stick footer to the bottom of the page
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      fontFamily: "Poppins, sans-serif"
    },
    'section[data-manifest-key="./sections/Footer.tsx"]': {
      marginTop: "auto",
    },

    // Prevent scroll when modal is open
    "body[no-scroll]": {
      overflow: "hidden",
      height: "100vh",
    },
  }),
  plugins: {
    aspectRatio: {"aspect-ratio": 1},
    scrollStyle: {
      "&::-webkit-scrollbar": {
        width: "4px"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d1d1d1",
        borderRadius: "20px",
        border: "3px solid #d1d1d1"
      }
    },
    backdrop: {
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
    "scroll-snap-center": {
      "scroll-snap-align": "center",
    },
    "scroll-x-mandatory": {
      "scroll-snap-type": "x mandatory",
    },
    "scroll-smooth": {
      "scroll-behavior": "smooth",
      "-webkit-overflow-scrolling": "touch",
    },
    "scrollbar-none": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  theme: {
    extend: {
      colors: {
        // Tokens to remove
        primary: "#616161",
        "primary-light": "#61616180",
        "primary-extra-light": "#61616121",
        "pink": "#eed7e4",
        "black": "#000",
        "gray": "#f5f5f5",

        // Tokens from Design System
        "default": "#FFFFFF",
        "decorative-one": "#003232",
        "decorative-two": "#8C3D3D",
        "interactive-default": "#161616",
        "dark-interactive-default": "#FFFFFF",
        "icon-brand": "#2FD180",
        "icon-subdued": "#66736C",
      },
      textColor: {
        default: "#161616",
        subdued: "#66736C",
        critical: "#B44125",
        "interactive-default": "#F4F4F4",
      },
      borderColor: {
        default: "#D4DBD7",
      },
      fontSize: {
        "body-regular": ["15px", "20px"],
        "body-strong": ["15px", "20px"],
        "heading-strong": ["20px", "24px"],
        "heading-regular": ["20px", "24px"],
        "subheading-strong": ["13px", "16px"],
        "display-strong": ["24px", "28px"],
        "caption-regular": ["13px", "20px"],
        "caption-strong": ["13px", "20px"],
        "subcaption-regular": ["10px", "20px"],
      },
      fontWeight: {
        "body-regular": "400",
        "body-strong": "600",
        "heading-strong": "600",
        "heading-regular": "400",
        "subheading-strong": "600",
        "display-strong": "600",
        "caption-regular": "400",
        "caption-strong": "600",
        "subcaption-regular": "400",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "xxl": "1800px"
    },
  },
};

export default options;
