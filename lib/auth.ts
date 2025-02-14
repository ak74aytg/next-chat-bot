import { cookies } from "next/headers";

export const getJwt = async (): Promise<string | null> => {
    return (await cookies()).get("jwt")?.value || null;
};

export const isAuthenticated = (): boolean => {
    return !!getJwt();
};
