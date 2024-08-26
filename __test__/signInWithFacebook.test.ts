import { describe, it, expect, vi } from 'vitest';
import {signInWitFacebook} from "@/actions/loginFacebook";

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Mock de la fonction signIn provenant de next-auth
vi.mock('@/auth', () => ({
    signIn: vi.fn(),
}));

describe('signInWithFacebook', () => {
    it('calls signIn with Facebook provider and formData', async () => {
        const mockFormData = { someField: 'someValue' };

        // Simuler une réponse réussie pour signIn
        (signIn as any).mockResolvedValue({ ok: true });

        const result = await signInWitFacebook(mockFormData);

        expect(signIn).toHaveBeenCalledWith('facebook', {
            redirectTo: '/dashboard/settings',
            formData: mockFormData,
        });

        // Vérifier qu'il n'y a pas d'erreur
        expect(result).toBeUndefined();
    });

    it('returns a generic error for unknown auth errors', async () => {
        const mockFormData = { someField: 'someValue' };

        // Simuler une autre erreur d'authentification
        (signIn as any).mockRejectedValue(new AuthError('UnknownError',));

        const result = await signInWitFacebook(mockFormData);

        expect(result).toEqual({ error: 'Something went wrong' });
    });

    it('throws an error if it is not an AuthError', async () => {
        const mockFormData = { someField: 'someValue' };

        // Simuler une erreur générique (non AuthError)
        (signIn as any).mockRejectedValue(new Error('Network error'));

        await expect(signInWitFacebook(mockFormData)).rejects.toThrow('Network error');
    });
});
