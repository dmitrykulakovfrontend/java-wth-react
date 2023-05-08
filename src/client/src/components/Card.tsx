type Props = {
  title: string;
  value: string;
  difference?: {
    value: number;
    positive: boolean;
  };
};

function Card({ title, value, difference }: Props) {
  return (
    <div>
      {title}
      {value}
      {difference?.value}
      {difference?.positive}
    </div>
  );
}

export default Card;
