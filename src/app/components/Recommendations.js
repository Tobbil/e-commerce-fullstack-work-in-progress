import RecommendedItem from "./RecommendedItem";

export default function Recommendations(props) {
  // TODO: ERROR HANDLING
  // Create a list of valid numbers excluding props.itemId
  const max = 6; // CHANGE TO NUMBER OF IDS IN DB
  const validNumbers = [];
  for (let i = 1; i <= max; i++) {
    if (i !== Number(props.itemId)) {
      validNumbers.push(i);
    }
  }

  // Randomly select 3 unique numbers from the valid numbers
  const randomIds = [];
  while (randomIds.length < 3) {
    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    const randomNum = validNumbers[randomIndex];
    if (!randomIds.includes(randomNum)) {
      randomIds.push(randomNum);
    }
  }

  console.log(randomIds);

  return (
    <>
      <h1 className="text-fs-32 text-center mt-20">YOU MAY ALSO LIKE</h1>
      <div className="flex flex-col md:flex-row w-[20rem] md:w-[43rem] lg:w-[69rem] self-center md:gap-10 lg:gap-20">
        {randomIds.map((id, index) => (
          <RecommendedItem key={index} itemId={id} />
        ))}
      </div>
    </>
  );
}
