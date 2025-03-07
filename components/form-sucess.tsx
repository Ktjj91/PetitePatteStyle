import { Check } from 'lucide-react';

interface FormSucessProps {
    message?:string
}
export default function FormSucess({message}: FormSucessProps) {

    if(!message) return null;
    return (
        <div className="bg-emerald-500/15  p-3 rounded flex  items-center gap-x-2 text-sm text-emerald-500">
            <Check className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
}
