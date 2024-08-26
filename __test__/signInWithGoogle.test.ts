import { describe, it, expect, vi } from 'vitest';
import { signInWithGoogle } from '@/actions/loginGoogle';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Mock de la fonction signIn provenant de next-auth
vi.mock('@/auth', () => ({
    signIn: vi.fn(),
}));

describe('signInWithGoogle', () => {
    it('calls signIn with Google provider and formData', async () => {
        const mockFormData = { test: 'data' };

        // Simuler une réponse réussie pour signIn
        (signIn as any).mockResolvedValue({ ok: true });

        const result = await signInWithGoogle(mockFormData);

        expect(signIn).toHaveBeenCalledWith('google', {
            redirectTo: '/dashboard/settings',
            formData: mockFormData,
        });

        expect(result).toBeUndefined();
    });


    it('returns a generic error for unknown auth errors', async () => {
        const mockFormData = { test: 'data' };

        (signIn as any).mockRejectedValue(new AuthError('UnknownError'));

        const result = await signInWithGoogle(mockFormData);

        expect(result).toEqual({ error: 'Something went wrong' });
    });

    it('throws error if it is not an AuthError', async () => {
        const mockFormData = { test: 'data' };

        (signIn as any).mockRejectedValue(new Error('Network error'));

        await expect(signInWithGoogle(mockFormData)).rejects.toThrow('Network error');
    });
});
