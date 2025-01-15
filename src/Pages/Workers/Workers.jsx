import React, { useState } from "react";
import { WorkersData } from "../../Data";
import Card from "../../Components/Cards/Card";

const Workers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // استخراج الفئات الفريدة
  const categories = [
    "All",
    ...new Set(WorkersData.map((card) => card.category)),
  ];

  // تصفية البطاقات بناءً على الفئة المختارة
  const filteredCards =
    selectedCategory === "All"
      ? WorkersData
      : WorkersData.filter((card) => card.category === selectedCategory);

  return (
    <div>
      <h1 className="text-center p-5">Filter Cards by Category</h1>
      {/* الأزرار الخاصة بالفئات */}
      <div className="p-5 flex justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              marginRight: "10px",
              padding: "10px",
              background: selectedCategory === category ? "#007BFF" : "#DDD",
              color: selectedCategory === category ? "#FFF" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض البطاقات */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10  ">
          {filteredCards.map((i) => (
            <div className=" w-[300px] h-[250px] mb-20 ">
              <Card
                key={i.id}
                img={i.img}
                category={i.category}
                desc={i.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workers;
