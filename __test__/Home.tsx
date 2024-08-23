import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Home from '../app/page';
import {ProductType} from "@/types/ProductType";

// Mock des composants
vi.mock('@/components/ui/Galerie', () => ({default: () => <div>Mocked Galerie</div>}));
vi.mock('@/components/ui/Header', () => ({default: () => <div>Mocked Header</div>}));
vi.mock('@/components/ui/Collection', () => ({default: () => <div>Mocked Collection</div>}));

// Mock du store Zustand
const mockSetProducts = vi.fn();
vi.mock('@/app/store', () => ({
    useProductStore: {
        use: {
            setProducts: () => mockSetProducts,
        },
    },
}));

// Mock de fetch
global.fetch = vi.fn();

describe('Home Component', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('renders the component and fetches data', async () => {
        const mockProducts: ProductType[] = [
            {
                id: 1,
                name: "Test Product",
                description: "This is a test product",
                price: "9.99",
                image: "test-image.jpg",
                quantity: 1,
                size: "M",
                is_available: true,
                categoriesId: 1
            }
        ];
        const mockResponse = {ok: true, json: () => Promise.resolve({products: mockProducts})};
        // @ts-ignore
        (global.fetch as unknown as vi.Mock).mockResolvedValue(mockResponse);

        render(<Home/>);

        // Vérifier que les composants sont rendus
        expect(screen.getByText('Mocked Header')).toBeDefined();
        expect(screen.getByText('Mocked Collection')).toBeDefined();
        expect(screen.getByText('Mocked Galerie')).toBeDefined();

        // Vérifier que fetch a été appelé avec la bonne URL
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/products');

        // Attendre que setProducts soit appelé avec les données mockées
        await waitFor(() => {
            expect(mockSetProducts).toHaveBeenCalledWith(mockProducts);
        });
    });

});