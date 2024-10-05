import React from "react";
import { FaFirstOrder } from "react-icons/fa";
import { RiOrderPlayFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Support() {
  return (
    <div className="lg:px-24 md:px-16 sm:px-8 px-8 pt-20 dark:bg-[#262d34] flex flex-col item-center justify-center shadow  w-full">
      <div className="lg:w-1/2 mx-auto mb-20 md:w-2/3 sm:w-full w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>When do you post new videos?</AccordionTrigger>
            <AccordionContent>
              <p className="px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, consequatur delectus ipsam libero architecto quo
                soluta qui beatae porro maxime at. Rerum magni esse repellat
                quas illum nesciunt atque aspernatur similique ea deserunt nemo
                voluptatem deleniti cumque vero eum cum doloribus, reprehenderit
                quaerat tempora sunt quasi quidem ut voluptas perferendis.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>When do you post new videos?</AccordionTrigger>
            <AccordionContent>
              <p className="px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, consequatur delectus ipsam libero architecto quo
                soluta qui beatae porro maxime at. Rerum magni esse repellat
                quas illum nesciunt atque aspernatur similique ea deserunt nemo
                voluptatem deleniti cumque vero eum cum doloribus, reprehenderit
                quaerat tempora sunt quasi quidem ut voluptas perferendis.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>When do you post new videos?</AccordionTrigger>
            <AccordionContent>
              <p className="px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, consequatur delectus ipsam libero architecto quo
                soluta qui beatae porro maxime at. Rerum magni esse repellat
                quas illum nesciunt atque aspernatur similique ea deserunt nemo
                voluptatem deleniti cumque vero eum cum doloribus, reprehenderit
                quaerat tempora sunt quasi quidem ut voluptas perferendis.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
