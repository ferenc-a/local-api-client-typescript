import nodeResolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

const config = {
  input: "./esm/main.js",
  external: [
    "@azure/ms-rest-js",
    "@azure/ms-rest-azure-js"
  ],
  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "Bundle",
    sourcemap: true,
    globals: {
      "@azure/ms-rest-js": "msRest",
      "@azure/ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */`
  },
  plugins: [
    nodeResolve({ mainFields: ['module', 'main'] }),
    sourcemaps()
  ]
};

export default config;
