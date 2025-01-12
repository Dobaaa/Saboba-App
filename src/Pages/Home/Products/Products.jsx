import React, { useState } from "react";
import { productsData } from "../../../Data";
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // عدد العناصر في الصفحة الواحدة
  const [filter, setFilter] = useState("");

  // تطبيق الفلتر
  const filteredProducts = productsData.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  // تقسيم المنتجات إلى صفحات
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const AllProducts = currentItems.map((product) => (
    <div className="product-card p-2 bg-white text-black rounded-md">
      <div key={product.id}>
        <img src={product.img} alt="" className="max-w-[300px] max-h-[240px]" />
        <h5> {product.name}</h5>
        <div className="flex justify-between">
          <p> {product.category}</p>
          <p> {product.price}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl p-5">Products</h1>

      {/* الفلتر */}
      <input
        type="text"
        className="rounded-xl text-black"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "20px", padding: "15px", width: "50%" }}
      />

      {/* عرض المنتجات */}
      <div className="grid grid-cols-4 gap-2">{AllProducts}</div>
      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: currentPage === index + 1 ? "blue" : "gray",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
