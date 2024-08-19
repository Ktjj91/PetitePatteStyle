

interface EmailTemplateProps {
    message: string;
    name: string;
    subject: string;
    orderNumber:string
}

export default function EmailTemplate({message,name,subject,orderNumber} :EmailTemplateProps) {
    return (
        <div>
            <div>
             <p>Message de : {name}</p>
                <p>Sujet : {subject}</p>
                <p>Message : {message}</p>
            </div>

        </div>
    )
}
