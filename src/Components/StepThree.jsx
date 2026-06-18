function StepThree() {
  return (
    <>
      <section className="p-4 border border-gray-300 bg-white rounded-lg flex flex-col items-start justify-around gap-3 text-gray-500">
        <h1 className="font-semibold text-2xl ml-2 text-black">Your Details</h1>
        <div className="w-80">
          <p>
            First Name: <span className="text-black">Srijan</span>
          </p>
          <p>
            Last Name: <span className="text-black">Rawat</span>
          </p>
          <p>
            Date of birth: <span className="text-black">10-8-2005</span>
          </p>
          <p>
            Email: <span className="text-black">srijanrawat3@gmail.com</span>
          </p>
        </div>
        <button className="self-end p-2 bg-blue-600 rounded-md text-white cursor-pointer">Submit</button>
      </section>
    </>
  );
}

export default StepThree;