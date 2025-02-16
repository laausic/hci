import { createClient } from "@supabase/supabase-js";

// Get environment variables (Ensure these are set in .env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const authClient = supabase.auth; // This exposes authentication functions
