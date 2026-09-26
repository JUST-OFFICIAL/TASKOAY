// Task~oay Supabase connection

import { createClient } from 
"@supabase/supabase-js";

const SUPABASE_URL = 
"https://nsdakxedudousbqmurru.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = 
"sb_publishable_rhU-BGFklKctJneiWGP22A_eYvlhhnH";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

window.taskoaySupabase = supabase;
