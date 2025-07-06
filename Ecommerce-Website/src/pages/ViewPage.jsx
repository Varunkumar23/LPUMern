import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const ViewPage = () => {
  const params = useParams();
  const { productId } = params;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const getSingleProductInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(`Error getting the product info: ${err.message}`);
    } finally {
      setTimeout(()=>setLoading(false),1000);
    }
  };

  useEffect(() => {
    getSingleProductInfo();
    // eslint-disable-next-line
  }, [productId]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-8 px-4">
        {loading ? (
          <div className="h-40 flex items-center justify-center">
            <BeatLoader />
          </div>
        ) : !product ? (
          <p className="text-lg text-gray-600">Loading...</p>
        ) : (
          <div className="w-full max-w-4xl bg-gray-200 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Images */}
              <div className="flex flex-col items-center md:w-1/2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-64 h-64 object-cover rounded-lg border mb-4 shadow"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                  {product.images?.map((img) => (
                    <img
                      src={img}
                      alt={product.title}
                      key={img}
                      className="w-20 h-20 object-cover rounded border hover:scale-105 transition"
                    />
                  ))}
                </div>
              </div>
              {/* Product Info */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="text-3xl font-extrabold text-amber-700">{product.title}</h1>
                <p className="text-gray-700 text-lg font-extrabold">{product.description}</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-2xl font-semibold text-green-700">₹{product.price}</span>
                  <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-sm">
                    {product.discountPercentage}% OFF
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    Rating: {product.rating} ⭐
                  </span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag) => (
                    <span key={tag} className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-sm text-gray-600">Brand: <span className="font-semibold">{product.brand}</span></span>
                  <span className="text-sm text-gray-600">Category: <span className="font-semibold">{product.category}</span></span>
                  <span className="text-sm text-gray-600">SKU: <span className="font-semibold">{product.sku}</span></span>
                  <span className="text-sm text-gray-600">Barcode: <span className="font-semibold">{product.meta?.barcode}</span></span>
                  <span className="text-sm text-gray-600">Warranty: <span className="font-semibold">{product.warrantyInformation}</span></span>
                  <span className="text-sm text-gray-600">Shipping: <span className="font-semibold">{product.shippingInformation}</span></span>
                  <span className="text-sm text-gray-600">Availability: <span className="font-semibold">{product.availabilityStatus}</span></span>
                  <span className="text-sm text-gray-600">Return Policy: <span className="font-semibold">{product.returnPolicy}</span></span>
                  <span className="text-sm text-gray-600">Min. Order: <span className="font-semibold">{product.minimumOrderQuantity}</span></span>
                  <span className="text-sm text-gray-600">Dimensions: <span className="font-semibold">{product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</span></span>
                  <span className="text-sm text-gray-600">Weight: <span className="font-semibold">{product.weight}g</span></span>
                  <span className="text-sm text-gray-600">Created: <span className="font-semibold">{new Date(product.meta?.createdAt).toLocaleDateString()}</span></span>
                  <span className="text-sm text-gray-600">Updated: <span className="font-semibold">{new Date(product.meta?.updatedAt).toLocaleDateString()}</span></span>
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    QR Code: {product.meta?.qrCode && (
                      <img src={product.meta.qrCode} alt="QR Code" className="w-8 h-8 inline-block ml-2" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2 text-amber-700">Customer Reviews</h2>
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((review, idx) => (
                    <div key={idx} className="bg-gray-100 rounded-lg p-4 shadow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">{review.reviewerName}</span>
                        <span className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                        <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export { ViewPage };