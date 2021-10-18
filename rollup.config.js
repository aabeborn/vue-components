import vue from "rollup-plugin-vue";
import esbuild from "rollup-plugin-esbuild";
import styles from "rollup-plugin-styles";
import commonjs from "@rollup/plugin-commonjs";
import {join} from "path";

const entries = {
  index: "./src/index.js",
  Button: "./src/components/button/index.js",
  Input: "./src/components/input/index.js",
};

export default () => {
  return {
    input: entries,
    external: ["vue"],
    output: {
      format: "esm",
      dir: "dist/",
      assetFileNames: "styles/[name][extname]",
    },
    plugins: [
      vue({
        // preprocessStyles: true,
      }),
      esbuild({
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        sourceMap: false, // default
        minify: process.env.NODE_ENV === "production",
        target: "es2017", // default, or 'es20XX', 'esnext'
      }),
      commonjs(),
      styles({
        mode: ["extract"],

        // modules: true,
        // onExtract: data => {console.log(data); return true},
        // onImport: (code, id ) => console.log(code, id)
        // data: `@import "${join(__dirname, "src/styles/variables.scss")}"`
      }),
    ],
  };
};
