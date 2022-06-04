import { formatNumber } from '../utils/formatNumber';

it('소수점 2째자리까지 구하고, 1000 단위마다 콤마', () => {
  expect(formatNumber(1000000.5678)).toBe('1,000,000.57');
});
