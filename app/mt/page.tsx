/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Page() {
    return (
        <div className="max-w-[1000px] mx-auto mt-3">
            <h1 className="text-center text-4xl mt-4">Mentions Légales</h1>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">1. Éditeur du site</h2>
                <p>
                    Le présent site, accessible à l’URL <a className="text-blue-500 hover:underline" href="https://petitpattestyle.com">https://petitpattestyle.com</a> (ci-après le "Site"), est édité par :
                </p>
                <p>
                    <strong>Petitepattestyle</strong> <br />
                    Société AUTO_ENTREPRISE au capital de 0€ <br />
                    Siège social : 404 allée du dragon, 91000 Evry-Courcouronnes <br />
                    Immatriculée au Registre du Commerce et des Sociétés sous le numéro : s38383H3UH3UB3U3 <br />
                    Numéro de TVA intracommunautaire : 8383 <br />
                    Directeur de la publication : Thomas Kingsley <br />
                    Contact : <a href="mailto:sav@petitepattestyle.com">sav@petitepattestyle.com</a>
                </p>

                <h2 className="text-2xl font-bold mt-4">2. Hébergement du site</h2>
                <p>
                    Le site est hébergé par : <br />
                    <strong>Google cloud platform</strong> <br />
                    Adresse : <a className="text-blue-500 hover:underline" href="https://cloud.google.com/ ">https://cloud.google.com/ </a><br />
                    Téléphone : [Numéro de téléphone] <br />
                    Site web : [URL du site de l'hébergeur]
                </p>

                <h2 className="text-2xl font-bold mt-4">3. Propriété intellectuelle</h2>
                <p>
                    Le Site et chacun des éléments qui le composent, notamment les textes, images, photographies, illustrations, logos, fichiers disponibles en téléchargement, sont protégés par les lois en vigueur sur la propriété intellectuelle et sont la propriété exclusive de Petitepattestyle, sauf mention contraire.
                </p>
                <p>
                    Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du Site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de Petitepattestyle.
                </p>

                <h2 className="text-2xl font-bold mt-4">4. Données personnelles</h2>
                <p>
                    Conformément à la loi  l'UE, vous disposez d'un droit d'accès, de rectification, de suppression, et d'opposition concernant vos données personnelles. Vous pouvez exercer ce droit en nous contactant via kingsley@petitepattestyle.com.
                </p>
                <p>
                    Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre <a className="text-blue-500 hover:underline" href="/politique">politique de confidentialité</a>.
                </p>

                <h2 className="text-2xl font-bold mt-4">5. Cookies</h2>
                <p>
                    Le Site peut collecter automatiquement des informations standard telles que des cookies. Vous avez la possibilité de refuser ces cookies en configurant votre navigateur, mais cela pourrait affecter votre expérience utilisateur sur le Site.
                </p>
                <p>
                    Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre <a className="text-blue-500 hover:underline" href="/politique">politique de cookies</a>.
                </p>

                <h2 className="text-2xl font-bold mt-4">6. Limitation de responsabilité</h2>
                <p>
                    [Nom de votre entreprise] ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du Site, y compris, mais sans s'y limiter, les inaccessibilités, pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
                </p>

                <h2 className="text-2xl font-bold mt-4">7. Droit applicable</h2>
                <p>
                    Les présentes mentions légales sont régies par la loi FR. En cas de litige, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux [du ressort du siège social de l'entreprise] seront seuls compétents pour connaître de ce litige.
                </p>

                <h2 className="text-2xl font-bold mt-4">8. Contact</h2>
                <p className="mb-3">
                    Pour toute question, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:sav@petitepattestyle.com">sav@petitepattestyle.com</a>
                </p>
            </div>
        </div>
    )
}
