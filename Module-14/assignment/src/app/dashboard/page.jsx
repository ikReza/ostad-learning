const Dashboard = () => {
  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-center text-2xl font-medium my-4 text-white">
        Welcome to Dashboard
      </h2>
      <form className="bg-[#233] text-[tomato] p-4 rounded-lg shadow-lg hover:shadow-gray-600 z-10">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          required
          placeholder="Specify your subject"
          className="block bg-transparent border rounded-lg w-full p-2 my-2 placeholder:italic placeholder-[#555]"
        />
        <label htmlFor="desc">Description</label>
        <textarea
          type="text"
          id="desc"
          required
          rows={5}
          placeholder="What would you like to say?"
          className="block bg-transparent border rounded-lg w-full p-2 my-2 placeholder:italic placeholder-[#555]"
        />
        <button className="bg-[tomato] text-[#233] p-2 rounded-lg w-full my-4 font-semibold hover:shadow-md">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
