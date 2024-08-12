import {prisma} from "@/db/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where:{email}
        })
        return user;
    } catch {
        return null;
    }
}

 export const linkAccount  = async function (userId:any, oauthAccount:any) {
    try {
        const existingAccount = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: oauthAccount.provider,
                    providerAccountId: oauthAccount.providerAccountId,
                },
            },
        });

        if (existingAccount) {
            return true;
        }
        const linkedAccount = await prisma.account.create({
            data: {
                userId: userId,
                type: oauthAccount.type,
                provider: oauthAccount.provider,
                providerAccountId: oauthAccount.providerAccountId,
                refresh_token: oauthAccount.refresh_token,
                access_token: oauthAccount.access_token,
                expires_at: oauthAccount.expires_at,
                token_type: oauthAccount.token_type,
                scope: oauthAccount.scope,
                id_token: oauthAccount.id_token,
                session_state: oauthAccount.session_state,
            },
        });
        return linkedAccount;
    } catch (error) {
        console.error('Erreur lors de la liaison du compte:', error);
        throw error;
    }
}
