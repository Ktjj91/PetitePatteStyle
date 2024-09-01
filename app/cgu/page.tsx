/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Page() {
    return (
        <div className="max-w-[1000px] mx-auto mt-3">
            <h1 className="text-center text-4xl mt-4">Conditions Générales d'Utilisation</h1>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">1. Objet</h2>
                <p>
                    Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs (ci-après "Utilisateur(s)") peuvent accéder et utiliser le site [Nom du site] (ci-après "le Site").
                </p>

                <h2 className="text-2xl font-bold mt-4">2. Acceptation des CGU</h2>
                <p>
                    En accédant et en utilisant le Site, l'Utilisateur reconnaît avoir pris connaissance des présentes CGU et accepte de s'y conformer sans réserve. Si l'Utilisateur ne souhaite pas accepter ces CGU, il est prié de ne pas utiliser le Site.
                </p>

                <h2 className="text-2xl font-bold mt-4">3. Accès au site</h2>
                <p>
                    Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site, que ce soit les frais matériels, logiciels ou d'accès à Internet, sont exclusivement à la charge de l'Utilisateur.
                </p>
                <p>
                    [Nom de votre entreprise] met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site, mais n'est tenu à aucune obligation d'y parvenir. [Nom de votre entreprise] ne saurait, en outre, être tenu responsable de tout dysfonctionnement du réseau ou des serveurs ou de tout autre événement échappant à son contrôle, qui empêcherait ou dégraderait l'accès au Site.
                </p>

                <h2 className="text-2xl font-bold mt-4">4. Utilisation du site</h2>
                <p>
                    L'Utilisateur s'engage à utiliser le Site de manière conforme à la loi, aux présentes CGU, ainsi qu'aux conditions particulières applicables à certains services du Site. L'Utilisateur s'interdit notamment de :
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li>Utiliser le Site de manière frauduleuse ou illégale;</li>
                    <li>Porter atteinte à l'ordre public et aux bonnes mœurs;</li>
                    <li>Diffuser du contenu illégal ou préjudiciable à travers le Site;</li>
                    <li>Porter atteinte aux droits de propriété intellectuelle de tiers;</li>
                    <li>Altérer le fonctionnement du Site ou accéder à des données non autorisées.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-4">5. Propriété intellectuelle</h2>
                <p>
                    Tous les contenus présents sur le Site, y compris, sans s'y limiter, les textes, images, graphismes, logos, icônes, sons, logiciels et bases de données, sont la propriété exclusive de [Nom de votre entreprise] ou de ses partenaires et sont protégés par les lois en vigueur sur la propriété intellectuelle.
                </p>
                <p>
                    Toute reproduction, représentation, modification, distribution, ou exploitation non autorisée de ces contenus est strictement interdite et peut entraîner des poursuites judiciaires.
                </p>

                <h2 className="text-2xl font-bold mt-4">6. Données personnelles</h2>
                <p>
                    [Nom de votre entreprise] s'engage à respecter la vie privée de l'Utilisateur et à protéger ses données personnelles conformément aux lois applicables. Pour plus d'informations, veuillez consulter notre <a className="text-blue-500 hover:underline" href="/politique">Politique de Confidentialité</a>.
                </p>

                <h2 className="text-2xl font-bold mt-4">7. Limitation de responsabilité</h2>
                <p>
                    Petitepattestyle met tout en œuvre pour fournir des informations fiables et actualisées sur le Site. Cependant, elle ne garantit pas l'exactitude, la complétude, ou la pertinence des informations diffusées sur le Site. En conséquence, l'utilisation des informations et contenus disponibles sur l'ensemble du Site ne saurait en aucun cas engager la responsabilité de Petitepattestyle.
                </p>
                <p>
                    L'Utilisateur est seul responsable de l'utilisation qu'il fait du Site et des services accessibles à partir du Site. [Nom de votre entreprise] ne pourra en aucun cas être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation du Site ou de l'impossibilité d'y accéder.
                </p>

                <h2 className="text-2xl font-bold mt-4">8. Liens hypertextes</h2>
                <p>
                    Le Site peut contenir des liens hypertextes vers d'autres sites internet gérés par des tiers.Petitepattestyle n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur fonctionnement.
                </p>
                <p>
                    L'insertion de ces liens ne signifie pas que Petitepattestyle approuve les éléments contenus sur ces sites. L'Utilisateur est seul responsable de son accès à ces sites tiers.
                </p>

                <h2 className="text-2xl font-bold mt-4">9. Modification des CGU</h2>
                <p>
                    [Nom de votre entreprise] se réserve le droit de modifier à tout moment les présentes CGU, afin de les adapter aux évolutions du Site et/ou de son exploitation. Les nouvelles CGU seront portées à la connaissance des Utilisateurs par leur publication en ligne et seront applicables immédiatement.
                </p>

                <h2 className="text-2xl font-bold mt-4">10. Droit applicable et juridiction compétente</h2>
                <p>
                    Les présentes CGU sont régies par le droit [du pays applicable]. En cas de litige relatif à l'application, l'interprétation ou l'exécution des présentes CGU, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux [du ressort du siège social de l'entreprise] seront seuls compétents pour connaître du litige.
                </p>

                <h2 className="text-2xl font-bold mt-4">11. Contact</h2>
                <p className="mb-3">
                    Pour toute question concernant ces CGU ou le Site, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:sav@petitepattestyle.com">sav@petitepattestyle.com</a>
                </p>
            </div>
        </div>
    )
}
