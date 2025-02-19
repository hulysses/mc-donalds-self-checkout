import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ConsumptionOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionOption = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  option,
}: ConsumptionOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[78px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`${slug}/menu?consumptionOption=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionOption;
