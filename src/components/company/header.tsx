import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex w-full flex-wrap-reverse justify-between py-4 sm:py-10 md:flex-nowrap">
      <div className="flex gap-7">
        <Image src={Logo} alt="Sixteen Logo" />
        <div className="my-auto">
          <div className="mb-1.5 flex gap-3">
            <Button variant="destructive">Remove</Button>
            <Button variant="outline">Change Photo</Button>
          </div>
          <span className="text-sm text-gray-400">
            or drag and drop (SVG, PNG, JPG)
          </span>
        </div>
      </div>
      <div className="mb-8 flex w-full gap-3 sm:mb-0 sm:w-max [&>button]:w-full">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Save changes</Button>
      </div>
    </div>
  );
}
