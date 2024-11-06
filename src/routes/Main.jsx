// src/routes/Main.jsx
import profileImg from "../assets/profileImg.jpg";
import EducationBlock from "../components/EducationBlock";

function age() {
  return new Date().getFullYear() - 2004;
}

const Main = () => {
  return (
    <div id="main">
      <div className="flex">
        <div id="profileImg" className="leftColumn">
          <img src={profileImg} alt="Profile Image" className="profileImg" />
        </div>

        <div id="infoColumn" className="rightColumn">
          <h1 id="nameAndAge"> Killian Kirill Puljavin, {age()} år</h1>
          <p>System Utvecklare | Software Engineer</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/kirill-puljavin-91a66a254/">
              LinkedIn
            </a>
            <a href="#"> Discord </a>
            <a href="#"> Gmail </a>
            <a href="https://github.com/KirillPuljavin"> Github </a>
          </div>
        </div>
      </div>
      <br />

      <div>
        <h2>Allmänt</h2>
        <p style={{ textAlign: "justify" }} className="bigP">
          Jag är Kirill Puljavin, en person med en vänlig och lyhörd
          personlighet. Född 8e Oktober 2004. Min förmåga att aktivt lyssna och
          vara lätt att samtala med gör mig både till en god kamrat och en öppen
          samarbetspartner. Min höga förståelse för generella koncept och idéer
          kompletteras av en stark passion för teknikens värld. Att skapa är
          mitt bränsle, och mitt mål är att skapa med en unik touch som
          verkligen gör avtryck. Jag är stolt över att kalla Helsingborg mitt
          hem, och i mitt liv delar jag rummet med tre underbara katter.
        </p>

        <div className="filler"></div>

        <h2>Utbildning</h2>
        <div id="Utbildning">
          <EducationBlock
            title="Newton Yrkeshögskola"
            experience="2024 - 2026"
            description="För närvarande inskriven i Newton Yrkeshögskolas Systemutvecklare .NET-program, med fokus på avancerad mjukvaruutveckling, .NET-ramverket och applikationsarkitektur. Utbildningen betonar praktiska färdigheter och branschkontakter, vilket förbereder mig för komplexa systemutvecklingsuppgifter."
            labels={[
              "Avancerad .NET-utveckling",
              "Applikationsarkitektur",
              "Praktisk mjukvaruteknik",
            ]}
          />
          <EducationBlock
            title="NTI Gymnasiet – TE4 Gymnasieingenjörsprogrammet"
            experience="2023 - 2024"
            description="Avslutade det ettåriga TE4 Gymnasieingenjörsprogrammet vid NTI Gymnasiet, med specialisering i mjukvarudesign. Programmet gav praktisk erfarenhet inom mjukvaruutveckling, projektledning och samarbetsprojekt, vilket lade en solid grund för min ingenjörskarriär."
            labels={["Mjukvarudesign", "Projektledning", "Teamarbete"]}
          />
          <EducationBlock
            title="NTI Gymnasiet"
            experience="2020 - 2023"
            description="Tog examen från NTI Gymnasiets teknikprogram med inriktning på information och medieteknik. Utbildningen omfattade kurser i programmering, webbutveckling och nätverksteknik. Jag genomförde även en extra kurs i företagsekonomi, vilket breddade min förståelse för affärsverksamhet och ekonomiska principer."
            labels={["Programmering", "Webbutveckling", "Företagsekonomi"]}
          />
        </div>

        <div className="filler"></div>

        <h2>Metodik</h2>
        <p style={{ textAlign: "justify" }} className="bigP">
          Min metodik bygger på en djupgående förmåga att snabbt och effektivt
          förstå komplexa koncept. Jag har en naturlig talang för att
          identifiera samband och skapa en helhetsbild, vilket gör att jag
          snabbt kan sätta mig in i nya områden och sammanhang. Med ett
          analytiskt sinne och ett unikt sätt att tänka kan jag se kärnan i
          problem och förstå dem från flera perspektiv. Detta tillvägagångssätt
          ger mig möjligheten att fatta välgrundade och rationella beslut som
          bygger på insikt snarare än antaganden. Jag drivs av en stark vilja
          att lära mig nytt, och jag har en beprövad förmåga att omvandla ny
          kunskap till konkreta resultat. För mig handlar metodik inte bara om
          struktur och teknik, det är ett sätt att kombinera förståelse oc h
          utförande för att uppnå långsiktigt hållbara lösningar.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Main;
