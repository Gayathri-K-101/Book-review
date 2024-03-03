const supabase = supabase.createClient('https://oppcvkhqpqfhvtrgjrzl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wcGN2a2hxcHFmaHZ0cmdqcnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MzI1NzAsImV4cCI6MjAyNTAwODU3MH0.w-urZMZTM3uIiIXDBkHfDBBFv_b9wRIcJXLWk4B1RHs');
// Example: Fetching data from a table
async function fetchData() {
    const { data, error } = await supabase.from('Bookie').select('*');
    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }
    console.log('Fetched data:', data);
    // Process data here
}
