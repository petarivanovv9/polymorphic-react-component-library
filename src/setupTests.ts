import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import ResizeObserver from 'resize-observer-polyfill';

// A polyfill for the Resize Observer API
global.ResizeObserver = ResizeObserver;

afterEach(() => cleanup());
