// components/AllAccessIncludes.jsx
import React from "react";

const items = [
  {
    title: "Cooking",
    desc: "Enjoy recipes, advice and inspiration for any occasion.",
  },
  {
    title: "Wirecutter",
    desc: "Explore independent reviews for thousands of products.",
  },
  {
    title: "Games",
    desc: "Unwind with Spelling Bee, Wordle, The Crossword.",
  },
  {
    title: "The Athletic",
    desc: "Discover in-depth, personalized sports journalism.",
  },
];

const AllAccessIncludes = () => {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-6 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-10">
        An All Access subscription includes
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAccessIncludes;