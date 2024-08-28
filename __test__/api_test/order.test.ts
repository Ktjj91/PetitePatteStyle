import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from "@/app/api/order/route";
import {NextRequest, NextResponse} from "next/server";
import { prisma } from "@/db/db";
import { auth } from "@/auth";

// Mock de prisma
vi.mock("@/db/db", () => ({
    prisma: {
        orderStripe: {
            findMany: vi.fn()
        }
    }
}));

// Mock de auth
vi.mock("@/auth", () => ({
    auth: vi.fn()
}));

// Mock de NextResponse
vi.mock('next/server', () => ({
    NextResponse: {
        json: vi.fn((data, {status}) => ({...data, status}))
    }
}));

describe('GET /api/orders', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return order data if authenticated and authorized', async () => {
        const mockSession = { user: { id: '1' } };
        const mockOrders = [
            { totalAmount: 100, items: [{ item: 'product1', quantity: 1 }], id: 'order1' }
        ];

        // @ts-ignore
        auth.mockResolvedValue(mockSession);
        // @ts-ignore
        prisma.orderStripe.findMany.mockResolvedValue(mockOrders);

        const mockRequest = {
            url: 'http://localhost/api/orders?id=1'
        } as unknown as NextRequest;

        const response = await GET(mockRequest);

        expect(auth).toHaveBeenCalled();
        expect(prisma.orderStripe.findMany).toHaveBeenCalled();
        expect(response.status).toBe(200);
        // @ts-ignore
        expect(response.data).toEqual(mockOrders);
    });





});
