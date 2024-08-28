import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from "@/app/api/stripe/route"; // Adapte le chemin d'importation
import { stripe } from "@/stripe";
import { prisma } from "@/db/db";
import { auth } from "@/auth";
import {NextRequest} from "next/server";

vi.mock("@/stripe", () => ({
    stripe: {
        checkout: {
            sessions: {
                create: vi.fn()
            }
        }
    }
}));
vi.mock("@/db/db", () => ({
    prisma: {
        orderStripe: {
            create: vi.fn()
        },
        products: {
            update: vi.fn()
        }
    }
}));
vi.mock("@/auth", () => ({
    auth: vi.fn((fn) => async (req:any) => {
        if (!req.auth) return { json: () => ({ message: "Not authenticated", status: 401 }) };
        return fn(req);
    })
}));
vi.mock('next/server', () => ({
    NextResponse: {
        json: vi.fn((data, {status}) => ({...data, status}))
    }
}));


describe('POST /api/checkout', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should create a checkout session and order if authenticated', async () => {
        const mockRequest = {
            auth: true,
            json: async () => ({
                items: [
                    { name: "Product 1", price: 10, quantity: 2, description: "Description 1" }
                ],
                stripeCustomerId: "cust_123"
            })
        } as unknown as NextRequest;

        // @ts-ignore
        stripe.checkout.sessions.create.mockResolvedValue({
            id: "session_123",
            payment_intent: "pi_123",
            url: "http://localhost:3000/checkout_success"
        });

        // @ts-ignore
        const response = await POST(mockRequest);

        expect(stripe.checkout.sessions.create).toHaveBeenCalled();
        expect(prisma.orderStripe.create).toHaveBeenCalled();
        // @ts-ignore
        expect(response.status).toBe(200);
        // @ts-ignore
        expect(response.url).toBe("http://localhost:3000/checkout_success");
    });


});


