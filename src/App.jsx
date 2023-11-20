import { useState } from "react";
import BirthDays from "./data";
import BirthdaysList from "./components/BirthdaysList";
import Title from "./components/Title";
function App() {
  const [birthdays, setBirthdays] = useState(BirthDays);

  const handleClear = () => {
    setBirthdays("");
  };

  const handleReset = () => {
    setBirthdays(BirthDays);
  };

  return (
    <div className="cite-container  font-poppins mt-[40px] w-[600px] rounded-[8px] bg-white shadow-[#0000000F]  shadow-2xl">
      <Title birthdaysCount={birthdays.length} />
      <BirthdaysList setBirthdays={setBirthdays} birthdays={birthdays} />
      <div>
        {birthdays.length > 0 ? (
          <button
            onClick={() => handleClear()}
            className="w-[536px] h-[29px] bg-[#D946EF] text-white rounded-[4px] ml-[12px] mb-5"
          >
            Clear All
          </button>
        ) : (
          <button
            onClick={() => handleReset()}
            className=" w-[536px] h-[29px] bg-[#4675EF] text-white rounded-[4px] ml-[12px] mb-5"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
