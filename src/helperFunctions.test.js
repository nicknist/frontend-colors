import { randomColor, getFiveRandomColors, getPalettes, handleDeletePalette, handlePostProject, addPalette } from './helperFunctions';
import { getPalette, deletePalette, postProject, postPalette } from './apiCalls';
jest.mock('./apiCalls');

describe('randomColor', () => {
  it('should send back a random string hex code', () => {
    expect(randomColor().length).toBeLessThanOrEqual(7);
  });
})

describe('getFiveRandomColors', () => {
  it('should return five random unlocked colors if an empty array is the argument', () => {
    let colors = getFiveRandomColors([]);
    expect(colors[0].locked).toEqual(false);
    expect(colors[1].locked).toEqual(false);
    expect(colors[2].locked).toEqual(false);
    expect(colors[3].locked).toEqual(false);
    expect(colors[4].locked).toEqual(false);
  });

  it('should not change the color if it is locked', () => {
    let mockColors = [
      { color: 'blue', locked: false },
      { color: 'scott', locked: true },
      { color: 'white', locked: false },
      { color: 'fosterBlue', locked: true },
      { color: 'scottPurple', locked: false }
    ];
    let colors = getFiveRandomColors(mockColors);
    expect(colors[1].locked).toEqual(true);
    expect(colors[1].color).toEqual('scott');
    expect(colors[3].locked).toEqual(true);
    expect(colors[3].color).toEqual('fosterBlue');
  });

  it('should change the color if it is unlocked', () => {
    let mockColors = [
      { color: 'blue', locked: false },
      { color: 'scott', locked: true },
      { color: 'white', locked: false },
      { color: 'fosterBlue', locked: true },
      { color: 'scottPurple', locked: false }
    ];
    let colors = getFiveRandomColors(mockColors);
    expect(colors[0].locked).toEqual(false);
    expect(colors[0].color).not.toEqual('blue');
    expect(colors[2].locked).toEqual(false);
    expect(colors[2].color).not.toEqual('white');
  });
});

describe('getPalettes', () => {
  let mockPalettes;

  beforeEach(() => {
    mockPalettes = [
      { thing: 'waddup' },
      { thing2: 'waddup2' },
      { thing3: 'waddup3' }
    ];
    getPalette.mockImplementation((palette) => palette);
  });

  it('should call getPalette when ran', () => {
    getPalettes(mockPalettes);
    expect(getPalette).toHaveBeenCalled();
  });
});

describe('handleDeletePalette', () => {
  let mockName;
  let mockPalettes;
  let mockSetPalettes;

  beforeEach(() => {
    mockName = 'waddup2';
    mockPalettes = [
      { name: 'waddup', id: 1 },
      { name: 'waddup2', id: 2 },
      { name: 'waddup3', id: 3 }
    ];
    mockSetPalettes = jest.fn();
    deletePalette.mockImplementation(() => {});
  });

  it('should run deletePalette when called', async () => {
    await handleDeletePalette(mockName, mockPalettes, mockSetPalettes);
    expect(deletePalette).toHaveBeenCalled();
  });

  it('should run setPalettes when called', async () => {
    await handleDeletePalette(mockName, mockPalettes, mockSetPalettes);
    expect(mockSetPalettes).toHaveBeenCalled();
  });
});

describe('handlePostPalette', () => {
  let mockName;
  let mockPalettes;
  let mockSetPalettes;

  beforeEach(() => {
    mockName = 'Project Test';
    mockPalettes = [
      { name: 'waddup', id: 1 },
      { name: 'waddup2', id: 2 },
      { name: 'waddup3', id: 3 }
    ];
    mockSetPalettes = jest.fn();
    postProject.mockImplementation(() => {});
  });

  it('should run postProject when called', async () => {
    await handlePostProject(mockPalettes, mockSetPalettes, mockName);
    expect(postProject).toHaveBeenCalled();
  });

  it('should run setPalettes when called', async () => {
    await handlePostProject(mockPalettes, mockSetPalettes, mockName);
    expect(mockSetPalettes).toHaveBeenCalled();
  });

  it('should run the alert when palettes do not have a length of 3', async () => {
    window.alert = jest.fn();
    await handlePostProject([], mockSetPalettes, mockName);

    expect(window.alert).toHaveBeenCalled();
  });
});

describe('addPalette', () => {
  let mockName;
  let mockPalettes;
  let mockSetPalettes;
  let mockColors;

  beforeEach(() => {
    mockName = 'Project Test';
    mockPalettes = [
      { name: 'waddup', id: 1 },
      { name: 'waddup2', id: 2 }
    ];
    mockSetPalettes = jest.fn();
    mockColors = [
      { color: 'blue', locked: false },
      { color: 'scott', locked: true },
      { color: 'white', locked: false },
      { color: 'fosterBlue', locked: true },
      { color: 'scottPurple', locked: false }
    ];
    postPalette.mockImplementation((palette) => {
      return { ...palette, id: 1}
    });
  });

  it('should run postPalette when called', async () => {
    await addPalette(mockPalettes, mockSetPalettes, mockName, mockColors);
    expect(postPalette).toHaveBeenCalled();
  });

  it('should run setPalettes when called', async () => {
    await addPalette(mockPalettes, mockSetPalettes, mockName, mockColors);
    expect(mockSetPalettes).toHaveBeenCalled();
  });

  it('should run the alert when palettes have a length of 3', async () => {
    window.alert = jest.fn();
    await addPalette([1, 2, 3], mockSetPalettes, mockName, mockColors);

    expect(window.alert).toHaveBeenCalled();
  });
});
