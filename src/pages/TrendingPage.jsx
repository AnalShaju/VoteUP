import IdeaCard from "../components/IdeaCard";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function TrendingPage() {
  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = async () => {
    const { data, error } = await supabase
      .from("ideas")
      .select("*")
      .order("votes", { ascending: false })
      .limit(3);

    if (error) {
      console.error("Error fetching ideas:", error);
      return;
    }

    setIdeas(data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🔥 Trending ideas
      </h1>
      <p className="text-gray-500 mb-8">Top 3 most voted ideas right now</p>
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
  );
}

export default TrendingPage;
