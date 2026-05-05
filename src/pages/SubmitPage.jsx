import { useForm } from "react-hook-form";

function SubmitPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen  px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Submit your idea
        </h1>
        <p className="text-gray-500 mb-6">
          Share a startup idea with the community
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">
              Idea title <span className="text-red-500">*</span>
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                maxLength: { value: 100, message: "Max 100 characters" },
                onChange: (e) => {
                  document.getElementById("title-count").textContent =
                    e.target.value.length + " / 100";
                },
              })}
              maxLength={100}
              placeholder="A concise, punchy title..."
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                errors.title ? "border-red-400" : "border-gray-200"
              }`}
            />
            <div className="flex justify-between">
              <span className="text-red-500 text-xs">
                {errors.title?.message}
              </span>
              <span id="title-count" className="text-xs text-gray-400">
                0 / 100
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("desc", {
                required: "Description is required",
                maxLength: { value: 300, message: "Max 300 characters" },
                onChange: (e) => {
                  document.getElementById("desc-count").textContent =
                    e.target.value.length + " / 300";
                },
              })}
              maxLength={300}
              placeholder="Describe the problem you're solving, your target customer, and why now..."
              rows={5}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none ${
                errors.desc ? "border-red-400" : "border-gray-200"
              }`}
            />
            <div className="flex justify-between">
              <span className="text-red-500 text-xs">
                {errors.desc?.message}
              </span>
              <span id="desc-count" className="text-xs text-gray-400">
                0 / 300
              </span>
            </div>
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
