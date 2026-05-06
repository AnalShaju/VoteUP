import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useForm } from "react-hook-form";

function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase.from("ideas").insert({
      title: data.title,
      description: data.desc,
      author: data.author || "Anonymous",
    });

    if (error) {
      console.error("Error submitting idea:", error);
      return;
    }

    reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Submit your idea
        </h1>
        <p className="text-gray-500 mb-6">
          Share a startup idea with the community
        </p>

        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-4 text-sm">
            ✅ Your idea has been submitted successfully!
          </div>
        )}

        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">
              Idea title <span className="text-red-500">*</span>
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                maxLength: { value: 100, message: "Max 100 characters" },
              })}
              maxLength={100}
              placeholder="A concise, punchy title..."
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                errors.title ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("desc", {
                required: "Description is required",
                maxLength: { value: 300, message: "Max 300 characters" },
              })}
              maxLength={300}
              placeholder="Describe the problem you're solving, your target customer, and why now..."
              rows={5}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none ${
                errors.desc ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.desc && (
              <span className="text-red-500 text-xs">
                {errors.desc.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">
              Your name{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              {...register("author")}
              placeholder="Anonymous if left blank"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-lg transition-colors text-sm"
          >
            Submit idea →
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
