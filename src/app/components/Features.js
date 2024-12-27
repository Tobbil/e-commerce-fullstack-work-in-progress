export default function Features(props) {
  const paragraphs = props.item.features.split("\\n");
  return (
    <div className="flex flex-col w-[20rem] md:w-[33rem]">
      <h1 className="text-fs-32 lg:w-[33rem]">FEATURES</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-fs-15 mt-6 opacity-50 md:w-full lg:w-[33rem]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
