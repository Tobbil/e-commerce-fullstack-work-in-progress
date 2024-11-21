export default function CategoryHeader(props) {
  return (
    <div className="flex text-white text-fs-40 h-60 items-center justify-center">
      <h1>{props.categoryName}</h1>
    </div>
  );
}
