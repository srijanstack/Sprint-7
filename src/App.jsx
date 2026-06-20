import { useState } from "react";
import Header from "./Components/Header";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import FormNavigation from "./Components/FormNavigation";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./Validator/schema";

function App() {
  const [formNumber, setFormNumber] = useState(1);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      passWord: "",
      cPassword: "",
    },
  });

  const { trigger } = methods;

  const [firstName, lastName, dob] = useWatch({
    control: methods.control,
    name: ["firstName", "lastName", "dob"],
  });

  const [email, passWord, cPassword] = useWatch({
    control: methods.control,
    name: ["email", "passWord", "cPassword"],
  });

  const disableStep2 = !email || !passWord || !cPassword;

  const disableStep1 = !firstName || !lastName || !dob;

  const isDisabled = formNumber === 1 ? disableStep1 : disableStep2;

  const stepFields = {
    1: ["firstName", "lastName", "dob"],
    2: ["email", "passWord", "cPassword"],
  };

  const next = async () => {
    const valid = await trigger(stepFields[formNumber]);

    if (valid) {
      setFormNumber((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (formNumber > 1) {
      setFormNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col p-20 justify-center items-center bg-gray-100 gap-3 min-h-screen">
        <FormProvider {...methods}>
          {formNumber === 1 && <StepOne />}
          {formNumber === 2 && <StepTwo />}
          {formNumber === 3 && <StepThree />}
        </FormProvider>
        <FormNavigation
          formNumber={formNumber}
          previous={previous}
          next={next}
          isDisabled={isDisabled}
        />
      </main>
    </>
  );
}

export default App;
