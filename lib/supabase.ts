import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://othbqbfilaoutqndsgfv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aGJxYmZpbGFvdXRxbmRzZ2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjQzNDEsImV4cCI6MjA4MTA0MDM0MX0.pfm89-03a-UK8gSG5Unt56OsLRdaOBBT7NA2LXwWoMM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
