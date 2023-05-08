import ArrowUp from "@/assets/images/icons/arrow-up.svg";
import ArrowDown from "@/assets/images/icons/arrow-down.svg";
type Props = {
  title: string;
  value: number;
  difference?: {
    value: string;
    positive: boolean;
  };
  currency?: boolean;
};

function Card({ title, value, difference, currency = true }: Props) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",

    maximumFractionDigits: 0, // (causes 2500.99 to be printed as 2,501 R)
  });
  const displayValue = currency
    ? formatter.format(+value).replace(/\s(?=\d)/g, ",")
    : value;

  return (
    <div className="flex flex-col min-w-[200px] gap-4 p-4 bg-white border rounded-lg shadow-inner">
      <span className="text-sm text-gray-500">{title}</span>
      <div className="flex justify-between gap-4">
        <span className="text-lg font-bold">{displayValue}</span>
        {difference && (
          <span
            className={
              difference.positive
                ? "text-green-500 flex justify-center items-center gap-2"
                : "text-red-500 flex justify-center items-center gap-2"
            }
          >
            {difference.value}
            {difference.positive ? <ArrowUp /> : <ArrowDown />}
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
