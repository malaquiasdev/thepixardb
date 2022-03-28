import { findMovies } from '../service';
import * as service from '../repository';

const mock = [
  {
    id: 'MV_THE_CAT_RETURNS',
    language: 'EN-US',
    adult: false,
    updateAt: '2022-03-03T23:34:57.554Z',
    originalLanguage: 'ja',
    runtime: 75,
    budget: 0,
    releaseYear: '2002',
    posters: [
      {
        width: 2000,
        url: 'http://image.tmdb.org/t/p/original//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 3000,
      },
      {
        width: 2000,
        url: 'http://image.tmdb.org/t/p/original//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 3000,
      },
      {
        width: 1000,
        url: 'http://image.tmdb.org/t/p/original//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 1500,
      },
      {
        width: 2000,
        url: 'http://image.tmdb.org/t/p/original//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 3000,
      },
      {
        width: 2000,
        url: 'http://image.tmdb.org/t/p/original//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 3000,
      },
      {
        width: 1000,
        url: 'http://image.tmdb.org/t/p/original//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 1500,
      },
      {
        width: 1000,
        url: 'http://image.tmdb.org/t/p/original//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 1500,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 750,
      },
      {
        width: 500,
        url: 'http://image.tmdb.org/t/p/w500//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 750,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 138,
      },
      {
        width: 92,
        url: 'http://image.tmdb.org/t/p/w92//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 138,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 231,
      },
      {
        width: 154,
        url: 'http://image.tmdb.org/t/p/w154//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 231,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 278,
      },
      {
        width: 186,
        url: 'http://image.tmdb.org/t/p/w185//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 278,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 513,
      },
      {
        width: 342,
        url: 'http://image.tmdb.org/t/p/w342//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 513,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//pqyY7IEWkCWNZ7EuRStQaJITEta.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//avPMO5cnaGHgLaNiAIhy33WoQLm.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//XF05e3M5INIluZDIf9uZy1Pc8Z.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//oBF7XfJvPpJa5qT2vyzwB2bQw4l.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//rG8dKOFdIsZJvmOCOscJPCLyXyC.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//bcknER7DMd1e6aHQZBXGdfGWJmk.jpg',
        height: 1170,
      },
      {
        width: 780,
        url: 'http://image.tmdb.org/t/p/w780//iGa5T4jbuZkH14rJyEl52kbZ6N2.jpg',
        height: 1170,
      },
    ],
    themoviedbId: 15370,
    revenue: 54016370,
    createAt: '2022-03-03T23:34:57.554Z',
    imdbid: 'tt0347618',
    description: "Young Haru rescues a cat from being run over, but soon learns it's no ordinary feline; it happens to be the Prince of the Cats.",
    genres: 'ADVENTURE;FANTASY;ANIMATION;DRAMA;FAMILY',
    title: 'The Cat Returns',
  },
];

describe('# Movies - service', () => {
  test('## findMovies - should execute findMoviesBy and return MovieDTO as array with success', async () => {
    const spy = jest.spyOn(service, 'findMoviesBy').mockResolvedValue(mock);
    const response = await findMovies('movies', 'en');
    expect(spy).toHaveBeenCalledWith('movies', 'en', undefined);
    expect(response).toMatchSnapshot();
  });
});
