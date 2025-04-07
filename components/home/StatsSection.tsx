"use client";
import CountUp from "react-countup";
import { statsData } from "../utils/statsData";

export const StatsSection = () => {

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Our Impact in Numbers
        </h2>
        <p className="text-foreground mb-12">
          We’re proud of what our creators have achieved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-foreground shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-primary">
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  suffix={stat.suffix}
                />
              </h3>
              <p className="mt-2 text-lg font-semibold text-background">
                {stat.title}
              </p>
              <p className="text-sm text-background">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
