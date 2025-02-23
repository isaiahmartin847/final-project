interface Props {
  title: string;
  text: string;
}

const InfoBlock = ({ title, text }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="pl-4 w-3/4">{text}</p>
    </div>
  );
};

export default InfoBlock;
