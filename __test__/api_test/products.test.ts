import { describe, it, expect, vi, beforeEach } from 'vitest';
// @ts-ignore
import { GET } from  "../../app/api/products/route"; // Modifie avec le chemin réel
import {prisma} from "@/db/db";

vi.mock("@/db/db", () => ({
    prisma: {
        products: {
            findMany: vi.fn()
        }
    }
}));

describe('GET /api/products', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return 6 products and status 200', async () => {
        // @ts-ignore
        const mockProducts = Array(6).fill().map((_, index) => ({ id: index, name: `Product ${index}`, price: index * 10 }));
        // @ts-ignore
        prisma.products.findMany.mockResolvedValue(mockProducts);

        // Création d'un objet Request mock
        const mockRequest = new Request('http://localhost/api/products');

        // Appel de la fonction GET
        const response = await GET(mockRequest);

        // Vérification de la réponse
        expect(response.status).toBe(200);
        const responseData = await response.json();
        expect(responseData.products).toHaveLength(6);
        expect(responseData.products).toEqual(mockProducts);
    });


});
