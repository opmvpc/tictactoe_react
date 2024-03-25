import { MouseEventHandler } from "react";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: any;
}) {
  return (
    <button
      onClick={onSquareClick}
      className="border border-black float-left -mr-[1px] -mt-[1px] p-0  size-10 leading-10 text-center"
    >
      {value}
    </button>
  );
}
