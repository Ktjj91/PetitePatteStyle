import { describe, it, expect, vi, beforeEach } from 'vitest';
// @ts-ignore
import {prisma} from "@/db/db";
import {GET} from "@/app/api/product/[id]/route"

vi.mock("@/db/db", () => ({
    prisma: {
        products: {
            findUnique: vi.fn()
        }
    }
}));


describe('GET /api/product/{id}', () => {
    beforeEach(() => {
        vi.clearAllMocks(); // Nettoie les mocks avant chaque test
    });

    it('should retrieve a product by ID and return status 200', async () => {
        const mockProduct = {
            id: 1,
            name: 'Product Name',
            description: 'Product Description',
            price: 100,
            quantity: 10,
            image: 'url_to_image',
            size: 'M',
            is_available: true,
            categoriesId: 1
        };

        // Simuler la réponse de findUnique
        // @ts-ignore
        prisma.products.findUnique.mockResolvedValue(mockProduct,{ params: { id: '1' } });

        // Créer un objet Request et Params mock
        const mockRequest = new Request('http://localhost/api/product/1');
        const mockParams = { params: { id: '1' } };

        // Appeler la fonction GET
        const response = await GET(mockRequest,{ params: { id: '1' } });

        // Vérifier la réponse
        expect(response.status).toBe(200);
        const responseData = await response.json();
        expect(responseData.product).toEqual(mockProduct);
    });


});
