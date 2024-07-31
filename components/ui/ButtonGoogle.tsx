import {Button} from "@/components/ui/button";
import {signIn} from "@/auth";
import Image from "next/image";
import GoogleLogo from "@/public/google.png"
export default  function ButtonGoogle() {

    return (
        <form action={async () => {
            await signIn('google',{redirectTo:'/dashboard/settings'});
        }}>
            <Button type="submit" variant="outline">
                <Image className="mr-3" width={20} src={GoogleLogo} alt="Google logo"/>
                Continuer avec Google
            </Button>
        </form>

    )
}
