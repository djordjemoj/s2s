import React, { useState } from "react";
import "../Radionice/Radionice.css";
import csharp from "../../assets/radionicaCS.png";
import after from "../../assets/radioniceAe.png";
import figma from "../../assets/radioniceFigma.png";
import javaSlika from "../../assets/radioniceJava.png";
import python from "../../assets/radionicePython.png";
import reactSlika from "../../assets/radioniceReact.png";
import seoSlika from "../../assets/radioniceSeo.png";
import unity from "../../assets/radioniceUnity.png";
import nodeSlika from "../../assets/radioniceNode.png";
import agile from "../../assets/radioniceAgile.png";
import Modal2 from "./Modal2";
import Boris from "../../assets/Boris.png";
import Branislav from "../../assets/Branislav.png";
import Coda from "../../assets/Coda.png";
import Filip from "../../assets/Filip.png";
import Laki from "../../assets/Laki.png";
import Luka from "../../assets/Luka.png";
import Mirilo from "../../assets/Mirilo.png";
import Nikola from "../../assets/Nikola.png";
import Pedja from "../../assets/Pedja.png";
import Teodora from "../../assets/Teodora.png";
import Veljko from "../../assets/Veljko.png";
import MihajloSeo from "../../assets/MihajloSeo.png";
import "../Radionice/Modal.css";

// function obavestenje() {
//   alert("Hello! I am an alert box!!");
// }

const Radionice = () => {
  const [openModal, setOpenModal] = useState(false);

  const modali = [
    {
      naslov: "ASP.NET behind the scenes",
      prviTekst:
        "Svako ko se bavi muzikom zna za notu C#, međutim to ime igra veliku ulogu i u programiranju, s obzirom na to da se jedan od najpopularnijih programskih jezika današnjice naziva baš tako. Ove godine na projektu S2S u organizaciji FONIS-a, imaćeš priliku da saznaš kako se to kreira Web API u C#-u pomoću ASP.NET-a. Na početku radionice će se proći osnove objektno-orijentisanog programiranja,  kao i šta je to Web API, REST i kako izgleda back-end većine modernih veb aplikacija. Nakon toga ćeš imati priliku da to znanje primeniš na projektu gde ćeš kreirati API, bazu podataka uz pomoć Entity Framework-a i izvršiti sve CRUD operacije nad tim API-jem, koji ćeš kasnije testirati uz pomoć Postman-a.",
      nivo: "Nivo: Napredni",
      predznanje: "Potrebno predznanje: Osnove OOP ",
      potrebanSoft:
        "Potreban softver: Visual Studio 2022, Postman, Visual Studio Code",
      predavac: "Predavač: Luka Miljković",
      drugiTekst:
        "Luka je student master studija na Fakultetu organizacionih nauka, na smeru informacioni sistemi i tehnologije i modulu informacioni sistemi. Diplomirao je takođe na Fakultetu organizacionih nauka 2021. godine, a bio je i član Upravnog odbora FONIS-a u školskoj 2020/21 godini. Trenutno radi u kompaniji NCR na poziciji PS softver inženjera. Krenuo je da programira na fakultetu. Kroz studije je shvatio da ga najviše interesuje back-end programiranje kao i baze podataka. C# i .NET je prvi put radio na trećoj godini fakulteta i to ga je odmah privuklo, tako da je odlučio da se dodatno bavi ovim programskim jezikom. Trenutno radi na master radu koji se bavi analizom komunikacionih protokola u .NET aplikacijama.",
      slikaPredavaca1: Luka,
      slikaPredavaca2: null,
      laptop: true,
    },
    {
      naslov: "Adobe After Effects",
      prviTekst:
        "Želiš da otkriješ tajne filmske industrije? Odaćemo ti jednu - Adobe After Effects. Pomoću ovog programa možeš učiniti šta god poželiš, bilo da je to unapređivanje već snimljenog sadržaja ili stvaranje nečega sasvim novog. Savremenim alatima koje After Effects sadrži, pokriva veliki broj aktuelnih tehnika čija je upotreba danas veoma rasprostranjena. Zakorači u svet animacija i video editovanja i otkrij mogućnosti koje u sebi krije.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Adobe After Effects",
      predavac: "Predavač: Predrag Tanasković",
      drugiTekst:
        "Predrag je student treće godine Fakulteta organizacionih nauka na smeru informacioni sistemi i tehnologije i član FONIS-a već 2 godine. Video editing-om i grafičkim dizajnom se bavi već 6 godina u programima: Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, Sony Vegas Pro i dr. U slobodno vreme igra folklor, bavi se muzikom i deejay-ingom kroz šta je implementirao svoje znanje o video editingu. Kroz ovu radionicu bi želeo da predstavi After Effects u najboljem svetlu. Kroz izradu videa, Instagram storija i animaciju logoa, polaznici radionice će naučiti da naprave zanimljive i interaktivne video snimke za društvene mreže.",
      slikaPredavaca1: Pedja,
      slikaPredavaca2: null,
      laptop: true,
    },
    {
      naslov: "Make IT Agile",
      prviTekst:
        "Tvoja želja da budeš uspešan član tima IT projekta može se pretvoriti u cilj i realnost. Kako? Na radionici  „Make IT Agile“ naši predavači će te upoznati sa osnovama agilnog razvoja koji predstavlja svakodnevnicu sve većeg broja IT stručnjaka. Agilno upravljanje je deo projektnog menadžmenta koji pomera tradicionalni pristup, waterfall, ka modernom i savremenom. Govori o kulturi i samostalnosti razvojnog tima, a akcenat stavlja na saradnju sa krajnjim korisnikom. Suština ovog pristupa su kratke iteracije kroz koje tim procenjuje prethodno ostvarene rezultate i uočava moguće nedostatke. Bazira se na fleksibilnosti i uči nas kako se prilagoditi promenama upravo kroz konstantnu komunikaciju sa klijentom. Zbog svoje kompaktnosti, postaje vodeći trend i možemo ga uočiti u radu najprestižnijih IT kompanija. Naši predavači će ti približiti Scrum pristup i kroz praktične primere predstaviti najzastupljenije alate za agilni razvoj i upravljanje projektima u softverskoj industriji.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Nije potrebno",
      predavac: "Predavači: Boris Vajagić, Teodora Gavrilović",
      drugiTekst:
        "Boris je student četvrte godine Fakulteta organizacionih nauka. U prethodnoj školskoj godini obavljao je ulogu predsednika Udruženja studenata informatike FONIS, demonstratora na Katedri za elektronsko poslovanje i lidera tima za informacione tehnologije u Centru za profesionalnu sertifikaciju menaždera FON-a. Ove godine nalazi se u ulozi člana Upravnog odbora za upravljanje projektima gde se stara o uspehu svih projekata koje FONIS organizuje. Trenutno je i praktikant u kompaniji Seven Bridges na poziciji Product Management Intern. Smatra da se mnogi aspekti našeg života mogu posmatrati kao projekti kojima se može pristupiti agilno. ",
      slikaPredavaca2: Teodora,
      drugiTekst2:
        "Teodora je student master studija na Fakultetu organizacionih nauka, gde je završila i osnovne studije. Dugogodišnji je član FONIS-a, a u tom periodu angažovala se na velikom broju projekata i aktivnosti. Posebno se izdvaja pozicija kordinatora FON Hakatona i vođenje resora za Upravljanje znanjem pri Upravnom odboru. Kroz organizaciju je razvijala svoje veštine upravljanja i liderstvo, te zavolela upravo ovaj aspekt IT industrije, pa se odlučila za karijeru u ovom pravcu. Trenutno je stipendista kompanije Levi9, gde će raditi na poziciji Delivery manager-a. Veruje da bilo da želite da budete programer ili menadžer, mekih veština i razumevanja procesa čiji ste deo, nikad ne može da bude dosta.",
      slikaPredavaca1: Boris,
      laptop: false,
    },
    {
      naslov: "Osnovi i izrada prototipa u Figmi",
      prviTekst:
        "„Bez alata nema zanata“. Upravo ćeš na ovoj radionici savladati osnovne alate u Figmi, najpopularnijem softveru za stvaranje korisničkog interfejsa i korisničkog iskustva u poslednjih nekoliko godina. Figma je uređivač vektorske grafike i alat za izradu prototipa koji je prvenstveno zasnovan na pretraživaču. Rad u zajednici i alati jednostavni za koršćenje samo su neke od prednosti ovog programa. Ako si kreativan i svoju budućnost vidiš u dizajnu, prijavi se i sa nama napravi svoje prve korake.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Nije potrebno",
      predavac: "Predavač: Danilo Vasović",
      drugiTekst:
        "Danilo je student druge godine Fakulteta organizacionih nauka.  Grafičkim dizajnom se bavi već skoro 8 godina i radio je za četiri firme u toj oblasti. Tokom svih tih godina, uvek je tražio program koji najviše može da mu olakša posao. Figma je svakako velika prekretnica u tom smislu. Pre svega smatra da je bolja od ostalih dizajnerskih programa, baš zbog toga što joj se pristupa preko pretraživača, a sav vaš rad je istog trenutka sačuvan na internetu. Takođe jedna od prednosti koje bi naveo jeste svakako mogućnost rada u grupi, što dodatno olakšava rad na zajedničkim projektima s drugim dizajnerima. Velika prilagodljivost, olakšano korišćenje i povećana pokretljivost su svakako epiteti koje bi dodelio Figmi. Smatra da poznavanje ovog programa može da pomogne i olakša ljudima u oblasti dizajna, bilo da oni prave izgled zida za instagram ili izgled internet stranice.",
      slikaPredavaca1: Coda,
      slikaPredavaca2: null,
      laptop: false,
    },
    {
      naslov: "Uvod u Javu",
      prviTekst:
        "Iako je programski jezik Java nastao 90-ih godina prošlog veka i dalje je jedan od najpopularnijih na svetu sa više od 9 miliona programera koji svakodnevno pišu svoj kod u Javi. U Javi možeš da razvijaš različite aplikacije za dekstop, mobilne uređaje, veb aplikacije, AI i još mnogo toga, tako da znanje iz ovog jezika možeš preneti u skoro bilo koju oblast softverskog inženjerstva. Na ovogodišnjem projektu moći ćeš da uploviš u neke od najvažnijih karateristika Jave, objektno-orijentisanog programiranja, kao i da sve to otkucaš na svom računaru i postaviš bilo koje pitanje predavačima.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Osnove programiranja",
      potrebanSoft: "Potreban softver: IntelliJ IDEA i JDK 8+",
      predavac: "Predavači: Veljko Blagojević i Filip Filipović",
      drugiTekst:
        "Veljko je student četvrte godine Fakulteta organizacionih nauka. Pored fakulteta se interesovao i učio dodatno o objektno-orijentisanom programiranju i Javi, što ga je dovelo na poziciju praktikanta u globalnoj korporaciji BlackRock. Tu je radio na back-end delu veb aplikacije korišćene od strane klijenata ogromnog portfolija, zajedno sa kolegama koji poseduju ogromni nivo iskustva i znanja. Trenutno je zaposlen na poziciji Java praktikant u Levi9.",
      slikaPredavaca1: Veljko,
      slikaPredavaca2: Filip,
      drugiTekst2:
        " Filip je student četvrte godine i demonstrator na Računarskom fakultetu. Sa Javom se prvi put susreo na prvoj godini fakulteta, i od tad mu je ona prvi izbor za pravljenje kompleksnih sistema i aplikacija. Znanje je produbio na praksi u BlackRock-u, gde je radio u Javi na novom proizvodu sa kolegama koji su eksperti za rad u ovom programskim jezikom. Odlučio se da se pridruži ovom projektu jer je tokom držanja demonstracija zavoleo da prenosi znanje drugima kako bi im pomogao da pronađu ono čime bi se jednog dana bavili.",
      laptop: false,
    },
    {
      naslov: "Kako napraviti kriptovalutu",
      prviTekst:
        "Nastanak prve kriptovalute 2009. godine, Bitcoin-a, doveo je do enormne ekspanzije interesovanja za Blockchain tehnologijom. Ceo svet je počeo da se pita šta je kod nje toliko revolucionarno. Radi se o tehnologiji koja ima potencijal da iz korena promeni način funkcionisanja finansija, upravljanja imovinom, osiguranja, vođenja organizacije, lanaca snabdevanja, upravljanja ličnim podacima, ali i mnogih drugih oblasti krucijalnih za svet u kojem živimo.Blockchain u svojoj osnovi predstavlja javnu, decentralizovanu i distribuiranu bazu podataka koja čuva zapise o vlasništvu nad nekom digitalnom imovinom. Kada se podatak jednom upiše u njega tu ostaje zauvek.Ukoliko želiš naučiti kako da napraviš kompletnu blockchain mrežu od nule, kao i crypto coin na toj mreži u Node.js platformi, ova radionica je pravi izbor za tebe. Prijavi se i zajedno sa našim predavačem savladaj osnove blockchain tehnologije.",
      nivo: "Nivo: Srednji",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: NodeJS i neki IDE",
      predavac: "Predavač: Branislav Stojanović",
      drugiTekst:
        "Branislav je student četvrte godine IT smera na Fakultetu organizacionih nauka. Ujedno je zaposlen kao softver inženjer u kompaniji Blink.ing gde primarno radi u NodeJS tehnologiji. Oblasti prema kojima gaji veliku strast i interesovanje su cybersecurity i blockchain, a takođe voli da prenosi i deli svoje znanje zbog čega se i odlučio da drži ovu radionicu.",
      slikaPredavaca1: Branislav,
      slikaPredavaca2: null,
      laptop: true,
    },
    {
      naslov: "Uvod u Python kroz pravljenje igrica",
      prviTekst:
        "Da li znaš da je prema nedavnom istraživanju u Velikoj Britaniji Python pretekao francuski kao najpopularniji jezik koji se uči u osnovnim školama? Popularan programski jezik opšte namene, Python, koji se koristi u savremenom razvoju softvera i analizi podataka, pruža idealan alat za razvoj funkcionalnih aplikacija poput Dropbox-a, Spotify-a, Uber-a i Pinterest-a. Otkrij sve mogućnosti koje ti ovaj programski jezik pruža i oprobaj se u kreiranju sledeće popularne aplikacije!",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Python i neki IDE",
      predavac: "Predavač: Nikola Radojević",
      drugiTekst:
        "Nikola je student četvrte godine Elektrotehničkog fakulteta. Zaposlen je kao programer u firmi Skylead. Programiranjem se bavi od osnovne škole. U slobodno vreme pravi igrice, simulacije i mnoge druge stvari. Python je jedan od prvih programskih jezika koje je naučio, i to baš kroz pravljenje igrica. Nikola navodi da je Python koristan i u drugim oblastima, poput obrade podataka, mašinskog učenja, naučnih izračunavanja i mnogih drugih.",
      slikaPredavaca1: Nikola,
      slikaPredavaca2: null,
      laptop: true,
    },
    {
      naslov: "From Zero to Hero",
      prviTekst:
        "Da li znaš da je React trenutno najpopularnija biblioteka za kreiranje veb aplikacija i da je  jedna od najtraženijih pozicija na tržištu baš React developer? Na ovogodišnjem projektu imaćeš priliku da dva dana učestvuješ na radionici iz React-a na kojoj će se preći osnovni koncepti ove tehnologije kao što su VirtualDom, Components, JSX, State, Hooks i mnogi drugi. Takođe na radionici će biti obrađen i Sass,  jedan od najmodernijih načina stilizovanja aplikacija, koji  je za razliku od CSS-a, skriptni jezik sa izrazima, varijablama i funkcijama i samim tim i dosta moćniji. Pridruži nam se i otkrij sve tajne ovog izvanrednog programa.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Osnove HTML-a, CSS-a i JS-a",
      potrebanSoft: "Potreban softver: VS Code, Node.js i Git",
      predavac: "Predavač: Nikola Mirilo",
      drugiTekst:
        "Nikola je student četvrte godine na Fakultetu organizacionih nauka na smeru operacioni menadžment. Web development-om je počeo da se bavi pre 3 godine, a React-om pre godinu i po dana. Zaposlen je u kompaniji Adacta kao projektni menadžer, a pored toga radi i na razvoju frontend-a SaaS aplikacije za start-up pod imenom Swapabee.",
      slikaPredavaca1: Mirilo,
      slikaPredavaca2: null,
      laptop: false,
    },
    {
      naslov: "Kako SEO utiče na poslovanje",
      prviTekst:
        "„SEO (Search Engine Optimization) je umetnost i nauka objavljivanja informacija u formatu koji će uveriti pretraživače da vaš sadržaj zadovoljava potrebe njihovih korisnika za relevantne upite.“ Omogućava održavanje optimizovanosti i praćenje sajta, statistiku poseta i analizu konkurencije, a postoji i čitava lista aktivnosti podeljena po oblastima koje za cilj imaju sa jedne strane da podignu tvoju poziciju, a sa druge strane da povećaju broj relevantnih posetilaca na tvom sajtu. Pridruži nam se i postani ključna karika uspeha svog budućeg tima!",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: osnove digitalnog marketinga",
      potrebanSoft:
        "Potreban softver: Meta SEO Inspector, Screaming Frog, Google Trends, Ahrefs",
      predavac: "Predavač: Mihailo Miljković",
      drugiTekst:
        "Mihailo je student druge godine na Univerzitetu Metropolitan, na smeru biznis i marketing. Zaposlen je u kompaniji Digital Silk na poziciji SEO Specialist. SEO-om se bavi 4 godine. Kroz niz sopstvenih projekata i mini startup-ova, došao je u kontakt sa vlasnicima firmi koji su bili zainteresovani za usluge i konsultacije u vezi SEO-a. Vredna poznanstva su mu omogućila prvo veliko iskustvo, zaposlenje u američkoj kompaniji Amerikos LLC. Radio je na pozicijma SEO &amp; Content Manager-a i Marketing Executive Manager-a, gde je sarađivao sa CEO-om kompanije i glavnim stejkholderima. Sada, kao zaposleni u Digital Silk-u sarađuje sa prestižnim organizacijama kao što su P&amp;G, HP, Xerox, Stündenglass, Sandler, i druge. Kroz posao i realne projekte može savršeno da ukombinuje teorijsko znanje koje dobija na fakultetu, stvarajući tako odličnu atmosferu za učenje i napredak.",
      slikaPredavaca1: MihajloSeo,
      slikaPredavaca2: null,
      laptop: true,
    },
    {
      naslov: "Kako napraviti [prvu] igricu",
      prviTekst:
        "Znaš li da je video igra tvog detinjstva, Angry Birds, napravljena baš u Unity-ju? Unity predstavlja integrisano razvojno okruženje za razvoj 2D i 3D interaktivnih multimedijalnih aplikacija i igara za računare, konzole, mobilne uređaje i veb sajtove, sa mogućnošću izvršavanja na preko 20 podržanih platformi. Uprkos širokom spektru mogućnosti koje ovaj program nudi, veoma je jednostavan za korišćenje. Ukoliko si strastveni obožavalac video igara ili pak želiš da se oprobaš u nečemu novom, ovo je prava radionica za tebe. Prijavi se i zajedno sa nama savladaj osnove Unity-ja. Možda će jednog dana baš tvoja igrica biti izvor zabave širom sveta.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio, Unity ekstenzija, Unity",
      predavac: "Predavač: Lazar Cvetković",
      drugiTekst:
        "Lazar je student treće godine na Fakultetu organizacionih nauka, na smeru informacioni sistemi i tehnologije. Član je Udruženja studenata informatike FONIS, gde je trenutno i član Upravnog odbora za upravljanje ljudskim resursima. Obožava igrice od malena i baš zbog toga se odlučio da se bavi njihovim razvojem putem Unity-ja. Do sada je učestvovao na četiri hakatona za pravljenje igrica, od kojih je pobedio na 48 časovnom game jam-u i osvojio 3.mesto na Solana Summer Camp Hackathon-u u gaming kategoriji za blokčejn. Pored toga je vrstan u fotografiji i šahu, gde ima osvojenu prvu kategoriju.",
      slikaPredavaca1: Laki,
      slikaPredavaca2: null,
      laptop: true,
    },
  ];
  const [trenutniModal, setOpenTrenutniModal] = useState(modali[0]);

  function handlePromenaModala(index) {
    setOpenTrenutniModal(modali[index]);
    setOpenModal(true);
  }

  // const body = document.querySelector("body");
  // body.style.overflow = openModal ? "hidden": "auto";
  document.body.style.overflow = openModal ? "hidden" : "auto";

  return (
    <div id="radionice">
      <div className="prviZnak"></div>
      <Modal2
        open={openModal}
        onClose={() => setOpenModal(false)}
        modali={trenutniModal}
      />
      <div className="page">
        <div className="container">
          <div className="hexagonArea first">
            <div className="hexagon" onClick={() => handlePromenaModala(0)}>
              <h2 className="radionicaNaziv">ASP.NET</h2>
              <div className="blanket"></div>
              <img src={csharp} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(0)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(1)}>
              <h2 className="radionicaNaziv">After Effects</h2>
              <div className="blanket"></div>
              <img src={after} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(1)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(2)}>
              <h2 className="radionicaNaziv">Agile</h2>
              <div className="blanket"></div>
              <img src={agile} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(2)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea second">
            <div className="hexagon" onClick={() => handlePromenaModala(3)}>
              <h2 className="radionicaNaziv">Figma</h2>
              <div className="blanket"></div>
              <img src={figma} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(3)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(4)}>
              <h2 className="radionicaNaziv">Java</h2>
              <div className="blanket"></div>
              <img src={javaSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(4)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea first">
            <div className="hexagon" onClick={() => handlePromenaModala(5)}>
              <h2 className="radionicaNaziv">Blockchain</h2>
              <div className="blanket"></div>
              <img src={nodeSlika} style={{ scale: "1.4 " }} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(5)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(6)}>
              <h2 className="radionicaNaziv">Python</h2>
              <div className="blanket"></div>
              <img src={python} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(6)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(7)}>
              <h2 className="radionicaNaziv">React</h2>
              <div className="blanket"></div>
              <img src={reactSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(7)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea second">
            <div className="hexagon" onClick={() => handlePromenaModala(8)}>
              <h2 className="radionicaNaziv">SEO</h2>
              <div className="blanket"></div>
              <img src={seoSlika} style={{ scale: "1.5 " }} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(8)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(9)}>
              <h2 className="radionicaNaziv">Unity</h2>
              <div className="blanket"></div>
              <img src={unity} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(9)}
              >
                Saznaj više
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="radioniceDivider">
        {/* <svg
          viewBox="0 0 1000 374"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_622_4693" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M583.488 1.44434L691.781 60.4073C694.997 62.1585 696.999 65.5277 696.999 69.1898V123.834C697 123.89 697 123.945 697 124V234.762C697 242.529 688.532 247.331 681.867 243.344L593.335 190.392C590.334 188.597 586.612 188.5 583.521 190.138L470.551 249.985C467.695 251.497 464.285 251.537 461.395 250.091L341.007 189.856C338.06 188.381 334.575 188.453 331.691 190.049L224.532 249.335C221.153 251.204 217.034 250.987 213.876 248.765C198.747 238.123 153.274 206.683 120.37 189.705C117.621 188.286 114.386 188.282 111.622 189.672C83.3805 203.871 38.4277 229.851 15.1219 243.492C8.42975 247.409 0 242.574 0 234.82V149.641C-0.00065033 149.594 -0.000976562 149.547 -0.000976562 149.5L-0.000427246 69.1295C-0.000366211 65.5207 1.94403 62.1919 5.08746 60.4192L109.399 1.59358C112.277 -0.0294342 115.771 -0.126083 118.734 1.33536L228.89 55.6617L331.955 1.29031C334.694 -0.154373 337.947 -0.249054 340.765 1.03391L456.43 53.6953C459.123 54.9215 462.221 54.8919 464.891 53.6143L574.389 1.20679C577.285 -0.17897 580.669 -0.0906067 583.488 1.44434Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M583.488 1.44434L691.781 60.4073C694.997 62.1585 696.999 65.5277 696.999 69.1898V123.834C697 123.89 697 123.945 697 124V234.762C697 242.529 688.532 247.331 681.867 243.344L593.335 190.392C590.334 188.597 586.612 188.5 583.521 190.138L470.551 249.985C467.695 251.497 464.285 251.537 461.395 250.091L341.007 189.856C338.06 188.381 334.575 188.453 331.691 190.049L224.532 249.335C221.153 251.204 217.034 250.987 213.876 248.765C198.747 238.123 153.274 206.683 120.37 189.705C117.621 188.286 114.386 188.282 111.622 189.672C83.3805 203.871 38.4277 229.851 15.1219 243.492C8.42975 247.409 0 242.574 0 234.82V149.641C-0.00065033 149.594 -0.000976562 149.547 -0.000976562 149.5L-0.000427246 69.1295C-0.000366211 65.5207 1.94403 62.1919 5.08746 60.4192L109.399 1.59358C112.277 -0.0294342 115.771 -0.126083 118.734 1.33536L228.89 55.6617L331.955 1.29031C334.694 -0.154373 337.947 -0.249054 340.765 1.03391L456.43 53.6953C459.123 54.9215 462.221 54.8919 464.891 53.6143L574.389 1.20679C577.285 -0.17897 580.669 -0.0906067 583.488 1.44434Z"
            fill="#F99D1D"
          />
          <path
            d="M691.781 60.4073L690.346 63.0421V63.0421L691.781 60.4073ZM583.488 1.44434L582.054 4.0791V4.0791L583.488 1.44434ZM696.999 123.834H693.999V123.859L693.999 123.884L696.999 123.834ZM681.867 243.344L683.407 240.769L681.867 243.344ZM593.335 190.392L591.796 192.967L593.335 190.392ZM583.521 190.138L584.925 192.789L583.521 190.138ZM470.551 249.985L469.146 247.334L470.551 249.985ZM461.395 250.091L460.052 252.774L461.395 250.091ZM341.007 189.856L342.349 187.173V187.173L341.007 189.856ZM331.691 190.049L330.239 187.424L330.239 187.424L331.691 190.049ZM224.532 249.335L225.984 251.96V251.96L224.532 249.335ZM213.876 248.765L215.602 246.312H215.602L213.876 248.765ZM120.37 189.705L121.746 187.039H121.746L120.37 189.705ZM111.622 189.672L110.274 186.991L111.622 189.672ZM15.1219 243.492L13.6065 240.903H13.6065L15.1219 243.492ZM0 149.641H3V149.62L2.99971 149.599L0 149.641ZM-0.000976562 149.5L-3.00098 149.5V149.5H-0.000976562ZM-0.000427246 69.1295L-3.00043 69.1295V69.1295L-0.000427246 69.1295ZM5.08746 60.4192L6.56109 63.0323L6.56111 63.0323L5.08746 60.4192ZM109.399 1.59358L110.873 4.2067V4.2067L109.399 1.59358ZM118.734 1.33536L117.408 4.02594V4.02594L118.734 1.33536ZM228.89 55.6617L227.563 58.3523L228.936 59.0293L230.29 58.3151L228.89 55.6617ZM331.955 1.29031L333.355 3.94372L333.355 3.94372L331.955 1.29031ZM340.765 1.03391L339.522 3.76423V3.76424L340.765 1.03391ZM456.43 53.6953L457.673 50.9649V50.9649L456.43 53.6953ZM464.891 53.6143L466.186 56.3203V56.3203L464.891 53.6143ZM574.389 1.20679L575.685 3.91282V3.91281L574.389 1.20679ZM693.215 57.7725L584.923 -1.19043L582.054 4.0791L690.346 63.0421L693.215 57.7725ZM699.999 69.1898C699.999 64.4291 697.396 60.0491 693.215 57.7725L690.346 63.0421C692.597 64.2679 693.999 66.6263 693.999 69.1898H699.999ZM699.999 123.834V69.1898H693.999V123.834H699.999ZM693.999 123.884C694 123.922 694 123.96 694 124H700C700 123.929 699.999 123.857 699.998 123.785L693.999 123.884ZM694 124V234.762H700V124H694ZM694 234.762C694 240.199 688.073 243.56 683.407 240.769L680.327 245.919C688.992 251.101 700 244.859 700 234.762H694ZM683.407 240.769L594.875 187.818L591.796 192.967L680.327 245.919L683.407 240.769ZM594.875 187.818C590.973 185.483 586.135 185.358 582.117 187.487L584.925 192.789C587.089 191.642 589.694 191.71 591.796 192.967L594.875 187.818ZM582.117 187.487L469.146 247.334L471.955 252.636L584.925 192.789L582.117 187.487ZM469.146 247.334C467.147 248.393 464.76 248.42 462.737 247.408L460.052 252.774C463.809 254.654 468.243 254.602 471.955 252.636L469.146 247.334ZM462.737 247.408L342.349 187.173L339.665 192.539L460.052 252.774L462.737 247.408ZM342.349 187.173C338.518 185.256 333.988 185.35 330.239 187.424L333.144 192.674C335.162 191.557 337.601 191.507 339.665 192.539L342.349 187.173ZM330.239 187.424L223.08 246.71L225.984 251.96L333.144 192.674L330.239 187.424ZM223.08 246.71C220.703 248.025 217.818 247.871 215.602 246.312L212.15 251.219C216.25 254.103 221.604 254.383 225.984 251.96L223.08 246.71ZM215.602 246.312C200.493 235.683 154.859 204.125 121.746 187.039L118.995 192.371C151.688 209.24 197.001 240.562 212.15 251.219L215.602 246.312ZM121.746 187.039C118.135 185.176 113.888 185.174 110.274 186.991L112.97 192.352C114.884 191.389 117.106 191.397 118.995 192.371L121.746 187.039ZM110.274 186.991C81.9333 201.241 36.8984 227.27 13.6065 240.903L16.6373 246.081C39.9569 232.432 84.8277 206.501 112.97 192.352L110.274 186.991ZM13.6065 240.903C8.91486 243.649 3 240.257 3 234.82H-3C-3 244.891 7.94464 251.169 16.6373 246.081L13.6065 240.903ZM3 234.82V149.641H-3V234.82H3ZM-3.00098 149.5C-3.00098 149.561 -3.00055 149.622 -2.99971 149.682L2.99971 149.599C2.99925 149.566 2.99902 149.533 2.99902 149.5H-3.00098ZM-3.00043 69.1295L-3.00098 149.5L2.99902 149.5L2.99957 69.1296L-3.00043 69.1295ZM3.61383 57.8061C-0.472648 60.1106 -3.00035 64.4381 -3.00043 69.1295L2.99957 69.1296C2.99962 66.6034 4.36071 64.2732 6.56109 63.0323L3.61383 57.8061ZM107.926 -1.01953L3.61382 57.8061L6.56111 63.0323L110.873 4.2067L107.926 -1.01953ZM120.061 -1.35523C116.209 -3.2551 111.667 -3.12946 107.926 -1.01953L110.873 4.2067C112.887 3.07059 115.333 3.00293 117.408 4.02594L120.061 -1.35523ZM230.217 52.9711L120.061 -1.35523L117.408 4.02594L227.563 58.3523L230.217 52.9711ZM330.555 -1.36309L227.491 53.0083L230.29 58.3151L333.355 3.94372L330.555 -1.36309ZM342.008 -1.69642C338.345 -3.36427 334.115 -3.24119 330.555 -1.36309L333.355 3.94372C335.272 2.93244 337.549 2.86617 339.522 3.76423L342.008 -1.69642ZM457.673 50.9649L342.008 -1.69643L339.522 3.76424L455.187 56.4256L457.673 50.9649ZM463.596 50.9082C461.727 51.8026 459.558 51.8233 457.673 50.9649L455.187 56.4256C458.688 58.0197 462.716 57.9812 466.186 56.3203L463.596 50.9082ZM573.094 -1.49924L463.596 50.9082L466.186 56.3203L575.685 3.91282L573.094 -1.49924ZM584.923 -1.19043C581.258 -3.18586 576.858 -3.30073 573.094 -1.49924L575.685 3.91281C577.711 2.94279 580.081 3.00464 582.054 4.0791L584.923 -1.19043Z"
            fill="black"
            mask="url(#path-1-inside-1_622_4693)"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default Radionice;
