import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Image from "next/image";

const ChoosePayment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[56px] text-base font-bold">Join event</Button>
      </DialogTrigger>
      <DialogContent className="w-[400px] bg-accent border-accent text-white p-8">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <div>
            <div className="flex justify-center">
              <Image
                width={140}
                height={140}
                src={"/images/payment-icon.png"}
                alt="payment icon"
              />
            </div>
            <h3 className="text-[32px] text-[#FDE8CD] text-center font-bold">
              Choose Payment Method
            </h3>
          </div>
          <div className="mt-8">
            <RadioGroup defaultValue="bkash">
              <div className="flex space-x-[14px]">
                <RadioGroupItem value="bkash" id="bkash1" className="mt-1.5" />
                <Label htmlFor="bkash1">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[20px]">bKash</p>
                      <Image
                        width={22}
                        height={22}
                        src={"/images/bkash-icon.png"}
                        alt="bkash icon"
                      />
                    </div>
                    <p className="mt-1.5 text-base font-normal max-w-[85%]">
                      Send the payment now via bKash to confirm your spot
                      instantly.
                    </p>
                  </div>
                </Label>
              </div>
              <div className="flex space-x-[14px]">
                <RadioGroupItem value="cash" id="cash1" className="mt-1.5" />
                <Label htmlFor="cash1">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[20px]">Cash</p>
                      <Image
                        width={22}
                        height={22}
                        src={"/images/cash-icon.png"}
                        alt="cash icon"
                      />
                    </div>
                    <p className="mt-1.5 text-base font-normal max-w-[85%]">
                      Pay the event fee directly to the host before the game
                      starts.
                    </p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter className="mt-8">
          <Button
            type="submit"
            className="h-[56px] bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 text-white w-full text-lg font-bold"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChoosePayment;
