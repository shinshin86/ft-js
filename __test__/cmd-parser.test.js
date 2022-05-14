const { parse } = require('../cmd-parser');

describe('cmd-parser', () => {
  describe('help command', () => {
    test('help', () => {
      const args = ['help'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('help');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('-h', () => {
      const args = ['-h'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('-h');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('--help', () => {
      const args = ['--help'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('--help');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });
  });

  describe('version', () => {
    test('version', () => {
      const args = ['version'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('version');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('-v', () => {
      const args = ['-v'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('-v');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('--version', () => {
      const args = ['--version'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('--version');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });
  });

  describe('download', () => {
    test('download', () => {
      const args = ['download'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('download');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('download with address', () => {
      const args = ['download', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('download');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });

    test('download with invalid address option', () => {
      const args = ['download', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('download');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('download with invalid option(--json)', () => {
      const args = ['download', '--json', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('download');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });
  });

  describe('serve', () => {
    test('serve', () => {
      const args = ['serve'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('serve');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('serve with address', () => {
      const args = ['serve', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('serve');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });

    test('serve with invalid address option', () => {
      const args = ['serve', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('serve');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('serve with invalid option(--json)', () => {
      const args = ['serve', '--json', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('serve');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });
  });

  describe('list', () => {
    test('list', () => {
      const args = ['list'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('list with address', () => {
      const args = ['list', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });

    test('list with invalid address option', () => {
      const args = ['list', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('');
    });

    test('list with json option', () => {
      const args = ['list', '--json'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('--json');
      expect(parsedArgs.address).toBe('');
    });

    test('list with json option with address', () => {
      const args = ['list', '--json', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('--json');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });

    test('list with json option with address (invalid case 1)', () => {
      const args = ['list', '--json', 'aaa', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('--json');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });

    test('list with json option with address (invalid case 2)', () => {
      const args = ['list', 'aaa', '--json', '-a', '127.0.0.1'];
      const parsedArgs = parse(args);
      expect(parsedArgs.command).toBe('list');
      expect(parsedArgs.listOption).toBe('');
      expect(parsedArgs.address).toBe('127.0.0.1');
    });
  });
});
