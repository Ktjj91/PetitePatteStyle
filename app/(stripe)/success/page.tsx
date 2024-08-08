"use client"

import React, {useEffect, useState} from 'react'
import {useSearchParams} from "next/navigation";

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [customerData, setCustomerData] = useState<any>(null);
    const fetchSuccess = async () => {
        try {
            const response = await fetch(`api/success?token=${token}`)
            const data = await response.json();
            setCustomerData(data);
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        if(token){
            fetchSuccess();
        }

    }, [token]);

    if(!token){
        return <div>Chargement...</div>
    }

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-3 text-center">
            <h1>✅Paiement Réussi !</h1>
            {customerData ? (
                <div>
                    <p>Merci pour votre achat</p>
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    )
}
