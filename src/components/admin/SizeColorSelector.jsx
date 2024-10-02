import React from "react";

const SizeColorSelector = ({ sizes, colors, selectedSizes, setSelectedSizes, selectedColors, setSelectedColors }) => {
  const toggleItem = (item, setSelected, selectedList) => {
    if (selectedList.includes(item)) {
      setSelected(selectedList.filter((i) => i !== item));
    } else {
      setSelected([...selectedList, item]);
    }
  };

  return (
    <div className="w-full">
      <label className="text-sm font-medium" htmlFor="sizes">Sizes</label>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => toggleItem(size, setSelectedSizes, selectedSizes)}
            className={`p-2 rounded cursor-pointer ${
              selectedSizes.includes(size) ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {size}
          </div>
        ))}
      </div>

      <label className="text-sm font-medium" htmlFor="colors">Colors</label>
      <div className="grid grid-cols-6 gap-2">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => toggleItem(color, setSelectedColors, selectedColors)}
            className="w-12 h-12 rounded-full cursor-pointer"
            style={{
              backgroundColor: color,
              border: selectedColors.includes(color) ? "2px solid green" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SizeColorSelector;
