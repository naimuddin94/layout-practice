import React from "react";

interface DynamicPageProps {
  params: {
    articleId: string;
  };
}

const page = ({ params }: DynamicPageProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl font-black bg-gray-800 px-5 py-2 rounded">
        {params.articleId}
      </h1>
    </div>
  );
};

export default page;
