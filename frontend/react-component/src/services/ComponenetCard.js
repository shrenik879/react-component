import { useAuth } from "../context/AuthContext";
import { likeComponent, rateComponent } from "../services/componentApi";
import { useNavigate } from "react-router-dom";

export default function ComponentCard({ component, onRefresh }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLike = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    await likeComponent(component._id);
    onRefresh();
  };

  const handleRate = async (rating) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    await rateComponent(component._id, rating);
    onRefresh();
  };

  return (
    <div className="rounded-2xl bg-white shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold text-slate-900">
        {component.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {component.category}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium">
          {component.price === 0 ? "Free" : `₹${component.price}`}
        </span>

        <button
          onClick={handleLike}
          className="text-sm flex items-center gap-1 hover:text-indigo-600"
        >
          ❤️ {component.likesCount}
        </button>
      </div>

      <div className="mt-4 flex gap-1">
        {[1,2,3,4,5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            className="text-yellow-400 text-lg"
          >
            ★
          </button>
        ))}
        <span className="ml-2 text-sm text-slate-500">
          {component.avgRating?.toFixed(1) || "0.0"}
        </span>
      </div>
    </div>
  );
}
