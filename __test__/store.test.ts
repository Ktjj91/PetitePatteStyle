import { describe, it, expect } from 'vitest';
import { useCartProduct } from "@/app/store";
import { ProductType } from '@/types/ProductType';
import {renderHook, act,} from '@testing-library/react';


describe('useCartProduct', () => {
    it('should add a product to the cart', () => {
        const { result } = renderHook(() => useCartProduct((state) => state));

        const product: ProductType =  { id:1, name: 'Product 1', quantity: 1,description:"ddd",image:"/ddddd",price:"1",size:"m",categoriesId:1,is_available:true };

        act(() => {
            result.current.addToCart(product);
        });

        expect(result.current.products).toEqual([product]);
    });

    it('should remove a product from the cart', () => {
        const product: ProductType =  { id:1, name: 'Product 1', quantity: 1,description:"ddd",image:"/ddddd",price:"1",size:"m",categoriesId:1,is_available:true };
        const { result } = renderHook(() => useCartProduct((state) => state));

        act(() => {
            result.current.addToCart(product);
            result.current.removeFromCart(1);
        });

        expect(result.current.products).toEqual([]);
    });
});



//
// describe('Product Store', () => {
//     it('should set and get products correctly', () => {
//         const { result } = renderHook(() => useProductStore(state => state));
//
//         const product: ProductType = {
//             id: 1,
//             name: 'Product 1',
//             quantity: 1,
//             description: 'ddd',
//             image: '/ddddd',
//             price: '1',
//             size: 'm',
//             categoriesId: 1,
//             is_available: true
//         };
//
//         act(() => {
//             result.current.setProducts([product]);
//         });
//
//         expect(result.current.products).toEqual([product]);
//     });
//
//     it('should set and get a single product correctly', () => {
//         const { result } = renderHook(() => useProductStore(state => state));
//
//         const product: ProductType = {
//             id: 1,
//             name: 'Product 1',
//             quantity: 1,
//             description: 'ddd',
//             image: '/ddddd',
//             price: '1',
//             size: 'm',
//             categoriesId: 1,
//             is_available: true
//         };
//
//         act(() => {
//             result.current.setProduct(product);
//         });
//
//         expect(result.current.product).toEqual(product);
//     });
// });
//
// describe('Cart Product Store', () => {
//     it('should add a product to the cart', () => {
//         const { result } = renderHook(() => useCartProduct(state => state));
//
//         const product: ProductType = {
//             id: 1,
//             name: 'Product 1',
//             quantity: 1,
//             description: 'ddd',
//             image: '/ddddd',
//             price: '1',
//             size: 'm',
//             categoriesId: 1,
//             is_available: true
//         };
//
//         act(() => {
//             result.current.addToCart(product);
//         });
//
//         expect(result.current.products).toEqual([product]);
//     });
//
//     it('should remove a product from the cart', () => {
//         const product: ProductType = {
//             id: 1,
//             name: 'Product 1',
//             quantity: 1,
//             description: 'ddd',
//             image: '/ddddd',
//             price: '1',
//             size: 'm',
//             categoriesId: 1,
//             is_available: true
//         };
//
//         const { result } = renderHook(() => useCartProduct(state => state));
//
//         act(() => {
//             result.current.addToCart(product);
//         });
//
//         act(() => {
//             result.current.removeFromCart(1);
//         });
//
//         expect(result.current.products).toEqual([]);
//     });
// });






