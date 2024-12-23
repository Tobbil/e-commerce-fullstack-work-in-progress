import { countAccessories } from "../../../utils/utils";

export default function InTheBox(props) {
  const accessoriesCounted = countAccessories(props.item.accessories);
  console.log(typeof accessoriesCounted);
  return (
    <>
      <div className="w-[33rem] flex flex-col">
        <h1 className="text-fs-32 pl-40 justify-self-center mb-6">
          IN THE BOX
        </h1>
        {Object.entries(accessoriesCounted).map(([key, accessory], index) => (
          <div key={index} className="flex flex-row pl-40">
            <span className="text-fs-15 w-[2rem] text-orange">
              {accessory.quantity}x
            </span>
            <span className="text-fs-15 opacity-50">{accessory.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
