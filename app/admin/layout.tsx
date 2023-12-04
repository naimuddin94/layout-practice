import Link from "next/link";
import React from "react";

const liGroup = [
  { label: "All Articles", path: "allArticles" },
  { label: "News Article", path: "newsArticles" },
  { label: "Business Articles", path: "businessArticles" },
  { label: "Sports Articles", path: "sportsArticles" },
  { label: "World Articles", path: "worldArticles" },
];

const layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="grid grid-cols-12 bg-gray-900 p-20 h-screen">
      <ul className="col-span-3 p-9">
        {liGroup.map((item) => (
          <Link key={item.label} href={item.path}>
            <li
              className="bg-gray-950 px-4 py-2 rounded text-center mb-4"
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
          <div className="col-span-9 bg-gray-950">
              {children}
      </div>
    </div>
  );
};

export default layout;
