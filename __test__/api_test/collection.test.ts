import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from "@/app/api/collection/[id]/route";
import { NextResponse } from "next/server";
import { prisma } from "@/db/db";

vi.mock("@/db/db", () => ({
    prisma: {
        products: {
            findMany: vi.fn()
        }
    }
}));

vi.mock('next/server', () => ({
    NextResponse: {
        json: vi.fn((data, {status}) => ({...data, status})),
        redirect: vi.fn(() => ({ status: 404 }))
    }
}));

describe('GET /api/collection/{id}', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return products by categoriesId and status 200', async () => {
        const mockProducts = [{
            "products": [
                // Tes produits mockés ici...
            ]
        }];
        // @ts-ignore
        prisma.products.findMany.mockResolvedValue(mockProducts);
        const mockRequest = { url: 'http://localhost/api/collection/1' } as unknown as Request;
        const params = { id: "1" };

        const response = await GET(mockRequest, {params});

        expect(response.status).toBe(200);
        // @ts-ignore
        expect(response.products).toEqual(mockProducts);
    });
});
