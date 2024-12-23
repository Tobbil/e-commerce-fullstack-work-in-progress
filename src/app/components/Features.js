export default function Features(props) {
  const paragraphs = props.item.features.split("\\n");
  return (
    <div className="flex flex-col">
      <h1 className="text-fs-32 w-[33rem]">FEATURES</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-fs-15 mt-6 opacity-50 w-[33rem]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
