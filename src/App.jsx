import { useState } from "react";
import Header from "./Components/Header";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./Validator/schema";

function App() {
  const [formNumber, setFormNumber] = useState(3);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      passWord: "",
      cPassword: "",
    },
  });
  return (
    <>
      <Header />
      <main className="flex flex-col p-20 justify-center items-center bg-gray-100 gap-3">
        <FormProvider {...methods}>
          {formNumber === 1 && <StepOne />}
          {formNumber === 2 && <StepTwo />}
          {formNumber === 3 && <StepThree />}
        </FormProvider>
        <div className="px-7 py-4 flex items-center justify-between bg-white w-90 rounded-lg border border-gray-300">
          <button
            className="w-20 py-1 rounded-lg bg-blue-600 font-medium text-white cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => setFormNumber(1)}
          >
            Previous
          </button>
          <button
            className="w-20 py-1 rounded-lg bg-blue-600 font-medium text-white cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => setFormNumber(2)}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
