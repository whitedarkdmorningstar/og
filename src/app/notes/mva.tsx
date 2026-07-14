import { Content, getTodayDate } from "./content"

export default function MVANote() {
  return (
    <Content
      title={"MVA Note"}
      value={"mva"}
      description={"Patient Name, Age, Register Number"}
    >
      <p>Date & Time: _____ {getTodayDate()}</p>
      <p>Accouncher: _____</p>
      <p>Assistant: _____</p>
      <p>Indication: _____</p>
      <p>Procedure: MVA</p>
      <h4>Operation Findings and Procedures</h4>
      <ul>
        <li>Under aseptic condition, cleaning & draping was done.</li>
        <li>On VE, uterus was bulky and AV, POD was clear.</li>
        <li>Cusco's speculum was inserted.</li>
        <li>
          Lignocaine 1% 2cc was injected at anterior cervical lip which was held
          with vosellum.
        </li>
        <li>
          Lignocaine 1% was also injected to cervico-vaginal junction at 2, 4,
          8, 10 o'clock.
        </li>
        <li>Then, routine procedure of MVA was done.</li>
        <li>IPW cannula No. ?6, 7, 8 was used.</li>
        <li>~100cc of ROC & blood clots was obtained.</li>
        <li>
          After procedure, uterus was bulky, Os was closed. No active BPV.
        </li>
      </ul>
      <h4>Post-Procedure Condition</h4>
      <ul>
        <li>BP _____ mmHg </li>
        <li>PR _____/min </li>
        <li>SpO2 _____%</li>
        <li>GC fair, Temp NL, A-, J</li>
        <li>Heart NAD </li>
        <li>Lungs NAD</li>
        <li>Uterus: Bulky</li>
        <li>No BPV</li>
      </ul>
      <h4>Treatment</h4>
      <ul>
        <li>IV Synto ?10 U + NS 500 ml </li>
        <li>PO Mesoprosol 200 μg BD for 3 Days</li>
        <li>PO Metronidazole 200 mg TDS</li>
        <li>PO Cifran 500 mg TDS</li>
      </ul>
    </Content>
  )
}
