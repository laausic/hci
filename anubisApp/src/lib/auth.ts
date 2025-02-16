import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { user} from "@/db/schema";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user,
        },
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [ 
        twoFactor() 
    ] 
});
