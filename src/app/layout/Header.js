export default function Header(props) {
  return (
    <>
      <header className="w-[screen] flex flex-col bg-[#141414] items-center">
        <div className="pt-[2rem]">
          {props.children}
        </div>
      </header>
    </>
  );
}
