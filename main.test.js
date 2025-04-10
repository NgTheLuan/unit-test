import { classifyStudent } from './main'
describe('classifyStudent()', () => {
	test('should first', () => {
		const value = classifyStudent(-1)
		expect(value).toBe('Invalid mark')
	})
})
