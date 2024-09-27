import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import EventCard from '../EventCard';

const FetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
        const supabase = createClient('https://myrqxbgxgllrxwkyvvwo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cnF4Ymd4Z2xscnh3a3l2dndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0Mzg3NDEsImV4cCI6MjA0MzAxNDc0MX0.T19tCvmYowTLLMgENyYAp9CKjzkVP8SFa8kKYvyxBco');
        const { data, error } = await supabase
          .from('Events')
          .select()
        
          setEvents(data);
          setLoading(false);
    };

    fetchEvents();
  }, []);
  if (loading) return <div>Loading...</div>;

  return (
    <>
        {events.map(event => (
          <EventCard date={15} month={"Aug"} header={event.name} children={[
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/IMG_20240815_120328722.jpg',
            'Images/alumniMeet_AUG_15/IMG_20240815_120938675.jpg',
            'Images/alumniMeet_AUG_15/IMG_20240815_124144608.jpg',
            'Images/alumniMeet_AUG_15/IMG_20240815_121118575.jpg',
        ]}></EventCard>
        ))}
    </>
  );
};

export default FetchEvents;