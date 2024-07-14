import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Starttestbutton from '../app/components/Starttestbutton';

const page: React.FC = () => {
  return (
    <div className="p-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>June 23 Current Affairs 9</CardTitle>
          <CardDescription>Daily Current Affairs: 5</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="type">Type: Practice</Label>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time-limit">Time Limit: 10 minutes</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Starttestbutton />
          <Button>View as PDF</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
