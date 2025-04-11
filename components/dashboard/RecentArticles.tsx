import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { GiHorizonRoad } from "react-icons/gi";
import { DeleteIcon, Ellipsis, PenIcon } from "lucide-react";
import Link from "next/link";

export const RecentArticles = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Recent Articles</CardTitle>
        <Button
          variant={"ghost"}
          className="text-muted-foreground cursor-pointer"
          size={"sm"}
        >
          View All &#8594;
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Title</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Likes</TableHead>
              <TableHead className="text-center">Comments</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="text-left">this is title</TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={"secondary"}
                  className="rounded-full bg-green-200 text-green-800"
                >
                  Published
                </Badge>
              </TableCell>
              <TableCell className="text-center">200</TableCell>
              <TableCell className="text-center">30</TableCell>
              <TableCell className="text-center">20 feb</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="cursor-pointer bg-transparent hover:bg-transparent"
                    >
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      {/* edit button  */}
                      <Link
                        href={`/dashboard/articles/${123}/edit`}
                        className="cursor-pointer"
                      >
                        <Button
                          variant={"ghost"}
                          className="flex gap-2 items-center justify-start w-full cursor-pointer"
                        >
                          <PenIcon className="h-4 w-4" /> Edit
                        </Button>
                      </Link>

                      {/* delete button  */}
                      <DeleteButton />
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const DeleteButton = () => {
  return (
    <form>
      <Button
        variant={"ghost"}
        className="flex gap-2 items-center justify-start w-full cursor-pointer"
      >
        <DeleteIcon className="h-4 w-4" /> Delete
      </Button>
    </form>
  );
};
