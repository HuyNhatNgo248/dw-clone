import * as migration_20250408_101720 from './20250408_101720';

export const migrations = [
  {
    up: migration_20250408_101720.up,
    down: migration_20250408_101720.down,
    name: '20250408_101720'
  },
];
