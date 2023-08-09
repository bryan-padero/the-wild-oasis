import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bbxtjmarmdffjahsmjkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieHRqbWFybWRmZmphaHNtamtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NjQ3MjksImV4cCI6MjAwNzE0MDcyOX0.oIy0OCAzWIlPe8Ez_oqrGSFpPBk9lRdCd9PuqpeLDLE ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
