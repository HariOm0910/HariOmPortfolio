import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    title: "Army Public School Nehru Road",
    location: "Lucknow",
    level: "High School",
    year: "2019",
    subjects: ["Math", "Science", "English", "Social Science", "Hindi"],
    percentage: "88%",
  },
  {
    title: "Army Public School Nehru Road",
    location: "Lucknow",
    level: "Class 12th",
    year: "2021",
    subjects: ["Physics", "Chemistry", "Math", "English", "Physical Education"],
    percentage: "90.4%",
  },
  {
    title: "Lovely Professional University",
    location: "Jalandhar",
    level: "College",
    year: "2022 - 2026",
    subjects: ["B-tech CSE"],
    percentage: "Current- 7.6",
  },
];

export default function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="education" className="relative w-full px-6 py-20 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

      {/* Center vertical line */}
      <div className="absolute left-1/2 top-30 transform -translate-x-1/2 w-1 bg-indigo-500 h-full z-0" />

      {/* Timeline */}
      <div className="flex flex-col space-y-16 max-w-5xl mx-auto relative z-10">
        {education.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isOpen = openIndex === index;

          return (
            <div key={index} className="flex w-full items-start justify-between relative">
              {isLeft ? (
                <>
                  <div className="w-1/2 pr-6 flex justify-end">
                    <Card
                      {...item}
                      isOpen={isOpen}
                      onToggle={() => setOpenIndex(isOpen ? null : index)}
                      isLeft={isLeft}
                    />
                  </div>
                  <div className="w-0 flex flex-col items-center justify-start">
                    <span className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-black" />
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="w-0 flex flex-col items-center justify-start">
                    <span className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-black" />
                  </div>
                  <div className="w-1/2 pl-6">
                    <Card
                      {...item}
                      isOpen={isOpen}
                      onToggle={() => setOpenIndex(isOpen ? null : index)}
                      isLeft={isLeft}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Card({ title, location, level, year, subjects, percentage, isOpen, onToggle, isLeft }: any) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:shadow-lg transition duration-300 w-full max-w-md ${
        isLeft ? "ml-auto" : "mr-auto"
      }`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{location}</p>
      <p className="text-sm text-gray-400">{level}</p>
      <div className="text-sm text-indigo-400 mt-2 flex items-center">
        <FaCalendarAlt className="mr-2" /> {year}
      </div>

      <button
        onClick={onToggle}
        className="mt-3 text-indigo-400 hover:underline transition-all"
      >
        {isOpen ? "Hide Details" : "View More →"}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white/10 p-4 rounded-lg border border-indigo-500">
          <p className="text-indigo-300 mb-1">Subjects:</p>
          <ul className="list-disc ml-5 text-sm text-gray-200">
            {subjects.map((sub: string, i: number) => (
              <li key={i}>{sub}</li>
            ))}
          </ul>
          <p className="mt-3 text-indigo-300">
            Percentage: <span className="text-white font-semibold">{percentage}</span>
          </p>
        </div>
      )}
    </div>
  );
}
