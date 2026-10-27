'use client'
import Link from "next/link";
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CategoryManagementPage() {
  return (
    <Card className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Category Management</h1>
        <p className="text-muted-foreground">Manage your categories here.</p>
      </div>

      <div className="flex justify-end mb-4">
        <Link href="/admin/artikel/form">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
            <Plus className="mr-2 h-4 w-4" /> FORM
          </Button>
        </Link>
      </div>

      <Table>
        <TableCaption>A list of your categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>CAT001</TableCell>
            <TableCell>Technology</TableCell>
            <TableCell>technology</TableCell>
            <TableCell>Articles about technology</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}