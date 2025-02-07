import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-down">
            Um okkum
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-down text-text/80">
            Vit bera ritvit til Føroyar – og víðari
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-text/80 animate-fade-down">
            Ritvit broytir heiminn. Vit syrgja fyri, at Føroyar ikki detta afturúr.
          </p>
        </div>
      </section>

      {/* Introduktión */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
            <p className="text-lg mb-4">
              Vit stovnaðu <strong>Tøkni Tænastuna</strong> av einføldum orsøkum:
            </p>
            <p className="text-lg mb-4">
              <strong>
                At hjálpa føroyskum fyritøkum at brúka ritvit – uttan stríð, uttan
                hype, uttan óneyðuga tøkni-snakk.
              </strong>
            </p>
            <p className="text-lg mb-4">
              Veruleikin? <strong>Ritvit er longu her.</strong> Og tey, sum læra at
              brúka tað fyrst, fáa eitt stórt fyrimun.
            </p>
            <p className="text-lg">
              Tí gera vit ritvit <strong>einfalt, brúkiligt og praktiskt</strong> –
              so fyritøkur kunnu{" "}
              <strong>
                spara tíð, arbeiða smartari og fáa meira frá hondini
              </strong>.
            </p>
            <p className="text-lg mt-4">
              🚀{" "}
              <strong>
                Eingin tøkni-fatan neyðug. Ongar dýrar ráðgevarar. Bara ritvit,
                sum riggar.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Okkara søga */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-down">
            Okkara søga: Frá forvitni til nýskapan
          </h2>
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
            <h3 className="text-2xl font-semibold mb-4">Møt Gunnleyg</h3>
            <p className="text-lg mb-4">
              Eg havi altíð verið bergtikin av <strong>nýggjari tøkni</strong> –
              øllum tí, sum broytir, hvussu vit arbeiða og liva.
            </p>
            <p className="text-lg mb-4">
              Sum verkfrøðingur arbeiddi eg við framkomnum skipanum, men einki
              fangaði meg sum ritvit.
            </p>
            <p className="text-lg mb-4">So ein dag gekk tað upp fyri mær:</p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                💡 <strong>Ritvit er ikki bara fyri stórar tøkni-risar.</strong>
              </li>
              <li>
                💡 <strong>Ritvit er ikki bara framtíð – tað er nú.</strong>
              </li>
              <li>
                💡{" "}
                <strong>Ritvit kann nýtast í øllum fyritøkum – eisini í Føroyum.</strong>
              </li>
            </ul>
            <p className="text-lg mb-4">
              Trupulleikin? <strong>Flestu hava ikki tíð at seta seg inn í tað.</strong>
            </p>
            <p className="text-lg mt-4">
              Tí stovnaði eg <strong>Tøkni Tænastuna</strong> – fyri at byggja brúnna
              millum <strong>møguleikarnar hjá ritviti</strong> og{" "}
              <strong>veruligu tørvin hjá føroyskum fyritøkum</strong>.
            </p>
            <p className="text-lg mt-4">
              Nú hjálpa vit fyritøkum at{" "}
              <strong>
                sjálvvirka uppgávur, effektivisera arbeiðið og brúka ritvit fult
                út
              </strong>{" "}
              – so tær kunnu fokusera uppá tað, sum veruliga hevur týdning.
            </p>
          </div>
        </div>
      </section>

      {/* Okkara visjón */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Okkara visjón: Ritvit fyri øll</h2>
            <p className="text-lg mb-4">
              Ritvit er ikki bara fyri <strong>Silicon Valley</strong>. Tað er fyri
              tína fyritøku. Títt toymi. Tína gerandisdag.
            </p>
            <p className="text-lg mb-4">
              Mál okkara hjá <strong>Tøkni Tænastuni</strong> er at:
            </p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                ✅ <strong>Gera ritvit lætt og atkomiligt</strong> fyri øll.
              </li>
              <li>
                ✅ <strong>Hjálpa fyritøkum at spara tíð og tilfeingi</strong> – uttan
                at seta fleiri fólk í starv.
              </li>
              <li>
                ✅ <strong>Skapa ritvit-loysnir, sum veruliga rigga.</strong>
              </li>
            </ul>
            <p className="text-lg">
              Vit selja ikki bara "ritvit-ráðgeving". Vit{" "}
              <strong>læra, innføra og byggja</strong> loysnir, sum geva{" "}
              <strong>verulig úrslit</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Hvat ger okkum øðrvísi? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Hvat ger okkum øðrvísi?</h2>
            <p className="text-lg mb-4">
              Ritvit er <strong>allastaðni</strong>, men flestu fyritøkur stríðast
              við somu spurningar:
            </p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                ❌ <strong>Hvar skulu vit byrja?</strong>
              </li>
              <li>
                ❌ <strong>Hvussu riggar tað í verki?</strong>
              </li>
              <li>
                ❌ <strong>Er ritvit ov trupult fyri okkum?</strong>
              </li>
            </ul>
            <p className="text-lg mb-4">
              Tað, sum ger okkum øðrvísi:
            </p>
            <ul className="list-disc ml-6 text-lg">
              <li>
                💡 <strong>Vit tosa títt mál.</strong> Ongar torgreiddar
                forklaringar – bara greið ráðgeving.
              </li>
              <li>
                🚀 <strong>Vit leggja dent á skjót úrslit.</strong> Tú sært mun
                beinanvegin.
              </li>
              <li>
                🇫🇴 <strong>Vit kenna føroyska marknaðin.</strong> Vit skilja
                veruligu avbjóðingarnar.
              </li>
              <li>
                🤖 <strong>Vit brúka sjálvi ritvit hvønn dag.</strong> Tað her er
                ikki bara teori – vit vita, hvat riggar.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
