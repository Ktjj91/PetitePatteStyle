import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page'
import Collection  from "@/components/ui/Collection";
import Galerie  from '@/components/ui/Galerie';

describe('HomePage test rendering',() => {
    it("should fetch data from API successfully", async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            if (!response.ok) {
                throw new Error('API request failed');
            }
            const data = await response.json();
            expect(data).toBeDefined();
        } catch (error) {
            console.error('API Error:', error);
        }
    })

    it("should render Collection component correctly",() => {
        render(<Home />)

    })
    it("should render Collection component correctly", () => {
        render(<Collection />)

    })

    it("should render Galerie component correctly", () => {
        render(<Galerie />)

    })

})






