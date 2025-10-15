// Supabase Configuration
// IMPORTANT: Replace these with your actual Supabase project credentials
// You can find these in your Supabase project settings under API

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL'; // e.g., 'https://xxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Your project's anon/public key

// Initialize Supabase client
const supabase = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Check if Supabase is configured
if (!supabase || SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL') {
    console.error('⚠️ Supabase is not configured. Please update js/config.js with your credentials.');
}