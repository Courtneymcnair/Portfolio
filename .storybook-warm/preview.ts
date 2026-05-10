import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/warm-system.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: '#FFE9D6' },
        { name: 'cream-bright', value: '#FFF1E0' },
        { name: 'cream-deep', value: '#F4DEC8' },
        { name: 'ink', value: '#2A0F08' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375)',
          styles: { width: '375px', height: '812px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768)',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop (1280)',
          styles: { width: '1280px', height: '900px' },
          type: 'desktop',
        },
        desktopWide: {
          name: 'Desktop Wide (1440)',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
      },
    },

    layout: 'fullscreen',

    nextjs: {
      appDirectory: true,
    },

    a11y: {
      test: 'todo',
    },
  },
  initialGlobals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export default preview;
