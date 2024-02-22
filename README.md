# Digital Silk Block Editor Components

A library of React components designed for use in the WordPress Block Editor.

## Installation

Install the package using npm:

```bash
npm install --save @digitalsilk/block-editor-components
```

--OR--

Install the package using yarn:

```bash
yarn add @digitalsilk/block-editor-components
```

## Usage

Import the desired component(s) into your theme or plugin block editor code. For example:

```js
import { Image, Video, MediaPicker } from '@digitalsilk/block-editor-components';
```

## Components

The library provides a set of React components designed for seamless integration into the WordPress Block Editor. These components offer a range of functionalities, including controls for elements and display options for media such as images, icons, and videos. Easily enhance your block editor experience with these versatile components.

#### Available Components

- [MediaPicker](components/media-picker/readme.md)
- Image
- Video

## Selectors

The library includes selectors that leverage the power of the `useSelect` hook from the `@wordpress/data` package. These selectors, such as getMedia, provide utilities for efficiently retrieving media details and resolution status from the WordPress core data store. Seamlessly integrate these selectors into your components to enhance data retrieval and state management within the block editor.

#### Available Selectors


