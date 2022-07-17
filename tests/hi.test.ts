import gx from '../src';

test('Returning a gm', () => {
	const mockTime = new Date();
	mockTime.setHours(8);
	mockTime.setMinutes(0);
	mockTime.setMilliseconds(0);

	expect(gx(mockTime)).toBe('gm');
});

test('Returning a ge', () => {
	const mockTime = new Date();
	mockTime.setHours(16);
	mockTime.setMinutes(0);
	mockTime.setMilliseconds(0);

	expect(gx(mockTime)).toBe('ge');
});

test('Returning a gn', () => {
	const mockTime = new Date();
	mockTime.setHours(22);
	mockTime.setMinutes(0);
	mockTime.setMilliseconds(0);

	expect(gx(mockTime)).toBe('gn');
});
