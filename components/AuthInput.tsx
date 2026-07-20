type AuthInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthInput({
  type,
  placeholder,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none focus:border-blue-500"
    />
  );
}