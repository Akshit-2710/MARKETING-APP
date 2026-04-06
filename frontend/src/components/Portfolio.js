import { useState } from "react";
import { GROWTH_ANALYTICS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function Portfolio() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const activeClient = GROWTH_ANALYTICS.clients[activeClientIndex];

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
      </div>
    </section>
  );
}
