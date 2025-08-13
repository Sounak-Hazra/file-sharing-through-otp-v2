import { useRef } from "react";

const OtpInput = ({ length = 10, onChange }) => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const otp = inputs.current.map((input) => input?.value || "").join("");
    onChange?.(otp);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (!pasteData) return;

    const chars = pasteData.slice(0, length).split("");
    chars.forEach((char, idx) => {
      if (inputs.current[idx]) {
        inputs.current[idx].value = char;
      }
    });

    const newOtp = chars.join("");
    onChange?.(newOtp);

    const nextIndex = Math.min(chars.length, length - 1);
    inputs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[95vw] mx-auto">
      {[...Array(length)].map((_, index) => (
        <input
          key={index}
          maxLength="1"
          ref={(el) => (inputs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-semibold rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-md"
        />
      ))}
    </div>
  );
};

export default OtpInput;
