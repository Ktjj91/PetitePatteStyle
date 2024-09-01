/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

export default function PolitiquePage() {
    return (
        <section className="p-3 max-w-[1000px] mx-auto">
            <h1 className="text-4xl text-center">Politique de confidentialité</h1>
            <h2 className="text-center">Petitepattestyle</h2>

            <h3 className="mt-3">ARTICLE 1 : PRÉAMBULE</h3>
            <p>La présente politique de confidentialité a pour but d’informer les utilisateurs du site :</p>
            <ul>
                <li>Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d’identifier un utilisateur. À ce titre, il peut s’agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive) ;</li>
                <li>Sur les droits dont ils disposent concernant ces données ;</li>
                <li>Sur la personne responsable du traitement des données à caractère personnel collectées et traitées ;</li>
                <li>Sur les destinataires de ces données personnelles ;</li>
                <li>Sur la politique du site en matière de cookies.</li>
            </ul>
            <p>Cette politique complète les mentions légales et les Conditions Générales d’Utilisation consultables par les utilisateurs à l’adresse suivante :
                <Link href="/cgu" className="text-blue-500 hover:underline" > Conditions Générales d’utilisation</Link><br/>

                <Link href="/mt"   className="text-blue-500 hover:underline"> mentions Légales</Link>
            </p>

            <h3 className="mt-3">ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES PERSONNELLES</h3>
            <p>Conformément à l’article 5 du Règlement européen 2016/679, les données à caractère personnel sont :</p>
            <ul>
                <li>Traitées de manière licite, loyale et transparente au regard de la personne concernée ;</li>
                <li>Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités ;</li>
                <li>Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ;</li>
                <li>Exactes et, si nécessaire, tenues à jour. Toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder ;</li>
                <li>Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ;</li>
                <li>Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées.</li>
            </ul>
            <p>Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :</p>
            <ul>
                <li>La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</li>
                <li>Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;</li>
                <li>Le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;</li>
                <li>Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;</li>
                <li>Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;</li>
                <li>Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.</li>
            </ul>
            <p><em>Modèle réalisé sur LegalPlace.fr</em></p>

            <h3 className="mt-3">ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE</h3>

            <h4  className="mt-3">Article 3.1 : Données collectées</h4>
            <p>Les données personnelles collectées dans le cadre de notre activité sont les suivantes :</p>
            <ul>
                <li>nom</li>
                <li>prenom</li>
                <li>adresse mail</li>
            </ul>
            <p>La collecte et le traitement de ces données répond à la (aux) finalité(s) suivante(s) :</p>
            <p>envoie des colis</p>
            <p>exemple : gestion de contrat, gestion de l’espace client, suivi de la qualité des services, envoi de newsletter, etc.</p>

            <h4  className="mt-3">Article 3.2 : Mode de collecte des données</h4>
            <p>Lorsque vous utilisez notre site, sont automatiquement collectées les données suivantes :</p>
            <ul>
                <li>nom</li>
                <li>prenom</li>
                <li>adresse mail</li>
            </ul>
            <p>D’autres données personnelles sont collectées lorsque vous effectuez les opérations suivantes sur la plateforme :</p>
            <p><em>Modèle réalisé sur LegalPlace.fr</em></p>
            <p>Elles sont conservées par le responsable du traitement dans des conditions raisonnables de sécurité, pour une durée de : 1 ans</p>
            <p>La société est susceptible de conserver certaines données à caractère personnel au-delà des délais annoncés ci-dessus afin de remplir ses obligations légales ou réglementaires.</p>

            <h4  className="mt-3">Article 3.3 : Hébergement des données</h4>
            <p>Le site https://petitepattestyle.com est hébergé par : GOOGLE CLOUD PLATFORM</p>
            <p>[AUTO ENTREPRISE]
               404 alée du dragon
               kingsley@petitepattestyle.com</p>

            <h3  className="mt-3">ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA PROTECTION DES DONNÉES</h3>

            <h4  className="mt-3">Article 4.1 : Le responsable du traitement des données</h4>
            <p>Les données à caractère personnelles sont collectées par [raison ou dénomination sociale de l’entreprise], AUTO_ENTREPRISE au capital de O€, dont le numéro d’immatriculation est KIHDUJDOLZD].</p>
            <p>Le responsable du traitement des données à caractère personnel peut être contacté de la manière suivante :</p>
            <p>Par courrier à l’adresse : 404 allée du dragon Evry-courcouronnes 91000 ;
                Par téléphone, au 0655434356;
                Par mail : kingsley@petitepattestyle.com</p>

            <h4  className="mt-3">Article 4.2 : Le délégué à la protection des données</h4>
            <p>Le délégué à la protection des données de l’entreprise ou du responsable est :</p>
            <p>Thomas Kingsley  404 allée du dragon Evry-courcouronnes 91000,  kingsley@petitepattestyle.com</p>
            <p>Si vous estimez, après nous avoir contactés, que vos droits “Informatique et Libertés”, ne sont pas respectés, vous pouvez adresser une information à la CNIL.</p>

            <h3  className="mt-3">ARTICLE 5 : LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DES DONNÉES</h3>
            <p>Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :</p>
            <ul>
                <li>Droit d’accès, de rectification et droit à l’effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;</li>
                <li>Droit à la portabilité des données (article 20 du RGPD) ;</li>
                <li>Droit à la limitation (article 18 du RGPD) et à l’opposition du traitement des données (article 21 du RGPD) ;</li>
                <li>Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ;</li>
                <li>Droit de déterminer le sort des données après la mort ;</li>
                <li>Droit de saisir l’autorité de contrôle compétente (article 77 du RGPD).</li>
            </ul>
            <p>Pour exercer vos droits, veuillez adresser votre courrier à  par mail à kingsley@petitepattestyle.com</p>
            <p>Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d’espace personnel ou d’abonné.</p>
            <p>Consultez le site cnil.fr pour plus d’informations sur vos droits.</p>
            <p><em>Modèle réalisé sur LegalPlace.fr</em></p>

            <h3  className="mt-3">ARTICLE 6 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ</h3>
            <p>L’éditeur du site petitepattestyle se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur.</p>
            <p>Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat.</p>
            <p>L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement.</p>
            <p>La présente politique, éditée le 29/08/2024, a été mise à jour le 15/08/2024.</p>
            <p><em>Modèle réalisé sur LegalPlace.fr</em></p>
        </section>
    )
}
