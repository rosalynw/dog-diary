import { supabase } from "@/utils/supabaseClient"

export async function GET(req) {
 
    try {
      // Fetch reminders and join the pets table to get pet names
      const { data: reminders, error } = await supabase
        .from('reminders')
        .select(`
          id,
          pet_id,
          title,
          medication,
          dosage,
          start_date,
          start_time,
          end_date,
          repeat_hours,
          pets (name)  -- Join to fetch the pet name
        `);
  
      if (error) {
        console.error("Error fetching reminders:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
  
      // Format the data
      const formattedReminders = reminders.map(reminder => {
        const startTimeObj = new Date(`1970-01-01T${reminder.start_time}Z`); // Use a fixed date
        let start_time = startTimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    
        return {
          ...reminder,
          petName: reminder.pets.name,  // Extract pet name from the joined pets table
          start_time
        };
      });

    // Return the fetched reminders in JSON format
    return new Response(JSON.stringify({ reminders:formattedReminders }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Unexpected server error" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      pet_id,
      title,
      medication,
      dosage,
      start_date,
      start_time,
      end_date,
      repeat_hours,
      notes
    } = body;

    const { data, error } = await supabase
    .from('reminders')
    .insert([
      {
        pet_id,
        title,
        medication,
        dosage,
        start_date,
        start_time,
        end_date,
        repeat_hours,
        notes
      }
    ])
    .select();
    
    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ reminder: data[0] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create reminder" }), { status: 500 });
  }
}