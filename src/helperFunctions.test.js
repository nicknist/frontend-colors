import { randomColor, getFiveRandomColors } from './helperFunctions';

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
  })

})
