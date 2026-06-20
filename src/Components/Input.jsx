function Input({
  Icon,
  name,
  id,
  type,
  placeholder,
  handleChange,
  register,
  error,
}) {
  return (
    <div>
      <label htmlFor={id} className="text-md">
        {name}
      </label>
      <div className="w-80 border-gray-300 border-2 flex items-center gap-1 p-2 rounded-lg">
        <Icon size={30} className="text-gray-400" />
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="h-8 outline-0 w-full"
          onChange={(e) => handleChange(e)}
           {...register}
        />
         {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}

export default Input;
