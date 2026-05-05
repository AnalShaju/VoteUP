import IdeaCard from "../components/IdeaCard";
function TrendingPage() {
  const ideas = [
    {
      id: 1,
      title: "AI-powered personal finance coach",
      desc: "An app that analyzes your spending habits and gives brutally honest, personalized advice.",
      author: "Priya K.",
      votes: 37,
    },
    {
      id: 2,
      title: "Hyperlocal grocery delivery under 10 mins",
      desc: "Partner with local kirana stores for instant delivery in tier-2 cities.",
      author: "Arjun K.",
      votes: 28,
    },
    {
      id: 3,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 201,
    },
    {
      id: 8,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 10,
    },
  ];
  const copyIdeas = [...ideas];
  const sortedIdeas = copyIdeas.sort((a, b) => b.votes - a.votes);
  const top3 = sortedIdeas.slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🔥 Trending ideas
      </h1>
      <p className="text-gray-500 mb-8">Top 3 most voted ideas right now</p>
      <div className="flex flex-col gap-4">
        {top3.map((idea, index) => (
          <IdeaCard
            key={idea.id}
            number={index + 1}
            title={idea.title}
            desc={idea.desc}
            author={idea.author}
            votes={idea.votes}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingPage;
