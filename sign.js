import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to handle form submission
async function handleSignup(event) {
  event.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    // Insert user data into the 'users' table
    const { data, error } = await supabase
      .from('users')
      .insert([{ username, email, password }]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      // Redirect or show success message
    }
  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
}

// Add event listener to form submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', handleSignup);
