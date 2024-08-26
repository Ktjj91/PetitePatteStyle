"use client"
import { useEffect } from 'react';

const AxeptioScript = () => {
    useEffect(() => {
        // Axeptio settings
        //@ts-ignore
        window.axeptioSettings = {
            clientId: "66cc916e20eb305e04aaeefe",
            cookiesVersion: "petitepattestyle-fr-EU",
            googleConsentMode: {
                default: {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    wait_for_update: 500
                }
            }
        };

        const script = document.createElement("script");
        script.src = "//static.axept.io/sdk.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default AxeptioScript;
