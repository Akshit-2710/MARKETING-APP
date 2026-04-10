import { useState } from "react";
import { GROWTH_ANALYTICS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Portfolio() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const activeClient = GROWTH_ANALYTICS.clients[activeClientIndex];

  const successStories = [
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.31.48 PM.jpeg",
      title: "Ad Inquiry Chat",
      category: "Paid Client Conversion",
    },
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.32.39 PM.jpeg",
      title: "Resort Request",
      category: "Lead Conversation",
    },
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.33.22 PM.jpeg",
      title: "Pricing Question",
      category: "Hot Prospect",
    },
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.33.54 PM.jpeg",
      title: "Product Details Ask",
      category: "Storefront Inquiry",
    },
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.34.19 PM.jpeg",
      title: "Client Follow-Up",
      category: "Sales Conversation",
    },
    {
      image: "/images/WhatsApp Image 2026-04-10 at 1.34.58 PM.jpeg",
      title: "Close-Ready Lead",
      category: "Conversation Win",
    },
  ];

  return (
    <section
      id="work"
      data-testid="portfolio-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          ref={headRef}
          data-testid="portfolio-heading"
          className={`font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] text-center mb-10 tracking-tight transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {GROWTH_ANALYTICS.heading}
        </h2>

        {/* Client Name Filters */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {GROWTH_ANALYTICS.clients.map((client, idx) => (
            <button
              key={client.name}
              onClick={() => setActiveClientIndex(idx)}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeClientIndex === idx 
                  ? "bg-[#1A3C8F] text-white shadow-lg scale-105" 
                  : "bg-[#FDE8EE] text-[#1A3C8F] hover:bg-[#F8C8D4] hover:scale-105"
              }`}
            >
              {client.name}
            </button>
          ))}
        </div>

        {/* Chart Section */}
        {activeClient && (
          <div className="bg-[#FDE8EE]/50 rounded-3xl p-6 md:p-12 shadow-sm border border-[#F8C8D4]/50 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-500">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-heading font-black text-[#1A3C8F] mb-4">
                {activeClient.name} Growth
              </h3>
              <p className="text-[#1A3C8F]/80 text-lg leading-relaxed mb-8 font-medium">
                {activeClient.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeClient.data.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-[#F8C8D4]/30 hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A3C8F]/50 block mb-2">
                      {stat.label}
                    </span>
                    <span className="text-3xl font-black" style={{ color: stat.color }}>
                      {stat.value}
                      {stat.label.includes('%') ? '%' : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 min-h-[300px] flex justify-center">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={activeClient.data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={130}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {activeClient.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color || "#1A3C8F"} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', backgroundColor: '#fff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 'bold' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className={`mt-16 rounded-[2rem] border border-[#E5E7EB] bg-white p-8 md:p-10 shadow-sm transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-black text-[#1A3C8F] mb-4">
              Your inbox could look exactly like this
            </h3>
            <p className="font-display mx-auto max-w-2xl text-[#1A3C8F]/80 text-lg leading-relaxed">
              Every conversation below started with a stranger. We turned them into paying clients — for businesses just like yours. Connect with us, and your chat is next.
            </p>
          </div>

          <div className="mt-10 relative">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-6">
                {successStories.map((story) => (
                  <CarouselItem key={story.title} className="pl-6 md:basis-1/2">
                    <div className="overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-[#F8FAFC] shadow-sm">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-[340px] w-full object-cover"
                      />
                      <div className="p-5">
                        <div className="text-xs uppercase tracking-[0.24em] text-[#1A3C8F]/60 mb-2">
                          {story.category}
                        </div>
                        <div className="text-xl font-semibold text-[#1A3C8F] font-display">
                          {story.title}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                className="border-[#1A3C8F]/20 text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white transition-all duration-300"
              />
              <CarouselNext
                className="border-[#1A3C8F]/20 text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white transition-all duration-300"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
