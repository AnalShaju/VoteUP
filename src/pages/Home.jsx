import Hero from "../components/Hero";
import IdeaCard from "../components/IdeaCard";

function Home() {
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
      votes: 21,
    },
    {
      id: 4,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 25,
    },
    {
      id: 5,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 28,
    },
    {
      id: 6,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 60,
    },
    {
      id: 7,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 2,
    },
    {
      id: 8,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 10,
    },
    {
      id: 9,
      title: "Mental health check-in app for students",
      desc: "Daily mood tracker with anonymous peer support for college students.",
      author: "Anonymous",
      votes: 11,
    },
  ];

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
              number={index + 1}
              title={idea.title}
              desc={idea.desc}
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
