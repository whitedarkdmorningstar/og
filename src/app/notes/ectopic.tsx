"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Content, getTodayDate } from "./content"

export default function EctopicNote() {
  return (
    <Content
      value={"ectopic"}
      title={"Ectopic Pregnancy"}
      description={
        "Patient Name, Age, Register Number, OT Time from _____ to _____"
      }
    >
      <p>Date: {getTodayDate()}</p>
      <p>Surgeon _____</p>
      <p>Assistant _____</p>
      <p>Nurse _____</p>
      <p>Anaesthetist _____</p>
      <p>Anaesthesis: SAB</p>
      <p>Pre-operative Diagnosis: _____</p>
      <p>Post-operative Diagnosis: _____</p>
      <Tabs defaultValue={"intact"}>
        <TabsList variant={"line"} className={"my-3"}>
          <TabsTrigger value={"intact"}>Intact</TabsTrigger>
          <TabsTrigger value={"rupture"}>Rupture</TabsTrigger>
        </TabsList>
        <TabsContent value={"intact"}>
          <p>Name of Operation: Left/Right Salpingectomy</p>
          <p>Tissues Removed: _____</p>
          <h4>Operation Findings and Procedures</h4>
          <p>
            Under asepctic condition & SAB, Pfannenstiel (lower transverse)
            incision was done & Incision through layer by layer up to
            peritoneum.
          </p>
          <h4>Findings</h4>
          <ul>
            <li>Haemoperitoneum ~ _____ ml</li>
            <li>Adhesion (+/-) between peritoneum & intestine</li>
            <li>
              Left/Right tubal ectopic pregnancy __ x __ cm at ampullary region
            </li>
            <li>Left tube & ovary: ?Normal</li>
            <li>Right tube & ovary: ?Normal</li>
            <li>Uterus: Normal</li>
          </ul>
          <h4>Procedure</h4>
          <ul>
            <li>Left/Right Salpingectomy was done.</li>
            <li>Haemostasis was secured.</li>
            <li>Swabs and instruments were correctly.</li>
            <li>Abdomen was closed back in layers.</li>
          </ul>
          <h4>Post-Operative Treatment</h4>
          <ul>
            <li>Note vital signs (BP _____, PR _____, SPO2 _____)</li>
            <li>NS 1, RL 1, DS 1 over 24 H</li>
            <li>IV Cefuroxime 1.2 G (ATD) 12 H x 3 Days</li>
            <li>IV Metronidazole 500mg 8 H x 3 Days</li>
            <li>
              After IV Antibiotics
              <ul>
                <li>PO Doxycycline 100 mg BD x 5 days</li>
                <li>PO Metronidazole 200 mg TDS x 5 days</li>
              </ul>
            </li>
            <li>IV Azeptil 500 mg 8 H x 24 H</li>
            <li>IV Keto 30 mg (dil) 12 H x 24 H</li>
            <li>PO Azithromycin 1 G to her and her partner</li>
            <li>Cathether for 24 H</li>
            <li>No STO/3rd POD STO</li>
            <li>Tolerable diet</li>
            <li>Shift to Gynae Ward</li>
            <li>Sent tissues for histopathology</li>
          </ul>
        </TabsContent>
        <TabsContent value={"rupture"}>
          <p>Name of Operation: Laparotomy & Proceed</p>
          <p>Tissues Removed: _____</p>
          <h4>Operation Findings and Procedures</h4>
          <p>
            Under asepctic condition & SAB, Pfannenstiel (lower transverse)
            incision was done & Incision through layer by layer up to
            peritoneum.
          </p>
          <h4>Findings</h4>
          <ul>
            <li>Haemoperitoneum ~ _____ ml</li>
            <li>
              Left/Right tubal ectopic pregnancy __ x __ cm at ampullary region
            </li>
            <li>
              Ruptured site (+/-) __ x __ cm, Active bleeding from ruptured site
              (+/-)
            </li>
            <li>Left ovary: Normal</li>
            <li>Right tube & ovary: Normal</li>
            <li>Uterus: Normal</li>
          </ul>
          <h4>Procedure</h4>
          <ul>
            <li>Left/Right Salpingectomy was done.</li>
            <li>Haemostasis was secured.</li>
            <li>Checked swabs and instruments correctly.</li>
            <li>Abdomen was closed back in layers.</li>
          </ul>
          <h4>Post-Operative Treatment</h4>
          <ul>
            <li>Note vital signs (BP _____, PR _____, SPO2 _____)</li>
            <li>Issued 1 Unit of Packed Cell at OT</li>
            <li>NS 1, RL 1, DS 1 over 24 H</li>
            <li>IV Cefuroxime 1.2 G (ATD) 12 H x 48 H</li>
            <li>IV Metronidazole 500mg 8 H x 48 H</li>
            <li>
              After IV Antibiotics
              <ul>
                <li>PO Doxycycline 100 mg BD x 2 weeks</li>
                <li>
                  PO Metronidazole 200 mg TDS x 2 weeks after omitting of IV
                  antibiotics
                </li>
              </ul>
            </li>

            <li>Supp. Diclofenac 8 H x 24 H</li>
            <li>IV Tramadol 50 mg HS PRN</li>
            <li>PO Azithromycin 1 G to both partners</li>
            <li>Cathether for 24 H</li>
            <li>No STO</li>
            <li>Tolerable diet</li>
            <li>Shift to Gynae Ward/HDU</li>
            <li>Sent tissues for histopathology</li>
          </ul>
        </TabsContent>
      </Tabs>
    </Content>
  )
}
