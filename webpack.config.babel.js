import { getWebPackVariants } from "grumbler-ts-scripts/config/webpack.config";

const FILE_NAME = "mylibrary";
const MODULE_NAME = "mylibrary";

export const WEBPACK_CONFIG = {
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
};

export const WEBPACK_CONFIG_MIN = {
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
  vars: {
    __MIN__: true,
  },
};

export const WEBPACK_CONFIG_TEST = {
  modulename: MODULE_NAME,
  options: {
    devtool: "inline-source-map",
  },
  vars: {
    __TEST__: true,
  },
};

export default getWebPackVariants([WEBPACK_CONFIG, WEBPACK_CONFIG_MIN]);
