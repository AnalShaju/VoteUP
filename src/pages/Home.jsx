import Hero from "../components/Hero";
import IdeaCard from "../components/IdeaCard";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function Home() {
  const [ideas, setIdeas] = useState([]);
  const fetchIdeas = async () => {
    const { data, error } = await supabase
      .from("ideas")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetcching ideas:", error);
      return;
    }
    setIdeas(data);
  };
  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          All ideas
          <span className="ml-2 text-sm font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            {ideas.length}
          </span>
        </h2>

        <div className="flex flex-col gap-4">
          {ideas.map((idea, index) => (
            <IdeaCard
              key={idea.id}
              id={idea.id}
              number={index + 1}
              title={idea.title}
              desc={idea.description}
              author={idea.author}
              votes={idea.votes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
