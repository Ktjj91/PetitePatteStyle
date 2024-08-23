import {render, screen, waitFor} from '@testing-library/react';
import TshirtPage from "@/app/(collection)/tshirt/TshirtPage";
import PullPage from "@/app/(collection)/pull/PullPage";
import {vi, describe, it, expect, beforeEach} from 'vitest';
import HarnaisPage from "@/app/(collection)/harnais/Harnais";

vi.mock('@/components/Card', () => ({
    __esModule: true,
    default: ({product}: { product: any }) => (
        <div>{product.name}</div>
    ),
}));

global.fetch = vi.fn();


describe('Collection Page', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });
    it('fetches and renders the T-shirt products correctly', async () => {
        const mockProducts = [
            {
                id: 1,
                name: 'T-shirt Test 1',
                description: 'Description of T-shirt Test 1',
                price: '19.99',
                image: 'tshirt1.jpg',
                quantity: 10,
                size: 'M',
                is_available: true,
                categoriesId: 2,
            },
            {
                id: 2,
                name: 'T-shirt Test 2',
                description: 'Description of T-shirt Test 2',
                price: '24.99',
                image: 'tshirt2.jpg',
                quantity: 5,
                size: 'L',
                is_available: true,
                categoriesId: 2,
            },
        ];

        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue({products: mockProducts}),
        };
        // @ts-ignore
        (global.fetch as unknown as vi.Mock).mockResolvedValue(mockResponse);


        render(<TshirtPage/>);

        // Vérifiez que fetch a été appelé avec la bonne URL
        expect(global.fetch).toHaveBeenCalledWith('api/collection/2');

        // Attendez que les produits soient rendus
        await waitFor(() => {
            // Vérifiez que les noms des T-shirts sont bien rendus
            expect(screen.getByText('T-shirt Test 1')).toBeDefined();
            expect(screen.getByText('T-shirt Test 2')).toBeDefined();
        });


    });

    it('fetches and renders the PullPage products correctly', async () => {
        const mockProducts = [
            {
                id: 1,
                name: 'Pull Test 1',
                description: 'Description of Pull Test 1',
                price: '19.99',
                image: 'pull.jpg',
                quantity: 10,
                size: 'M',
                is_available: true,
                categoriesId: 2,
            },
            {
                id: 2,
                name: 'Pull Test 2',
                description: 'P of Pull Test 2',
                price: '24.99',
                image: 'pull.jpg',
                quantity: 5,
                size: 'L',
                is_available: true,
                categoriesId: 2,
            },
        ];

        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue({products: mockProducts}),
        };
        // @ts-ignore
        (global.fetch as unknown as vi.Mock).mockResolvedValue(mockResponse);


        render(<PullPage/>);

        // Vérifiez que fetch a été appelé avec la bonne URL
        expect(global.fetch).toHaveBeenCalledWith('api/collection/1');

        // Attendez que les produits soient rendus
        await waitFor(() => {
            // Vérifiez que les noms des T-shirts sont bien rendus
            expect(screen.getByText('Pull Test 1')).toBeDefined();
            expect(screen.getByText('Pull Test 2')).toBeDefined();
        });


    });

    it('fetches and renders the Harnais page products correctly', async () => {
        const mockProducts = [
            {
                id: 1,
                name: 'Harnais Test 1',
                description: 'Description of Pull Test 1',
                price: '19.99',
                image: 'pull.jpg',
                quantity: 10,
                size: 'M',
                is_available: true,
                categoriesId: 2,
            },
            {
                id: 2,
                name: 'Harnais Test 2',
                description: 'P of Pull Test 2',
                price: '24.99',
                image: 'pull.jpg',
                quantity: 5,
                size: 'L',
                is_available: true,
                categoriesId: 2,
            },
        ];

        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue({products: mockProducts}),
        };
        // @ts-ignore
        (global.fetch as unknown as vi.Mock).mockResolvedValue(mockResponse);


        render(<HarnaisPage/>);

        // Vérifiez que fetch a été appelé avec la bonne URL
        expect(global.fetch).toHaveBeenCalledWith('api/collection/4');

        // Attendez que les produits soient rendus
        await waitFor(() => {
            // Vérifiez que les noms des T-shirts sont bien rendus
            expect(screen.getByText('Harnais Test 1')).toBeDefined();
            expect(screen.getByText('Harnais Test 2')).toBeDefined();
        });


    });
    it('fetches and renders the Collier page products correctly', async () => {
        const mockProducts = [
            {
                id: 1,
                name: 'Collier Test 1',
                description: 'Description of Pull Test 1',
                price: '19.99',
                image: 'pull.jpg',
                quantity: 10,
                size: 'M',
                is_available: true,
                categoriesId: 2,
            },
            {
                id: 2,
                name: 'Collier Test 2',
                description: 'P of Pull Test 2',
                price: '24.99',
                image: 'pull.jpg',
                quantity: 5,
                size: 'L',
                is_available: true,
                categoriesId: 2,
            },
        ];

        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue({products: mockProducts}),
        };
        // @ts-ignore
        (global.fetch as unknown as vi.Mock).mockResolvedValue(mockResponse);


        render(<HarnaisPage/>);

        // Vérifiez que fetch a été appelé avec la bonne URL
        expect(global.fetch).toHaveBeenCalledWith('api/collection/4');

        // Attendez que les produits soient rendus
        await waitFor(() => {
            // Vérifiez que les noms des T-shirts sont bien rendus
            expect(screen.getByText('Collier Test 1')).toBeDefined();
            expect(screen.getByText('Collier Test 2')).toBeDefined();
        });


    });

});

