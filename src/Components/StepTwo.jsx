import Input from "./Input";
import { Mail, Lock } from "lucide-react";
import { useFormContext } from "react-hook-form";

function StepTwo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <section className="p-4 border border-gray-300 bg-white rounded-lg flex flex-col items-start justify-around gap-3">
        <h1 className="font-semibold text-2xl ml-2">Account Details</h1>
        <Input
          Icon={Mail}
          name={"Email"}
          id={"email"}
          type={"email"}
          placeholder="Enter your email"
          register={register("email", {
            required: "Required",
          })}
          error={errors.email}
        />

        <Input
          Icon={Lock}
          name={"Password"}
          id={"passWord"}
          type={"password"}
          placeholder="Enter password"
          register={register("passWord", {
            required: "Required",
          })}
          error={errors.passWord}
        />

        <Input
          Icon={Lock}
          name={"Confirm Password"}
          id={"cPassword"}
          type={"password"}
          placeholder="Confirm Password"
          register={register("cPassword")}
          error={errors.cPassword}
        />
      </section>
    </>
  );
}

export default StepTwo;
