import profileImg from "../assets/profileImg.jpg";

const Main = () => {
  return (
    <div id="main">
      <div className="flex">
        <div id="profileImg">
          <img
            src={profileImg}
            alt="Profile Image"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>

        <div id="infoColumn">
          <h1 id="nameAndAge">Kirill Karl Puljavin - 2004</h1>
          <h2>Software Developer | Programmerare | Projekt Ledare</h2>
        </div>
      </div>

      <br />
      <hr />
      <div className="socialDiv">
        <a href="https://www.linkedin.com/in/kirill-puljavin-91a66a254/">
          LinkedIn
        </a>
        <a href="#"> Discord </a>
        <a href="#"> Gmail </a>
        <a href="https://github.com/KirillPuljavin"> Github </a>
      </div>
      <hr />
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
        <br />

        <h2>Utbildning</h2>
        <h5 id="Utbildning">
          <b>
            Grundskola i Vittsjö &emsp;&gt;&emsp; Internationella Engelska
            Skolan i Hässleholm &emsp;&gt;&emsp; NTI Gymnasiet i Helsingborg
          </b>
        </h5>
        <p style={{ textAlign: "justify" }} className="bigP">
          Jag studerar för nuvarande på det tekniska fjärde året på NTI
          Gymnasiet i Helsingborg. Där utvecklar jag inte bara mina kunskaper
          utan även min starka passion som entreprenör. Att skapa är mitt
          bränsle, och mitt mål är att skapa med en unik touch som verkligen gör
          avtryck. Denna grundläggande utbildning har inte bara byggt upp min
          kompetenssats, den har även fungerat som en kittlande inspiration för
          min kreativa ådra. Att konceptualisera och gestalta användarvänliga
          gränssnitt är en färdighet jag har bemästrat, precis som att
          implementera och optimera mjukvarulösningar. Denna mångsidighet i mina
          kunskaper ger mig möjligheten att inte bara tänka innovativt, utan
          också att omsätta dessa idéer till verkliga projekt med en meningsfull
          påverkan.
        </p>
        <br />

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
