# Digital Silk Block Components

> A collection of components built to be used in the block editor.


## Overview

A collection of components built to be used in the block editor. These components do not include any build files and do not bundle the WordPress components. Therefore these need to be used in an environment where the [`Dependency Extraction Webpack Plugin`](https://www.npmjs.com/package/@wordpress/dependency-extraction-webpack-plugin) is used and the `import { component } from '@wordpress/package';` is supported. If your project is using [digitalsilk-toolkit](https://github.com/wpdigitalsilk/digitalsilk-toolkit), this is handled automatically.

## Installation

1. Run `npm install --save @digitalsilk/block-components` within your WordPress theme or plugin.
2. Within your block editor code, import the relevant component(s) e.g. `import { ContentPicker } from '@digitalsilk/block-components';`
3. We highly recommend you use [digitalsilk-toolkit](https://github.com/wpdigitalsilk/digitalsilk-toolkit) to build your block files as it handles dependency extraction for you.
