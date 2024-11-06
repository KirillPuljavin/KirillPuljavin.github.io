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
          <h1 id="nameAndAge">Kirill Karl Puljavin, {age()} år</h1>
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
            title="Newton YH"
            description="Jag studerade vid Newton YH där jag fokuserade på [specificera dina studier och erfarenheter]."
          />
          <EducationBlock
            title="NTI Gymnasiet"
            description="Under min tid på NTI Gymnasiet fördjupade jag mig i [specificera dina studier och erfarenheter]."
          />
          <EducationBlock
            title="NTI TE4 GymnasieIngenjör Program"
            description="På TE4 GymnasieIngenjör programmet vid NTI Gymnasiet utvecklade jag [specificera dina studier och erfarenheter]."
          />
        </div>

        <div className="filler"></div>

        <h2>Metodik</h2>
        <p style={{ textAlign: "justify" }} className="bigP">
          Mitt utbildningsfokus har inte bara gett mig färdigheter, utan har
          även format mitt tänkesätt. Det har gett mig förmågan att analysera
          och lösa komplexa tekniska utmaningar på ett metodiskt sätt. Nu när
          jag riktar in mig på entreprenörskap och projektutveckling, bär jag
          med mig denna breda kompetensbas som bränsle för att skapa och driva
          fram unika och nyskapande initiativ. Just nu är jag på jakt efter
          likasinnade individer, personer som delar min entusiasm och min önskan
          att inte bara samarbeta, utan att skapa något verkligt meningsfullt
          tillsammans. Jag vill inte bara bygga nätverk; jag vill bygga
          meningsfulla relationer som går bortom det professionella.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Main;
