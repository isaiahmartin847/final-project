interface Props {
  title: string;
  text: string;
}

const InfoBlock = ({ title, text }: Props) => {
  return (
    <div className="w-screen px-5 max-w-[900px] space-y-1">
      <h1 className="text-center font-semibold text-3xl lg:text-[40px]">
        {title}
      </h1>
      <div className="">
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
