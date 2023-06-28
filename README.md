<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-js-alert&background=tiles&project=%20" alt="solid-js-alert">
</p>

# solid-js-alert

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Simple "dialog" element based "modal" component for Solid-js

## Quick start

### Installation:

```bash
npm i solid-js-alert
# or
yarn add solid-js-alert
# or
pnpm add solid-js-alert
```

### Examples:

```tsx
import { Alert } from 'solid-js-alert';
// ...
```

### User guide:

The `Alert` component has all the attributes that `HTMLDivElement` has, except for `...`.

#### Props

| Prop name                    | Description                               | Default value | Example value                                  |
| ---------------------------- | ----------------------------------------- | ------------- | ---------------------------------------------- |
| shouldCloseOnBackgroundClick | Allow to  modal on background click. | true          | false                                          |
| onOpen                       | Callback fired the modal is opened.       | n/a           | `(event) => console.log('open event:', event)` |
