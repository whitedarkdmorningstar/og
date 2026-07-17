"use client"

import { Content, getTodayDate } from "./content"

export default function LSCSNote() {
  return (
    <Content
      value={"lscs"}
      title={"LSCS"}
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
      <p>
        Name of Operation: <b>Em-LSCS/Sch-LSCS/Elective LSCS</b>
      </p>
      <p>Tissues Removed: Fetus, placenta, cord and membranes\</p>

      <h4>Operation Findings and Procedures</h4>
      <ul>
        <li>On arrival to OT, FHS was checked.</li>
        <li>
          Under aseptic condition & SAB, indwelling catheterization was done.
        </li>
        <li>Abdomen was opened at Joel-Cohen's incision.</li>
        <li>Sheath, peritoneum and utero-vesical fold were opened.</li>
        <li>Bladder was pushed down.</li>
        <li>Uterine incision was given at lower segment.</li>
        <li>
          An active alive _____ baby, Birth weight _____ kg was delivered at
          _____ am/pm {getTodayDate()}. Liquor: clear/memonium stained. APGAR
          _____.
        </li>
        <li>Active management of 3rd stage was done.</li>
        <li>
          Placenta, membranes and cord were delivered by controlled cord
          traction.
        </li>
        <li>No uterine abnormalities.</li>
        <li>Both fallopian tubes & ovaries were checked and healthy.</li>
        <li>Uterus was closed back in 2 layers.</li>
        <li>Haemostatis was secured.</li>
        <li>
          After checking swabs and instruments, abdomen was closed back in 2
          layers.
        </li>
        <li>Vaginal wash down was done.</li>
      </ul>

      <h4>Post-operative Treatment</h4>
      <ul>
        <li>Note vital signs (BP _____, PR _____, SPO2 _____)</li>
        <li>IV Synto 40 U in NS 500ml</li>
        <li>IV Cefuroxime 1 G x 12 H</li>
        <li>IV Metronidazole 500 mg x 8 H</li>
        <li>IV Tramadol 50 mg stat & 8 H</li>
        <li>PO Paracetamol 500mg TDS</li>
        <li>PO MV, Vit-C OD</li>
        <li>Supp. Paracetamol 1 G stat</li>
        <li>Catheter x 24 H</li>
        <li>No STO</li>
      </ul>
      <p>Shift to Maternity Ward II</p>
    </Content>
  )
}
