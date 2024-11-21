export default function Body(props) {
  return (
    <>
      <main className="flex flex-col">
        {props.children}
      </main>
    </>
  );
}
