import Input from "./Input";
import { Calendar, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

function StepOne() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <section className="p-4 border border-gray-300 bg-white rounded-lg flex flex-col items-start justify-around gap-3">
        <h1 className="font-semibold text-2xl ml-2">Basic Info</h1>
        <Input
          Icon={User}
          name={"First Name"}
          id={"firstName"}
          type={"text"}
          placeholder="Enter your first name"
          register={register("firstName", {
            required: "Required",
          })}
          error={errors.firstName}
        />

        <Input
          Icon={User}
          name={"Last Name"}
          id={"lastName"}
          type={"text"}
          placeholder="Enter your last name"
          register={register("firstName", {
            required: "Required",
          })}
          error={errors.firstName}
        />

        <Input
          Icon={Calendar}
          name={"Date of birth"}
          id={"dob"}
          type={"date"}
          placeholder="Enter your Dob"
          register={register("firstName", {
            required: "Required",
          })}
          error={errors.firstName}
        />
      </section>
    </>
  );
}

export default StepOne;
