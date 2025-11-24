import {validateGUID} from './validators';
// Jest provides 'expect' globally; no import needed.

// Tests for validateGUID function
describe('validateGUID', () => {
    it('should return true for a valid GUID', () => {
        const validGUID = '123e4567-e89b-12d3-a456-426614174000';
        expect(validateGUID(validGUID)).toBe(true);
    });

    it('should return false for an invalid GUID', () => {
        const invalidGUIDs = [
            '123e4567-e89b-12d3-a456-42661417400Z', // Invalid character
            '123e4567-e89b-12d3-a456-42661417400',  // Too short
            '123e4567e89b12d3a456426614174000',     // Missing hyphens
            'g23e4567-e89b-12d3-a456-426614174000'  // Invalid character at start
        ];

        invalidGUIDs.forEach(guid => {
            expect(validateGUID(guid)).toBe(false);
        });
    });
});

// Tests for validateIPv6 function
import {validateIPv6} from './validators';

describe('validateIPv6', () => {
    it('should return true for a valid IPv6 address', () => {
        const validIPv6Addresses = [
            '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
            '2001:db8:85a3::8a2e:370:7334',
            '::1',
            'fe80::1ff:fe23:4567:890a'
        ];

        validIPv6Addresses.forEach(ipv6 => {
            expect(validateIPv6(ipv6)).toBe(true);
        });
    });

    it('should return false for an invalid IPv6 address', () => {
        const invalidIPv6Addresses = [
            '2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234', // Too many segments
            '2001:db8:85a3:8a2e:370:7334',                 // Too few segments
            '12345::1',                                    // Segment too long
            '2001:db8:85a3::8a2e::7334'                    // Double ::
        ];

        invalidIPv6Addresses.forEach(ipv6 => {
            expect(validateIPv6(ipv6)).toBe(false);
        });
    });
});