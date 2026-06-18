import Input from "./Input";
import { Mail, Lock } from "lucide-react";

function StepTwo() {
  return (
    <>
      <section className="p-4 border border-gray-300 bg-white rounded-lg flex flex-col items-start justify-around gap-3">
        <h1 className="font-semibold text-2xl ml-2">Account Details</h1>
        <Input
          Icon={Mail}
          name={"Email"}
          id={"eMail"}
          type={"email"}
          placeholder="Enter your email"
        />

        <Input
          Icon={Lock}
          name={"Password"}
          id={"passWord"}
          type={"Password"}
          placeholder="Enter password"
        />

        <Input
          Icon={Lock}
          name={"Confirm Password"}
          id={"cPassword"}
          type={"Password"}
          placeholder="Confirm Password"
        />
      </section>
    </>
  );
}

export default StepTwo;
