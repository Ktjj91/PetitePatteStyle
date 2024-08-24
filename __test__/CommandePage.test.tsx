import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import OrderStripe from "@/components/ui/OrderStripe";
import { Session } from 'next-auth';

// Données JSON simulées
const mockOrdersData = [
    {
        "totalAmount": 70,
        "items": [
            {
                "id": 17,
                "name": "Harnais vert a fleur",
                "description": "Avec ce harnais vert à fleurs, votre chien ne passera pas inaperçu. Parfait pour les sorties au parc, les randonnées ou simplement les promenades quotidiennes, ce harnais est l’accessoire idéal pour allier style et praticité. Offrez à votre fidèle compagnon un look rafraîchissant et printanier tout en assurant sa sécurité et son confort.",
                "quantity": 5,
                "price": 1400,
                "orderId": 14,
                "image": "/items/harnais-vert.jpeg"
            }
        ],
        "id": 14
    },
    // Ajoutez d'autres commandes si nécessaire
];

// Mock pour la fonction fetch globale
vi.stubGlobal('fetch', async (url:any) => {
    if (url.includes('/api/order')) {
        return {
            json: async () => ({ data: mockOrdersData })
        };
    }
    throw new Error('URL non reconnue');
});

describe('OrderStripe Component', () => {
    it('renders orders when data is fetched', async () => {
        const mockSession: Session = { user: { id: 'mockUserId' } } as any;

        // Render le composant
        render(<OrderStripe session={mockSession} />);

        // Vérifiez le rendu de la page
        await waitFor(() => {
            expect(screen.getByText('Historique des commande')).toBeDefined();

            // Vérifiez les éléments pour chaque commande dans les données
            mockOrdersData.forEach(order => {
                order.items.forEach(item => {
                    expect(screen.getByText(item.name)).toBeDefined();
                    expect(screen.getByText(new RegExp(`${item.price / 100}€`))).toBeDefined();
                    expect(screen.getByText(new RegExp(`${order.totalAmount}€`))).toBeDefined();
                    expect(screen.getByAltText(item.name)).toBeDefined();
                });
            });
        });
    });
});
