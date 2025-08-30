import React from "react"
import Header from "./Header";
const CreateTask =()=>{
  return(
    <div className="min-h-screen w-full bg-[#0b0e14] text-gray-100">
      {/* Top app header */}
      <div className="px-6 md:px-10 pt-6">
       
      </div>

      {/* Page container */}
      <main className="px-6 md:px-10 pb-16">
        {/* Page title / breadcrumb area */}
        <div className="mt-6 mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Create and assign a new task to your team.
          </p>
        </div>

        {/* Card wrapper for the form */}
        <div className="mt-6 rounded-2xl bg-[#161b22]/80 backdrop-blur border border-white/10 shadow-xl">
          {/* Sub-header inside card */}
          <div className="px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-medium">Create Task</h2>
          </div>

          {/* The form */}
          <form
            className="px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-6"
            onSubmit={(e) => e.preventDefault()} // prevent full page reload for now
          >
            {/* LEFT COLUMN -------------------------------------------------- */}
            <section className="md:col-span-6 space-y-5">
              {/* Task Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm text-gray-300">
                  Task Title
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  placeholder="e.g., Design hero section for landing page"
                  className="w-full rounded-xl bg-[#0f131a] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition"
                />
                <p className="text-xs text-gray-500">
                  Keep it short and action-oriented.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  placeholder="Add context, acceptance criteria, links, etc."
                  className="w-full rounded-xl bg-[#0f131a] border border-white/10 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition resize-y"
                />
              </div>
            </section>

            {/* RIGHT COLUMN ------------------------------------------------- */}
            <section className="md:col-span-6 space-y-5">
              {/* Due Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm text-gray-300">
                  Due Date
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  className="w-full rounded-xl bg-[#0f131a] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition"
                />
              </div>

              {/* Assignee */}
              <div className="space-y-2">
                <label
                  htmlFor="assignee"
                  className="block text-sm text-gray-300"
                >
                  Assign To
                </label>
                <input
                  id="assignee"
                  type="text"
                  placeholder="e.g., Alex Johnson"
                  className="w-full rounded-xl bg-[#0f131a] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition"
                />
                {/* If you have a list of employees, swap this input for a <select> */}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-full rounded-xl bg-[#0f131a] border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition"
                  defaultValue="design"
                >
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="bug">Bug</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 active:scale-[0.99] transition shadow-lg shadow-indigo-500/20"
                >
                  Create Task
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium border border-white/10 hover:border-white/20 bg-[#0f131a] transition"
                >
                  Reset
                </button>
              </div>
            </section>
          </form>
        </div>
      </main>
    </div>
  );
  
}
export default CreateTask