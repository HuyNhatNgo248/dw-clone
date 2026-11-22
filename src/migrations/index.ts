import * as migration_20250408_101720 from './20250408_101720';
import * as migration_20261122_064141_payload_3_94_upgrade from './20261122_064141_payload_3_94_upgrade';

export const migrations = [
  {
    up: migration_20250408_101720.up,
    down: migration_20250408_101720.down,
    name: '20250408_101720',
  },
  {
    up: migration_20261122_064141_payload_3_94_upgrade.up,
    down: migration_20261122_064141_payload_3_94_upgrade.down,
    name: '20261122_064141_payload_3_94_upgrade'
  },
];
