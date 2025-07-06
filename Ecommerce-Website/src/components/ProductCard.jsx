import { useNavigate } from "react-router";

const ProductCard = (props) => {
  const { title, price, thumbnail, id } = props;
  const navigate = useNavigate();

  const handleProductView = () => {
    navigate(`/${id}/view`);
  };
  return (
    <div
      className="p-5 rounded-xl bg-gray-400 max-w-200 hover:bg-gray-600 cursor-pointer transition-transform duration-300 transform hover:scale-105 shadow-md"
      onClick={handleProductView}
    >
      {" "}
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm text-gray-600">Rs.{price}</p>
      <img
        src={thumbnail}
        alt="Product"
        className="mt-2 w-full h-auto rounded"
      />
    </div>
  );
};

export { ProductCard };
