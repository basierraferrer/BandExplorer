import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest';

// Start MSW before all tests and reset after each
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());