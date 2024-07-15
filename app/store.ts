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
    setProducts(products:ProductType[]) {
        set({products})
    },
    setProduct(product:ProductType){
        set({product})
    }
}))))