import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function VolunteerActivities() {
  const activities = [
    {
      id: "VOL-001",
      date: "2023-06-15",
      activity: "Community Cleanup",
      hours: 4,
      status: "Completed",
      location: "Central Park",
    },
    {
      id: "VOL-002",
      date: "2023-07-10",
      activity: "Fundraising Event",
      hours: 6,
      status: "Completed",
      location: "City Hall",
    },
    {
      id: "VOL-003",
      date: "2023-08-05",
      activity: "Teaching Assistant",
      hours: 8,
      status: "Completed",
      location: "Hope School",
    },
    {
      id: "VOL-004",
      date: "2023-09-20",
      activity: "Food Distribution",
      hours: 3,
      status: "Completed",
      location: "Community Center",
    },
    {
      id: "VOL-005",
      date: "2023-10-15",
      activity: "Website Development",
      hours: 10,
      status: "In Progress",
      location: "Remote",
    },
    {
      id: "VOL-006",
      date: "2023-11-05",
      activity: "Tree Planting",
      hours: 5,
      status: "Upcoming",
      location: "City Park",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Volunteer Activities</CardTitle>
        <CardDescription>Track your volunteer hours and upcoming opportunities.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Total Hours: 36</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Activities: 6</span>
              </div>
            </div>
            <Button>Find Opportunities</Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.id}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.activity}</TableCell>
                    <TableCell>{activity.hours}</TableCell>
                    <TableCell>{activity.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          activity.status === "Completed"
                            ? "default"
                            : activity.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {activity.status}
                      </Badge>
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

