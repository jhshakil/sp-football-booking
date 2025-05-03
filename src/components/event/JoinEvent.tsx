import ChoosePayment from "./ChoosePayment";

const JoinEvent = () => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-6">
      <div className="border border-border px-4 py-[18px] rounded-2xl flex justify-between gap-3">
        <p className="text-base text-active font-medium">6 spots left</p>
        <p className="text-lg font-bold">
          320tk /player{" "}
          <span className="text-sm font-normal text-[#808080]">(both)</span>
        </p>
      </div>
      <ChoosePayment />
    </div>
  );
};

export default JoinEvent;
