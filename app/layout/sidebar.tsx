
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import data from '@/app/data/data2.json';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  questionStatus: { legend: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  questionStatus,
}) => {
  const { questions } = data;
  const [IsSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const router = useRouter();

  const handleSubmission = () => {
    setIsSubmitDialogOpen(false);
    router.push('/instructions/Dashboard/result'); 
  };

  const handleCancel = () => {
    setIsSubmitDialogOpen(false);
  };

  return (
    <div className="w-full lg:w-1/3 bg-gray-300 shadow-md rounded-lg p-4 mt-4 lg:mt-0 flex flex-col justify-between">
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center">
            <p className="text-sm font-bold">Renukadevi E</p>
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="text-xs">
            You are viewing <strong>Daily Current Affairs</strong> Section
          </p>
        </div>
        <div className="mb-8 text-center">
          <h4 className="text-lg font-semibold mb-2">Question Palette</h4>
          <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto p-2">
            {questions.map((question, index) => (
              <button
                key={question.id}
                className={`py-2 px-4 rounded ${
                  questionStatus[index]?.legend === 'answered'
                    ? 'bg-green-500 text-white'
                    : questionStatus[index]?.legend === 'notAnswered'
                    ? 'bg-red-500 text-white'
                    : questionStatus[index]?.legend === 'marked'
                    ? 'bg-purple-500 text-white'
                    : questionStatus[index]?.legend === 'markedAndAnswered'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-2">Legend</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mb-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>Not Answered</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
            <span>Marked</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
            <span>Marked & Answered</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
            <span>Not Visited</span>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  Instruction
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mr-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button  className="w-full">
                  Questions Paper
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex-1">
            <Dialog open={IsSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => setIsSubmitDialogOpen(true)}>
                  Submit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Are You Sure You Want To Submit This Test?</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
                  <Button type="submit" onClick={handleSubmission}>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
