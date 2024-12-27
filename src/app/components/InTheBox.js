import { countAccessories } from "../../../utils/utils";

export default function InTheBox(props) {
  const accessoriesCounted = countAccessories(props.item.accessories);
  return (
    <>
      <div className="md:w-[33rem] flex flex-col md:flex-row lg:flex-col">
        <h1 className="text-fs-32 w-full lg:pl-40 justify-self-center mb-6">
          IN THE BOX
        </h1>
        <div className="flex flex-col">
          {Object.entries(accessoriesCounted).map(([key, accessory], index) => (
            <div key={index} className="flex flex-row md:pl-20 lg:pl-40">
              <span className="text-fs-15 w-[2rem] text-orange">
                {accessory.quantity}x
              </span>
              <span className="text-fs-15 w-[10rem] opacity-50">{accessory.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
