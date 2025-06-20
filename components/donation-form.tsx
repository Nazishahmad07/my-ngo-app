"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { processDonation } from "@/app/actions/donations"
import { toast } from "@/hooks/use-toast"

export function DonationForm() {
  const [amount, setAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isMonthly, setIsMonthly] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const finalAmount = amount === "custom" ? customAmount : amount

    try {
      const result = await processDonation({
        amount: Number.parseFloat(finalAmount),
        recurring: isMonthly,
        formData: new FormData(e.target as HTMLFormElement),
      })

      if (result.success) {
        toast({
          title: "Thank you for your donation!",
          description: "Your contribution will help us make a difference.",
        })
        // Redirect to thank you page or payment processor would happen here
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
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Support our programs around the world.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Donation Type</Label>
            <Tabs
              defaultValue="onetime"
              className="w-full"
              onValueChange={(value) => setIsMonthly(value === "monthly")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="onetime">One-time</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-2">
            <Label>Donation Amount</Label>
            <RadioGroup defaultValue="50" className="grid grid-cols-3 gap-2" value={amount} onValueChange={setAmount}>
              {["25", "50", "100", "250", "500", "custom"].map((value) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={`amount-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`amount-${value}`}
                    className={`flex h-12 w-full cursor-pointer items-center justify-center rounded-md border text-sm font-medium ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      amount === value ? "border-primary bg-primary text-primary-foreground" : "border-input"
                    }`}
                  >
                    {value === "custom" ? "Custom" : `$${value}`}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {amount === "custom" && (
              <div className="mt-2">
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-muted-foreground">$</span>
                  </div>
                  <Input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="1"
                    className="pl-8"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    required={amount === "custom"}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? "Processing..."
              : `Donate ${amount === "custom" ? (customAmount ? `$${customAmount}` : "") : `$${amount}`} ${isMonthly ? "Monthly" : ""}`}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-center text-xs text-muted-foreground">
        <p>All donations are tax-deductible to the extent allowed by law.</p>
        <p>Hope Foundation is a registered 501(c)(3) nonprofit organization.</p>
      </CardFooter>
    </Card>
  )
}

