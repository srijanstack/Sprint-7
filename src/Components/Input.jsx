import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  Icon,
  name,
  id,
  type,
  placeholder,
  register,
  error,
}) {

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (

    <div className="w-80">

      <label
        htmlFor={id}
        className="text-md block mb-1"
      >
        {name}
      </label>

      <div className="relative border-2 border-gray-300 rounded-lg flex items-center gap-2 px-3">

        <Icon
          size={22}
          className="text-gray-400 shrink-0"
        />

        <input

          id={id}

          type={inputType}

          placeholder={placeholder}

          className="h-12 w-full outline-none"

          {...register}

        />

        {type === "password" && (

          <button

            type="button"

            onClick={() =>
              setShowPassword((prev) => !prev)
            }

            className="cursor-pointer text-gray-400 hover:text-gray-700"

          >

            {showPassword
              ? <EyeOff size={25} />
              : <Eye size={25} />
            }

          </button>

        )}

      </div>

      {error && (

        <p className="text-sm text-red-500 mt-1">

          {error.message}

        </p>

      )}

    </div>

  );
}

export default Input;