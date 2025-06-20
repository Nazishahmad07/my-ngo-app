"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { submitVolunteerApplication } from "@/app/actions/volunteer"
import { toast } from "@/hooks/use-toast"

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitVolunteerApplication(formData)

      if (result.success) {
        toast({
          title: "Application submitted!",
          description: "Thank you for your interest in volunteering. We'll be in touch soon.",
        })
        e.currentTarget.reset()
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Volunteer Application</CardTitle>
        <CardDescription>Fill out the form below to apply for volunteer opportunities.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location (City, Country)</Label>
            <Input id="location" name="location" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="opportunity">Volunteer Opportunity</Label>
            <Select name="opportunity" required>
              <SelectTrigger id="opportunity">
                <SelectValue placeholder="Select an opportunity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="field">Field Volunteer</SelectItem>
                <SelectItem value="event">Event Volunteer</SelectItem>
                <SelectItem value="skills">Skills-Based Volunteer</SelectItem>
                <SelectItem value="virtual">Virtual Volunteer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Availability</Label>
            <Select name="availability" required>
              <SelectTrigger id="availability">
                <SelectValue placeholder="Select your availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time (35+ hours/week)</SelectItem>
                <SelectItem value="part-time">Part-time (15-34 hours/week)</SelectItem>
                <SelectItem value="occasional">Occasional (5-14 hours/week)</SelectItem>
                <SelectItem value="events">Events Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills & Experience</Label>
            <Textarea
              id="skills"
              name="skills"
              rows={3}
              placeholder="Tell us about your relevant skills and experience"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="motivation">Motivation</Label>
            <Textarea
              id="motivation"
              name="motivation"
              rows={3}
              placeholder="Why do you want to volunteer with Hope Foundation?"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" name="terms" required />
            <Label htmlFor="terms" className="text-sm">
              I agree to the volunteer terms and conditions and understand that submitting this application does not
              guarantee placement.
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

