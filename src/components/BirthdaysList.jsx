function BirthdaysList({ birthdays, setBirthdays }) {
  const handleDelete = (id) => {
    setBirthdays((prev) => {
      return prev.filter((birthday) => {
        return birthday.id !== id;
      });
    });
  };

  return (
    <ul>
      {birthdays &&
        birthdays.map((birthday) => {
          return (
            <li
              className="ml-[10px] mb-[24px] list-none flex items-center justify-between"
              key={birthday.id}
            >
              <div className="flex gap-[12px] items-center ">
                <img
                  className="object-cover w-[75px] h-[75px] rounded-[50%]"
                  src={birthday.image}
                  alt=""
                />
                <div>
                  <h3 className="text-2xl mb-[8px]">{birthday.name}</h3>
                  <p className="text-[#64748B]">{birthday.age} years</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(birthday.id)}
                className="w-[133px] mr-[10px] h-[28px] bg-[#E81313] text-white rounded-[4px] mt-[-15px]"
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default BirthdaysList;
