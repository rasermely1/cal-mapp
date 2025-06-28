"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function CalMappSystem() {
  const [activeTab, setActiveTab] = useState("work-order-items")

  // Form state
  const [formData, setFormData] = useState({
    reportNumber: "11734.00-528728-007",
    reportDate: "04/16/2025",
    modifiedDate: "06/18/2025",
    calFreq: "12",
    certificationDate: "06/26/2025",
    recalibrationDate: "06/26/2026",
    manufacturer: "ASHCROFT",
    date: "04/16/2025",
    model: "3020/4500/LXB11000#",
    labCode: "F - Digital Pressure",
    mfgSerial: "004200002",
    custId: "0",
    custSerial: "N/A",
    description: "DIGITAL TEST GAUGE",
    needBy: "07/25/2025",
    tfPoNumber: "T/F PO #: 02566763",
    vendorRma: "232229",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-yellow-300 px-4 py-2 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">CalMapp</h1>
            <p className="text-sm text-black">Calibration Management and Processing Program</p>
            <p className="text-xs text-black">Version 3.0.30 - 09/20/2028</p>
          </div>
          <div className="text-right">
            <Button variant="link" className="text-blue-600 underline">
              User Guide
            </Button>
            <p className="text-sm text-black">Rocky R Pittman</p>
            <Button variant="link" className="text-blue-600 underline">
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Work Order Header */}
      <div className="bg-white px-4 py-2 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Edit Work Order</h2>
        <div className="flex gap-4 text-sm mt-1">
          <span>WO #: 528728</span>
          <span>11734.00 - American Kraft Paper Industries LLC</span>
          <span>
            OSR Doc: <span className="text-blue-600 underline">OSR001610</span>
          </span>
          <span>
            Salesperson: <span className="text-blue-600 underline">Terry Harris</span>
          </span>
          <span>
            Contact: <span className="text-blue-600 underline">Jimmy Ledbetter</span> (870)510-7412
          </span>
          <span className="text-blue-600 underline">Misc Labor Parts</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-200 w-full justify-start rounded-none border-b">
          <TabsTrigger value="account-info">Account Info</TabsTrigger>
          <TabsTrigger value="work-order-contacts">Work Order Contacts</TabsTrigger>
          <TabsTrigger value="work-order-items">Work Order Items</TabsTrigger>
          <TabsTrigger value="quote-defaults">Quote Defaults</TabsTrigger>
          <TabsTrigger value="estimate">Estimate</TabsTrigger>
          <TabsTrigger value="external-files">External Files</TabsTrigger>
          <TabsTrigger value="cert-files">Cert Files</TabsTrigger>
          <TabsTrigger value="warranty">Warranty</TabsTrigger>
          <TabsTrigger value="qf3-data">QF3 Data</TabsTrigger>
        </TabsList>

        <TabsContent value="work-order-items" className="p-4">
          <div className="grid grid-cols-12 gap-4">
            {/* Left Column */}
            <div className="col-span-3 space-y-4">
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <Label>Report #:</Label>
                      <span className="ml-2">11734.00-528728-007</span>
                    </div>
                    <div>
                      <Label>Quote #:</Label>
                      <span className="ml-2 text-blue-600">69790</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Label className="text-xs">Report #:</Label>
                      <Input
                        value={formData.reportNumber}
                        onChange={(e) => handleInputChange("reportNumber", e.target.value)}
                        className="h-6 text-xs"
                      />
                      <Button size="sm" className="h-6 text-xs bg-yellow-200 text-black">
                        New
                      </Button>
                      <Button size="sm" className="h-6 text-xs">
                        Next
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs">Report Date:</Label>
                        <Input
                          value={formData.reportDate}
                          onChange={(e) => handleInputChange("reportDate", e.target.value)}
                          className="h-6 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Caroline J Weir:</Label>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs">Modified Date:</Label>
                      <Input
                        value={formData.modifiedDate}
                        onChange={(e) => handleInputChange("modifiedDate", e.target.value)}
                        className="h-6 text-xs"
                      />
                      <span className="text-xs ml-2">Lindsey D Cox</span>
                    </div>

                    <div>
                      <Label className="text-xs">Item Status:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder="To Factory" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="to-factory">To Factory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">T/F Status:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder="Await Cust Approval Est Fee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="await-approval">Await Cust Approval Est Fee</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">T/F Check:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder="Lindsey D Cox" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lindsey">Lindsey D Cox</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">T/F Follow-up:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Assignment Section */}
              <Card>
                <CardContent className="p-4 space-y-2">
                  <div>
                    <Label className="text-xs">Assigned To:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech1">Technician 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs">Cal Freq:</Label>
                    <Input
                      value={formData.calFreq}
                      onChange={(e) => handleInputChange("calFreq", e.target.value)}
                      className="h-6 text-xs"
                    />
                  </div>

                  <div>
                    <Label className="text-xs">Priority:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue placeholder="Rush" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rush">Rush</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs">Location:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue placeholder="Alexandria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alexandria">Alexandria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs">Division:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue placeholder="Lab" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lab">Lab</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs">Action Code:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue placeholder="R/C/C" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rcc">R/C/C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* METCAL Section */}
              <Card>
                <CardContent className="p-4 space-y-2">
                  <div className="flex gap-2">
                    <Button size="sm" className="h-6 text-xs">
                      Create Datasheet
                    </Button>
                    <Button size="sm" className="h-6 text-xs">
                      Refresh Template
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox id="metcal" />
                    <Label htmlFor="metcal" className="text-xs">
                      METCAL/Metrology.net/External PDF Override
                    </Label>
                  </div>

                  <div>
                    <Label className="text-xs">Sheet to Use:</Label>
                    <Select>
                      <SelectTrigger className="h-6 text-xs">
                        <SelectValue placeholder="Datasheet-C" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="datasheet-c">Datasheet-C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-xs">
                    <div>Datasheet: 528728-007.xlsx</div>
                    <div className="text-blue-600 underline">PDF: 528728-007.pdf</div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <Label className="text-xs">Condition In:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Condition Out:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Technician 1:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Technician 2:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Technician 3:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Add Comment:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs">Repair Comments:</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                  </div>

                  <div className="bg-yellow-200 p-1 text-center text-xs">Expand Comments</div>

                  <div className="space-y-1 text-xs">
                    <div>
                      <Label>Certification Date:</Label>
                      <Input
                        value={formData.certificationDate}
                        onChange={(e) => handleInputChange("certificationDate", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div>
                      <Label>Recalibration Date:</Label>
                      <Input
                        value={formData.recalibrationDate}
                        onChange={(e) => handleInputChange("recalibrationDate", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Lab Temp:</Label>
                        <div className="flex gap-1">
                          <Select>
                            <SelectTrigger className="h-6 text-xs">
                              <SelectValue placeholder="#" />
                            </SelectTrigger>
                          </Select>
                          <Input className="h-6 text-xs" />
                        </div>
                      </div>
                      <div>
                        <Label>Lab RH:</Label>
                        <div className="flex gap-1">
                          <Select>
                            <SelectTrigger className="h-6 text-xs">
                              <SelectValue placeholder="#" />
                            </SelectTrigger>
                          </Select>
                          <Input className="h-6 text-xs" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label>Standards Used:</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                    <div>
                      <Label>Cal Procedure Used:</Label>
                      <Input defaultValue="JM529 Procedure" className="h-6 text-xs" />
                    </div>
                    <div>
                      <Label>Procedure File(s):</Label>
                      <span className="text-blue-600 underline text-xs">JM529_Rev2.0_08-20-24.pdf</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs">Supp Data Files</Label>
                    <div className="text-xs text-gray-500">No data to display</div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="h-6 text-xs bg-yellow-200 text-black">
                      Create Cert
                    </Button>
                    <Button size="sm" className="h-6 text-xs bg-yellow-200 text-black">
                      Recreate Cert
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div>CAL/CERT: $222.75</div>
                      <div>C/C Cost: 222.75</div>
                      <div>17025: 0.00</div>
                      <div>Expedite: 0.00</div>
                    </div>
                    <div>
                      <div>REPAIR: $344.50</div>
                      <div>Tech 1 Hrs</div>
                      <div>0.00</div>
                    </div>
                    <div>
                      <div>ALL: $567.25</div>
                      <div>Tech 2 Hrs</div>
                      <div>0.00</div>
                      <div>Tech 3 Hrs</div>
                      <div>0.00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Column */}
            <div className="col-span-6 space-y-4">
              {/* Product Information */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">General Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Manufacturer:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder={formData.manufacturer} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ashcroft">ASHCROFT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Date:</Label>
                      <Input
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Model:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder={formData.model} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="model1">3020/4500/LXB11000#</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Type:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder="Onsite" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="onsite">Onsite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Lab Code:</Label>
                      <Input
                        value={formData.labCode}
                        onChange={(e) => handleInputChange("labCode", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">PO Line #:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Mfg Serial:</Label>
                      <Input
                        value={formData.mfgSerial}
                        onChange={(e) => handleInputChange("mfgSerial", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">SO Number:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Cust ID:</Label>
                      <Input
                        value={formData.custId}
                        onChange={(e) => handleInputChange("custId", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox id="warranty" />
                        <Label htmlFor="warranty" className="text-xs">
                          Warranty:
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="estimate" />
                        <Label htmlFor="estimate" className="text-xs">
                          Estimate:
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Cust Serial:</Label>
                      <Input
                        value={formData.custSerial}
                        onChange={(e) => handleInputChange("custSerial", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox id="new-equip" />
                        <Label htmlFor="new-equip" className="text-xs">
                          New Equip:
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="used-surplus" />
                        <Label htmlFor="used-surplus" className="text-xs">
                          Used/Surplus:
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">RFID:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="17025" />
                      <Label htmlFor="17025" className="text-xs">
                        17025:
                      </Label>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs">Description:</Label>
                    <Input
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="h-6 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-xs">Capable Loc.:</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                    <div>
                      <Label className="text-xs">Need By:</Label>
                      <Input
                        value={formData.needBy}
                        onChange={(e) => handleInputChange("needBy", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="co-override" />
                        <Label htmlFor="co-override" className="text-xs">
                          C/O Override:
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="date-valid" />
                        <Label htmlFor="date-valid" className="text-xs">
                          Date Valid. Override:
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="multi-parts" />
                        <Label htmlFor="multi-parts" className="text-xs">
                          Multi Parts:
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="std-check" />
                        <Label htmlFor="std-check" className="text-xs">
                          C/O Std Check Override:
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-xs">Accuracy:</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                    <div>
                      <Label className="text-xs">Ready To Bill:</Label>
                      <div className="text-xs text-gray-500">Ready To Bill</div>
                    </div>
                    <div>
                      <Label className="text-xs">Red Tag:</Label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Range(s):</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                    <div>
                      <Label className="text-xs">Option(s):</Label>
                      <Textarea className="h-12 text-xs" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* To Factory Section */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">To Factory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="to-factory" checked />
                        <Label htmlFor="to-factory" className="text-xs">
                          To Factory (T/F):
                        </Label>
                      </div>
                      <Input
                        value={formData.tfPoNumber}
                        onChange={(e) => handleInputChange("tfPoNumber", e.target.value)}
                        className="h-6 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="no-tf-cert" />
                        <Label htmlFor="no-tf-cert" className="text-xs">
                          No T/F Cert:
                        </Label>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs">Cert File:</Label>
                      <Badge className="bg-yellow-200 text-black text-xs">QF3</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Vendor RMA #:</Label>
                      <Input
                        value={formData.vendorRma}
                        onChange={(e) => handleInputChange("vendorRma", e.target.value)}
                        className="h-6 text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Upload Cert:</Label>
                      <div className="flex gap-2">
                        <Input placeholder="Drop file here to upload" className="h-6 text-xs" />
                        <Button size="sm" className="h-6 text-xs">
                          Browse
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Accessories */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Product Accessories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center text-xs text-gray-500">Accessories</div>

                  <div className="grid grid-cols-5 gap-2">
                    <div>
                      <Label className="text-xs">Type:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue placeholder="Containers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="containers">Containers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Accessory:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Material:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Color:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Qty:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                      <Button size="sm" className="h-6 text-xs mt-1 w-full">
                        Add
                      </Button>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs h-6">Type</TableHead>
                        <TableHead className="text-xs h-6">Accessory</TableHead>
                        <TableHead className="text-xs h-6">Material</TableHead>
                        <TableHead className="text-xs h-6">Color</TableHead>
                        <TableHead className="text-xs h-6">Qty</TableHead>
                        <TableHead className="text-xs h-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-xs">Containers</TableCell>
                        <TableCell className="text-xs">Boot</TableCell>
                        <TableCell className="text-xs">Fitting, Attached</TableCell>
                        <TableCell className="text-xs"></TableCell>
                        <TableCell className="text-xs">1</TableCell>
                        <TableCell className="text-xs">
                          <div className="flex gap-1">
                            <Button size="sm" variant="link" className="h-4 text-xs text-red-600">
                              Delete
                            </Button>
                            <Button size="sm" variant="link" className="h-4 text-xs text-blue-600">
                              Del/Add
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs">Pressure</TableCell>
                        <TableCell className="text-xs">Fitting, Attached</TableCell>
                        <TableCell className="text-xs"></TableCell>
                        <TableCell className="text-xs"></TableCell>
                        <TableCell className="text-xs">2</TableCell>
                        <TableCell className="text-xs">
                          <div className="flex gap-1">
                            <Button size="sm" variant="link" className="h-4 text-xs text-red-600">
                              Delete
                            </Button>
                            <Button size="sm" variant="link" className="h-4 text-xs text-blue-600">
                              Del/Add
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Parts Section */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Parts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <Label className="text-xs">Category:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Parts Number:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                    <div>
                      <Label className="text-xs">Description:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                    <div>
                      <Label className="text-xs">Cost:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Qty:</Label>
                      <Input defaultValue="" className="h-6 text-xs" />
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm" className="h-6 text-xs">
                        Add
                      </Button>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs h-6">Category</TableHead>
                        <TableHead className="text-xs h-6">Parts Number</TableHead>
                        <TableHead className="text-xs h-6">Description</TableHead>
                        <TableHead className="text-xs h-6">Cost</TableHead>
                        <TableHead className="text-xs h-6">Qty</TableHead>
                        <TableHead className="text-xs h-6">Total Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-xs text-gray-500" colSpan={6}>
                          No data to display
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Comments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="include-copy" />
                    <Label htmlFor="include-copy" className="text-xs">
                      Include in Copy as New
                    </Label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Type:</Label>
                      <Select>
                        <SelectTrigger className="h-6 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm" className="h-6 text-xs">
                        Add
                      </Button>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs h-6">Type</TableHead>
                        <TableHead className="text-xs h-6">User</TableHead>
                        <TableHead className="text-xs h-6">Date Entered</TableHead>
                        <TableHead className="text-xs h-6">Comment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-xs">T/F</TableCell>
                        <TableCell className="text-xs">Rocky R Pittman</TableCell>
                        <TableCell className="text-xs">06/26/2025 07:18 AM</TableCell>
                        <TableCell className="text-xs">ONSITE: EMAILED JIMMY FOR APPROVAL</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs">T/F</TableCell>
                        <TableCell className="text-xs">Rocky R Pittman</TableCell>
                        <TableCell className="text-xs">06/18/2025 01:09 PM</TableCell>
                        <TableCell className="text-xs">ONSITE: EMAILED JIMMY LEDBETTER FOR APPROVAL</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs">T/F</TableCell>
                        <TableCell className="text-xs">Lindsey D Cox</TableCell>
                        <TableCell className="text-xs">06/18/2025 09:11 AM</TableCell>
                        <TableCell className="text-xs">Sent estimate to Onsite for customer approval</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs">T/F</TableCell>
                        <TableCell className="text-xs">Lindsey D Cox</TableCell>
                        <TableCell className="text-xs">06/18/2025 09:09 AM</TableCell>
                        <TableCell className="text-xs">TF Followup Date changed from 6/13/2025 to 6/23/2025</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs">Estimate</TableCell>
                        <TableCell className="text-xs">Lindsey D Cox</TableCell>
                        <TableCell className="text-xs">06/18/2025 09:09 AM</TableCell>
                        <TableCell className="text-xs">
                          Estimate status set to "Sent to Customer". Emailed to lindseycox@jmtest.com
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="col-span-3 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Delivery Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-xs">
                    <div>Need By: 07/25/2025</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Checkbox id="co-override-right" />
                      <Label htmlFor="co-override-right" className="text-xs">
                        C/O Override:
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="date-valid-right" />
                      <Label htmlFor="date-valid-right" className="text-xs">
                        Date Valid. Override:
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="multi-parts-right" />
                      <Label htmlFor="multi-parts-right" className="text-xs">
                        Multi Parts:
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="std-check-right" />
                      <Label htmlFor="std-check-right" className="text-xs">
                        C/O Std Check Override:
                      </Label>
                    </div>
                    <div className="mt-2">Ready To Bill:</div>
                    <div>Red Tag:</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
