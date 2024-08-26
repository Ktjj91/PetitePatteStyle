import { describe, it, expect, vi } from 'vitest';
import { signInWithCredentials } from '@/actions/credentials';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Mock des dépendances externes
vi.mock('@/auth', () => ({
    signIn: vi.fn(),
}));

describe('signInWithCredentials', () => {
    it('calls signIn with valid credentials', async () => {
        const validValues = { email: 'john@example.com', password: 'password123' };

        (signIn as any).mockResolvedValue({ ok: true });

        const result = await signInWithCredentials(validValues);

        expect(signIn).toHaveBeenCalledWith('credentials', {
            email: 'john@example.com',
            password: 'password123',
            redirect: false,
        });

        expect(result).toBeUndefined();
    });



    it('returns a generic error for other auth errors', async () => {
        const validValues = { email: 'john@example.com', password: 'password123' };

        (signIn as any).mockRejectedValue(
            new AuthError('UnknownError', )
        );

        const result = await signInWithCredentials(validValues);

        expect(result).toEqual({ error: 'Something went wrong.' });
    });

    it('throws an error if not AuthError', async () => {
        const validValues = { email: 'john@example.com', password: 'password123' };

        (signIn as any).mockRejectedValue(new Error('Network error'));

        await expect(signInWithCredentials(validValues)).rejects.toThrow('Network error');
    });
});
