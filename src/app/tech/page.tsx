import React from "react";
import Card from "@/components/Card";

export const techArticles = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence",
    description:
      "Explore the potential of AI and its impact on various industries.",
    content:
      "Artificial Intelligence (AI) is rapidly advancing and transforming various industries. From healthcare to finance, AI is being used to automate tasks, improve decision-making, and enhance customer experiences. One of the key developments in AI is machine learning, which allows systems to learn from data and improve over time. This has led to innovations in areas such as autonomous vehicles, predictive analytics, and personalized recommendations. As AI continues to evolve, it has the potential to revolutionize industries and create new opportunities. However, it also raises ethical concerns, including job displacement and privacy issues. Understanding the implications of AI is crucial as we move into the future.",
    image: "/images/tech1.webp",
  },
  {
    id: "2",
    title: "Understanding Blockchain Technology",
    description:
      "Learn how blockchain is changing the way we think about data security.",
    content:
      "Blockchain is a decentralized digital ledger technology that has gained significant attention in recent years. It is best known for being the foundation of cryptocurrencies like Bitcoin, but its applications go beyond digital currencies. Blockchain allows for secure, transparent, and tamper-proof transactions without the need for intermediaries. This has the potential to revolutionize industries such as finance, supply chain management, and healthcare. Blockchain can improve data security, reduce fraud, and increase efficiency by eliminating the need for middlemen. As the technology matures, it could transform the way businesses operate and how we interact with digital assets.",
    image: "/images/tech2.jpg",
  },
  {
    id: "3",
    title: "The Rise of 5G Technology",
    description:
      "Discover how 5G technology will revolutionize connectivity and communication.",
    content:
      "5G is the fifth generation of mobile network technology, offering faster speeds, lower latency, and more reliable connections than its predecessors. This new technology is set to transform industries by enabling new applications such as autonomous vehicles, smart cities, and the Internet of Things (IoT). 5G will also improve the performance of existing services like streaming, gaming, and remote work. With its increased bandwidth, 5G will support a larger number of devices and allow for real-time communication across a wide range of industries. As 5G networks continue to roll out globally, they will unlock new opportunities for innovation and connectivity.",
    image: "/images/tech3.webp",
  },
  {
    id: "4",
    title: "The Importance of Cybersecurity in the Digital Age",
    description:
      "Learn why cybersecurity is critical in protecting your personal and business data.",
    content:
      "As we become more reliant on digital technologies, cybersecurity has become a critical concern. Cyberattacks are becoming more sophisticated, and the consequences of data breaches can be severe. Cybersecurity involves protecting systems, networks, and data from unauthorized access, attacks, and damage. This includes practices such as encryption, firewalls, and multi-factor authentication to ensure that sensitive information remains secure. With the rise of remote work and online services, the need for robust cybersecurity measures has never been more important. Individuals and businesses alike must take steps to safeguard their data and protect against potential threats.",
    image: "/images/tech4.jpg",
  },
  {
    id: "5",
    title: "Cloud Computing: Transforming the IT Landscape",
    description:
      "Explore how cloud computing is changing the way businesses manage their IT infrastructure.",
    content:
      "Cloud computing allows businesses to access and store data on remote servers, rather than relying on local hardware. This technology has transformed the way companies manage their IT infrastructure, offering scalability, flexibility, and cost savings. With cloud computing, businesses can easily scale their operations without the need for expensive on-premise hardware. Popular cloud service providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud offer a wide range of services, including data storage, computing power, and machine learning tools. Cloud computing has become essential for businesses of all sizes, enabling them to innovate and stay competitive in a rapidly changing digital landscape.",
    image: "/images/tech5.jpeg",
  },
  {
    id: "6",
    title: "The Impact of Virtual Reality on Education",
    description:
      "Learn how virtual reality (VR) is transforming the education sector.",
    content:
      "Virtual reality (VR) is revolutionizing the way we experience education. By immersing students in virtual environments, VR allows for interactive and engaging learning experiences that are not possible with traditional methods. In fields such as medicine, engineering, and architecture, VR is being used to simulate real-world scenarios, providing students with hands-on training without the risks associated with physical environments. VR also offers the potential for personalized learning, allowing students to progress at their own pace and focus on areas where they need improvement. As VR technology continues to evolve, it is expected to play an increasingly important role in shaping the future of education.",
    image: "/images/tech6.webp",
  },
];

export default function TechPage() {
  return (
    <main className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Tech News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              link={`/tech/${article.id}`} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
