import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import Starttestbutton from "./components/Starttestbutton";
export default function CardWithForm() {

  return (
    <div className="p-20">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>June 23 Current Affairs 9</CardTitle>
        <CardDescription>Daily Current Affairs: 5</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Type:Practice</Label>
             
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="time-limit">Time Limit:10</Label>
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
   <Starttestbutton/>
        <Button>View as Pdf</Button>
      </CardFooter>
    </Card>
    </div>
  );
}
