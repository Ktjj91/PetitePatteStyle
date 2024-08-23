import { render, screen, waitFor } from '@testing-library/react';
import PageProduct from '@/app/product/[id]/Product';
import {vi, describe, it, expect } from 'vitest';
import { ProductTypeId } from '@/types/ProductType';


vi.mock('@/app/store', () => ({
    useCartProduct: {
        use: {
            setProducts: vi.fn(),
            products: vi.fn(),
            addToCart: vi.fn(),
        },
    },
}));

describe('Composant Page', () => {
    const mockProduct: ProductTypeId = {
        id: 1,
        name: 'Produit Test',
        description: 'Description du produit test',
        price: '100', // Sans le symbole €
        image: '/test-image.jpg',
        quantity: 10,
        size: 'M',
        is_available: true,
        categoryId: 2,
    };

    it('rend correctement la page produit', async () => {
        render(<PageProduct product={mockProduct} />);
        const x =screen.getByText('Ajouter au panier');
        await waitFor(() => {
            expect(screen.getByText('Produit Test')).toBeTruthy();
            expect(screen.getByText('Description du produit test')).toBeTruthy();
            expect(screen.getByText(/100\s?€/)).toBeTruthy();
            expect(screen.getByText("Ajouter au panier")).toBeTruthy();

        });
    });
});
