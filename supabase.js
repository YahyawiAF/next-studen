import { createClient } from '@supabase/supabase-js';

// Charger les variables d'environnement
const supabaseUrl = "https://ptfjnohzgxoikiluhgjj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Zmpub2h6Z3hvaWtpbHVoZ2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzcxNzEsImV4cCI6MjA1NjMxMzE3MX0.iuRucPS13x3_MmdIB4pX6YFj_7YItc6pzDMyBAykSbQ"
const supabase = createClient(supabaseUrl, supabaseKey);


// Vérification du chargement des variables d'environnement
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey ? "Key Loaded" : "Key Not Found");

export default supabase;
