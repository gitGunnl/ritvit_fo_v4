import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-down">
              Vælkomin til Tøkni Tænastan
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-down">
              - Vit fáa ritvit til Føroya, stig fyri stig
            </p>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-text/80 animate-fade-down">
              Ritvit (AI) er ikki longur framtíðin – hon er her, beint nú.
              Spurningurin er ikki, um ritvit fer at hava ávirkan á tína
              fyritøku, men hvussu tú best kanst gagnnýta hana. Hjá Tøkni Tænastan
              hjálpa vit tær við at taka ræðið, so tú kanst brúka ritvit strategiskt
              og effektivt – uttan at villast í tøkni ella órealistiskum vónum.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Okkara missión: Ritvit skal vera fyri øll
              </h2>
              <p className="text-lg mb-4">
                Ritvit er ikki bara fyri stórar KT-fyritøkur í Silicon Valley. Hon er
                til tín, tína fyritøku og tín gerandisdag. Okkara mál er einfalt:
              </p>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>
                  <strong>At gera ritvit lætt at skilja og brúka</strong> – uttan óneyðugan
                  tekniskan jarngong.
                </li>
                <li>
                  <strong>At hjálpa fyritøkum at spara tíð og tilfeingi</strong> – uttan
                  stórar íløgur.
                </li>
                <li>
                  <strong>At skapa ritvit-loysnir</strong>, sum veruliga virka og geva ítøkilig
                  úrslit.
                </li>
              </ul>
              <p className="text-lg">
                Vit selja ikki bara "ráðgeving um ritvit". Vit vísa tær, hvussu tú kanst
                brúka hana effektivt – við einari praktiskari og veruleikakendari tilgongd,
                sum tryggjar, at tú sært veruligar fyrimunir frá fyrsta degi.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Okkara søga: Frá fascinatión til veruleika
              </h2>
              <p className="text-lg mb-4">
                Eg havi altíð verið hugtikin av tøkni – øllum tí, sum kann broyta máta okkara at
                arbeiða og liva. Sum verkfrøðingur havi eg arbeitt við framkomnum skipanum,
                men einki hevur fangað mína áhuga sum ritvit.
              </p>
              <p className="text-lg mb-4">
                Mín ritvit-ferð byrjaði í 2012, tá eg las{" "}
                <em>Final Jeopardy: Man vs. Machine and the Quest to Know Everything</em>.
                Hetta lat upp míni eygu fyri, hvussu ritvit ikki bara var framtíðin, men longu
                tá var í ferð við at broyta heimin. Tá ChatGPT kom út, fór eg beinanvegin at
                nýta ritvit – og sá skjótt teir stóru møguleikarnar fyri føroyskar fyritøkur.
              </p>
              <p className="text-lg mb-4">
                Men eitt var ein trupulleiki: Flestu høvdu hvørki tíð ella møguleika at seta seg
                inn í ritvit.
              </p>
              <p className="text-lg">
                Tí stovnaði eg Tøkni Tænastan – fyri at byggja eina brúgv millum møguleikar
                ritvitsins og tær veruligu tørvirnar hjá føroyskum fyritøkum. Vit hjálpa
                fyritøkum at gera arbeiðsgongdir skjótari, lættari og effektivari – við ritvit
                sum amboð, sum gevur meining fyri teg.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Hvussu vit hjálpa: Ein stigvís tilgongd
              </h2>
              <p className="text-lg mb-4">
                Ritvit kann kennast fløkt, og nógvar fyritøkur seta somu spurningar:
              </p>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>
                  <strong>Hvar skulu vit byrja?</strong>
                </li>
                <li>
                  <strong>Hvussu riggar tað í praksis?</strong>
                </li>
                <li>
                  <strong>Er ritvit ov tekniskt fyri okkum?</strong>
                </li>
              </ul>
              <p className="text-lg mb-4">
                Hjá Tøkni Tænastan hava vit ment eina einfalda tilgongd, sum tryggjar, at tíni
                fyrstu stig við ritvit eru bæði skilagóð og løtt:
              </p>
              <ol className="list-decimal ml-6 text-lg">
                <li>
                  <strong>Ritvit fyri nýbyrjarar</strong> – Lær tað grundleggjandi, uttan at
                  drukna í tøkni.
                </li>
                <li>
                  <strong>Finn 15 ChatGPT-nýtslur til tína fyritøku</strong> – Greið frá, hvussu tú
                  kanst spara tíð og betra um arbeiðið.
                </li>
                <li>
                  <strong>Automatiskan í praksis</strong> – Vit hjálpa tær við at innleiða ritvit í
                  verki, so tú sært munin.
                </li>
              </ol>
              <p className="text-lg mt-4">
                Tá ið tað eru smáar, snildar ritvit-loysnir, ið skapa bestu úrslitini – ikki
                stórar, dýrar verkætlanir, sum ongantíð verða lidnar.
              </p>
            </div>
          </div>
        </section>

        {/* Our Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Okkara royndir: Verkætlanir og úrslit
              </h2>
              <p className="text-lg mb-4">
                Vit hava longu hjálpt fleiri føroyskum fyritøkum og felagsskapum við ritvit-loysnum.
                Her eru nøkur dømi:
              </p>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>
                  <strong>Størsta skeið fyri lærarar í Føroyum</strong> – Vit hjálptu lærarum at
                  brúka ritvit til at spara tíð og betra undirvísingina.
                </li>
                <li>
                  <strong>Ráðgeving fyri Eya Architects og Búset</strong> – Ritvit-optimering av
                  arbeiðsgongdum.
                </li>
                <li>
                  <strong>Skapandi verkætlanir</strong> – Ritvit-framleidd list til Tonik og ein
                  stóran bakgrund til Tech BBQ.
                </li>
                <li>
                  <strong>Ritvit-framleiddar framløgur</strong> – 100% ritvit-framleidd
                  marknaðarføringsvideo víst í Norðurlandahúsinum.
                </li>
                <li>
                  <strong>Ritvit-amboð til politikarar og vinnulív</strong> – Hjálpir
                  avgerðartakarum at brúka ritvit strategiskt.
                </li>
              </ul>
              <p className="text-lg">
                Vit arbeiða bæði við smáum og stórum fyritøkum og tillaga alt til tín tørv.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Hví velja okkum?</h2>
              <p className="text-lg mb-4">
                Ritvit kann vera ein víðfevndur skógur av móðutrendum og roksuttum orðum.
                Vit skera ígjøgnum óneyðugt prát og bjóða tær:
              </p>
              <ul className="list-disc ml-6 text-lg">
                <li>
                  <strong>Praktiskar og greiðar loysnir</strong> – Eingin óneyðug tøknilýsing, bert
                  nytsam ráðgeving.
                </li>
                <li>
                  <strong>Úrslit frá fyrsta degi</strong> – Tú sært munin beinanvegin.
                </li>
                <li>
                  <strong>Lokalt førleikastig</strong> – Vit skilja tær serligu avbjóðingarnar og
                  møguleikarnar í Føroyum.
                </li>
                <li>
                  <strong>Verulig ritvit-roynd</strong> – Vit brúka ritvit hvønn dag og vita, hvat
                  riggar í praksis.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">
                Ert tú klár/ur at taka næsta stig?
              </h2>
              <p className="text-lg mb-4">
                Ritvit nýtist ikki at vera ein stór, ótrygg umbroyting. Við røttum leisti kann hon
                gerast eitt virðismikið amboð, sum ger tína fyritøku meira effektivari og kappingarføra.
              </p>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>
                  <strong>Tekna teg til okkara skeið</strong> – Fá eina lætta og skilagóða byrjan
                  við ritvit.
                </li>
                <li>
                  <strong>Latið okkum finna 15 ritvit-nýtslur til tína fyritøku</strong> – Finn teir
                  skjótastu fyrimunirnar.
                </li>
                <li>
                  <strong>Set teg í samband við okkum</strong> – Vit hjálpa tær víðari, stig fyri
                  stig.
                </li>
              </ul>
              <p className="text-lg font-semibold">
                Ritvit er framtíðin – men hon er eisini nútíðin. Skal hon gerast partur av
                tíni fyritøku?
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
