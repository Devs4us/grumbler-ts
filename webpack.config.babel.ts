import { getWebPackVariants, WebpackConfigOptions } from "grumbler-ts-scripts";

const FILE_NAME = "mylibrary";
const MODULE_NAME = "mylibrary";

export const WEBPACK_CONFIG: WebpackConfigOptions = {
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
};

export const WEBPACK_CONFIG_MIN: WebpackConfigOptions = {
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
  vars: {
    __MIN__: true,
  },
};

export const WEBPACK_CONFIG_TEST: WebpackConfigOptions = {
  modulename: MODULE_NAME,
  options: {
    devtool: "inline-source-map",
  },
  vars: {
    __TEST__: true,
  },
};

export default getWebPackVariants([WEBPACK_CONFIG, WEBPACK_CONFIG_MIN]);
