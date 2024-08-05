import {create} from "zustand";
import {combine} from "zustand/middleware";
import {ProductType} from "@/types/ProductType";
import {StoreApi, UseBoundStore} from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}

export const useProductStore = createSelectors(create(combine({
    products: [] as ProductType[],
    product: {} as ProductType
}, (set) => ({
    setProducts(products: ProductType[]) {
        set({products})
    },
    setProduct(product: ProductType) {
        set({product})
    },
}))))

export const useCartProduct = createSelectors(create(combine({
        products: [] as ProductType[],
    }, (set) => ({
        setProducts(products: ProductType[]) {
            set({products})
        },
        addToCart(product: ProductType) {
            set((state) => {
                const existingProductIndex = state.products.findIndex((p) => p.id == product.id);
                if (existingProductIndex !== -1) {
                    const updateProducts = [...state.products];
                    updateProducts[existingProductIndex] = {
                        ...updateProducts[existingProductIndex],
                        quantity: updateProducts[existingProductIndex].quantity + product.quantity
                    };
                    return {products: updateProducts}
                } else {
                    return {products: [...state.products, product]};
                }
            })
        },
        decrementQuantity(productId: number) {
            set((state) => {
                const updateProducts = state.products.map((product) => {
                    if (product.id === productId) {
                        if (product.quantity > 1) {
                            return {...product,quantity:product.quantity - 1}
                        } else {
                            return null;
                        }
                    }
                    return product;

                }).filter(product => product !== null);
                return {products: updateProducts as ProductType[]};

            })
        },
        incrementQuantity(productId: number) {
            set((state) => {
                const updateProducts = state.products.map((product) => {
                    if (product.id === productId) {
                        return {...product, quantity: product.quantity + 1}
                    }
                    return product;
                });
                return {products: updateProducts as ProductType[]};
            })
        },
        removeFromCart(productId: number) {
            set((state) => {
                const updatedProducts = state.products.filter((product) => product.id !== productId);
                return {products: updatedProducts};
            })
        }
    })
)))