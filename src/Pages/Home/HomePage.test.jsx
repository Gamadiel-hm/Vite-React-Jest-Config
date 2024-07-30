import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from './HomePage';
import { results } from '../../Mock/MockPage1';

describe('<HomePage />', () => {
  beforeEach(async () => {
    // eslint-disable-next-line no-undef
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: results
      })
    });

    await act(async () => {
      render(<HomePage />);
    });
  });

  afterEach(() => {
    // eslint-disable-next-line no-undef
    global.fetch.mockRestore();
  });

  test('Should be a render component', () => {
    expect(true).toBeTruthy();
  });

  test('Should be a render title is', () => {
    const title = screen.queryByText('Page render a characters Star Wars');
    expect(title).toBeInTheDocument();
  });

  test('Should be a call fetch Api', () => {
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?page=1'
    );
  });

  test('should be render loading for call fetch', () => {
    const titleLoading = screen.queryByText('Loading ...');
    expect(titleLoading).not.toBeInTheDocument();
  });

  test('should be a character luke Skywalker', async () => {
    // window.fetch.mockResolvedValueOnce({
    //   ok: true,
    //   json: async () => ({
    //     results: results
    //   })
    // });

    await waitFor(() => {
      expect(screen.queryByText('Luke Skywalker')).toBeInTheDocument();
    });
  });

  test('should be render all characters', async () => {
    await waitFor(() => {
      for (let i = 0; i < results.length; i++) {
        expect(screen.queryByText(results[i].name)).toBeInTheDocument();
      }
    });
  });
});
