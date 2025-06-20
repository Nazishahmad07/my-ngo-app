import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText } from "lucide-react"

export function DonationHistory() {
  const donations = [
    {
      id: "DON-001",
      date: "2023-05-15",
      amount: "$100.00",
      program: "Clean Water Initiative",
      status: "Completed",
      receipt: true,
    },
    {
      id: "DON-002",
      date: "2023-06-20",
      amount: "$250.00",
      program: "Education for All",
      status: "Completed",
      receipt: true,
    },
    {
      id: "DON-003",
      date: "2023-07-10",
      amount: "$75.00",
      program: "Healthcare Access",
      status: "Completed",
      receipt: true,
    },
    {
      id: "DON-004",
      date: "2023-08-05",
      amount: "$500.00",
      program: "General Fund",
      status: "Completed",
      receipt: true,
    },
    {
      id: "DON-005",
      date: "2023-09-15",
      amount: "$150.00",
      program: "Women's Empowerment",
      status: "Completed",
      receipt: true,
    },
    {
      id: "DON-006",
      date: "2023-10-01",
      amount: "$175.00",
      program: "Environmental Conservation",
      status: "Completed",
      receipt: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donation History</CardTitle>
        <CardDescription>View your donation history and download tax receipts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download All Receipts
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Tax Summary
            </Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="font-medium">{donation.id}</TableCell>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                    <TableCell>{donation.program}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {donation.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {donation.receipt && (
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download receipt</span>
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

