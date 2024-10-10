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
          start_time,
          end_time,
          repeat_hours,
          pets (name)  -- Join to fetch the pet name
        `);
  
      if (error) {
        console.error("Error fetching reminders:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
  
      // Format the data
      const formattedReminders = reminders.map(reminder => {
        const startDateObj = new Date(reminder.start_time);
        const endDateObj = new Date(reminder.end_time);
  
        const startDate = startDateObj.toLocaleDateString();  // Format as just the date
        const startTime = startDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  // Extract the time
        const endDate = endDateObj.toLocaleDateString();  // Format end date
  
        return {
          ...reminder,
          petName: reminder.pets.name,  // Extract pet name from the joined pets table
          startDate,   // Formatted start date
          startTime,   // Formatted start time
          endDate      // Formatted end date
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
      start_time,
      end_time,
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
        start_time,
        end_time,
        repeat_hours,
        notes
      }
    ]);
    
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ reminder: data }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create reminder" }), { status: 500 });
  }
}