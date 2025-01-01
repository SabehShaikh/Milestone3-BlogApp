import React from "react";
import Card from "@/components/Card";

export const sportsArticles = [
  {
    id: "1",
    title: "The Rise of Esports in the Modern World",
    description:
      "Explore the booming world of esports and its influence on gaming culture.",
    content:
      "Esports, or electronic sports, has rapidly grown from a niche hobby to a global phenomenon. With competitive gaming tournaments now drawing millions of viewers, esports is challenging traditional sports in terms of viewership and revenue generation. Games like League of Legends, Dota 2, and Fortnite have become household names, and professional gamers are now celebrities with sponsorships, streaming deals, and large fanbases. Esports has even made its way into the Olympic conversation, with some advocating for its inclusion as an official event. As gaming technology continues to evolve, the future of esports looks incredibly promising.",
    image: "/images/sports1.webp",
  },
  {
    id: "2",
    title: "The Evolution of Football Tactics",
    description: "How football tactics have evolved over the decades.",
    content:
      "Football, or soccer, has seen significant changes in tactics over the years. From the early days of the game, where individual skill was prioritized, to the modern era, where team strategy and formations dominate, football tactics have evolved to meet the changing dynamics of the sport. In the early 20th century, teams typically played in a 2-3-5 formation, focusing on offensive play. However, as the game progressed, defensive strategies such as the 4-4-2 and 4-3-3 formations emerged. Today, football is more about possession, pressing, and creating space, with formations like 4-3-3 or 3-5-2 being popular. The role of the coach has also become more influential, with tactical innovations often determining the success of a team.",
    image: "/images/sports2.webp",
  },
  {
    id: "3",
    title: "The Impact of Technology on Sports",
    description:
      "How technology is changing the way we experience and play sports.",
    content:
      "Technology has had a profound impact on the sports industry, both on and off the field. From wearable devices that track an athlete's performance to video analysis tools that help coaches refine strategies, technology is playing an increasingly important role. One of the most notable innovations is the use of video assistant referees (VAR) in football, which helps to ensure more accurate decisions. In tennis, Hawk-Eye technology allows players to challenge line calls, and in basketball, wearable sensors help players monitor their physical condition in real time. Technology has also revolutionized fan engagement, with virtual reality (VR) and augmented reality (AR) offering immersive experiences for viewers. As technology continues to advance, its influence on sports will only grow.",
    image: "/images/sports3.jpg",
  },
  {
    id: "4",
    title: "The Psychology of Winning in Sports",
    description:
      "Exploring the mental aspect of sports and how athletes achieve success.",
    content:
      "The psychology of winning plays a significant role in an athlete's performance. Mental toughness, focus, and confidence are all key factors that contribute to success in sports. Athletes who can manage their emotions and maintain a positive mindset under pressure are often more successful than their peers. Visualization techniques, where athletes mentally rehearse their performance, have become a common practice to enhance focus and reduce anxiety. Additionally, sports psychologists work with athletes to improve their mental resilience, helping them bounce back from setbacks and maintain motivation. The mental aspect of sports is just as important as the physical, and athletes who can master both are often the most successful.",
    image: "/images/sports4.jpg",
  },
  {
    id: "5",
    title: "The Evolution of Basketball Tactics",
    description:
      "A deep dive into the strategies that shaped modern basketball.",
    content:
      "Basketball has evolved in many ways since its inception, particularly in terms of tactics. Early basketball was played with a focus on physicality and fast breaks. As the game grew, more strategic approaches began to emerge, focusing on defense, ball movement, and shooting accuracy. In recent years, the rise of the three-point shot has drastically changed how teams approach the game. The 'small-ball' lineup, which emphasizes speed and shooting over size, has become increasingly popular. Coaches like Phil Jackson and Gregg Popovich have revolutionized the game with their unique philosophies, and the future of basketball tactics will likely continue to evolve with advancements in analytics and player development.",
    image: "/images/sports5.jpg",
  },
];

export default function SportsPage() {
  return (
    <main className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Sports</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              link={`/sports/${article.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
