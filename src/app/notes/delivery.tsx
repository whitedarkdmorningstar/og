import { Content, getTodayDate } from "./content"

export default function DeliveryNote() {
  return (
    <Content
      title={"Delivery Note"}
      value={"delivery"}
      description={"Patient Name, Age, Register Number"}
    >
      <p>Date & Time: _____ {getTodayDate()}</p>
      <p>Accouncher: _____</p>
      <p>Assistant: _____</p>
      <p>Indication: _____</p>
      <p>Procedure: NSVD</p>
      <h4>Operation Findings and Procedures</h4>
      <ul>
        <li>
          Under aseptic condition, simple catheterization was done and bladder
          was emptied.
        </li>
        <li>Patient was placed in lithotomy position.</li>
        <li> ? Under LA, Right mediolateral episiotomy was done.</li>
        <li>
          Analive/macerated _____ baby, anus (+), Birth weigth _____ kg was
          delivered at _____ am/pm {getTodayDate()}. APGAR was _____ at 1 min
          and _____ at 5 min.
        </li>
        <li>Liquor is clear/meconium stained. </li>
        <li>
          Active management of 3rd stage was done. Placenta, cord and membranes
          were delivered completely by controlled cord traction. Time ?
        </li>
        <li>Placenta was checked and completed. </li>
        <li>Vaginal washdown was done.</li>
        <li>
          ? Episiotomy was repaired with 2-0 and 0 catgut and skin with 2-0
          nylon.
        </li>
        <li>Tear and haemostasis were checked and secured. </li>
        <li>No PPH.</li>
      </ul>
      <h4>Post-natal Condition</h4>
      <ul>
        <li>BP _____ mmHg </li>
        <li>PR _____/min </li>
        <li>SpO2 _____%</li>
        <li>GC fair, Temp NL, A-, J</li>
        <li>Heart NAD </li>
        <li>Lungs NAD</li>
        <li>Uterus Well contracted</li>
        <li>No PPH</li>
      </ul>
      <h4>Treatment</h4>
      <ul>
        <li>IV Synto 20/40 U + NS 1 Bot </li>
        <li>PO MV, FeSO4, Cevit, B1 OD </li>
        <li>PO Paracetamol 500 mg TDS</li>
        <li>PO Cefixime 200 mg BD</li>
        <li>PO Metronidazole 200 mg TDS</li>
      </ul>
      <p>Shift to Maternity Ward</p>
      <p># Doctor Sign & Name</p>
    </Content>
  )
}
