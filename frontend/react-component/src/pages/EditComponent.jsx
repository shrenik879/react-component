import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function EditComponent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComponent = async () => {
      const data = await apiRequest(`/components/${id}`);
      setTitle(data.title);
      setCategory(data.category);
      setCode(data.code);
      setLoading(false);
    };

    fetchComponent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiRequest(`/components/${id}`, "PUT", {
      title,
      category,
      code,
    });

    navigate("/dashboard");
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Component
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          placeholder="Title"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          placeholder="Category"
        />

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          className="w-full border px-4 py-2 rounded font-mono"
        />

        <button className="bg-indigo-600 text-white px-6 py-2 rounded">
          Update & Send for Approval
        </button>
      </form>
    </div>
  );
}
