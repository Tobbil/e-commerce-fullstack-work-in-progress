export default function Header(props) {
  return (
    <>
      <header className="m-0 w-screen bg-[#141414]">
        <div className="relative pt-[2rem] pr-[10rem] pl-[10rem]">
        {props.children}
        </div>
      </header>
    </>
  );
}
