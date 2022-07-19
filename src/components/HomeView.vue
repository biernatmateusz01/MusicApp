<template>
  <div class="relative">
    <div class="relative overflow-x-hidden min-h-screen text-white bg-black-bg">
      <BaseBanner />
      <TopList :top5="top5" @get-all-infs="getAllInfs" />
      <SpecialsSongs
        :special-songs="specialSongs"
        @change-results="changeResults"
        @get-all-infs="getAllInfs"
      />
      <AllSongs @get-all-infs="getAllInfs" :all-songs="songs" />
      <BaseFooter />
    </div>
    <MoreInfsView
      v-if="isOpen"
      @close-modal="isOpen = false"
      :data-modal="mySong"
    />
  </div>
</template>

<script>
import BaseBanner from "../components/BaseBanner.vue";
import TopList from "../components/TopList.vue";
import SpecialsSongs from "../components/SpecialsSongs.vue";
import AllSongs from "../components/AllSongs.vue";
import BaseFooter from "../components/BaseFooter.vue";
import MoreInfsView from "../components/MoreInfsView.vue";
export default {
  name: "HomeView",

  components: {
    BaseBanner,
    TopList,
    SpecialsSongs,
    AllSongs,
    BaseFooter,
    MoreInfsView,
  },

  emits: {
    getAllInfs: null,
  },

  data() {
    return {
      isOpen: false,
      mySong: {},
      songs: [
        {
          id: 1,
          authorName: "Sobel, Sanah",
          title: "Cześć jak się masz?",
          img: "https://i1.sndcdn.com/artworks-zDoAtP7SQS8ln4gJ-2wHwaw-t500x500.jpg",
          secondImg: "https://i.ytimg.com/vi/DnePdjIA0wk/maxresdefault.jpg",
          link: "https://www.youtube.com/embes?v=DnePdjIA0wk",
          moreInfs:
            "singel polskiego piosenkarza Sobla oraz polskiej piosenkarki Sanah. Utwór pochodzi z albumów Pułapka na motyle w wersji platynowej oraz Irenka w wersji finalnej. Singel został wydany 11 października 2021.",
        },
        {
          id: 2,
          authorName: "Dawid Kwiatkowski",
          title: "Proste",
          img: "https://i.ytimg.com/vi/s7lpTdRMPn4/maxresdefault.jpg",
          secondImg:
            "https://www.cgm.pl/wp-content/uploads/2021/07/Dawid-Kwiatkowski_6_fot.-Dagmara-Szewczuk-670x390.png",
          link: "https://www.youtube.com/watch?v=s7lpTdRMPn4",
          moreInfs:
            "„Proste” to piosenka o tych, którzy są już zmęczeni przelotnymi znajomościami bez uczucia i jakiejkolwiek emocji. Chęć posiadania mocnej więzi z drugim człowiekiem wygrywa już ze spontanicznymi chwilami, które pozornie przynoszą szczęście, a tak naprawdę pokazują nam, jak bardzo nie potrafimy w miłość.",
        },
        {
          id: 3,
          authorName: "Sobel",
          title: "Fiołkowe Pole",
          img: "https://i.ytimg.com/vi/_2b9ZnNlbaI/maxresdefault.jpg",
          secondImg: "https://i.ytimg.com/vi/1rTV7DCnF3Y/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=Od-8AwX_rCk",
          moreInfs:
            "gitarowa ballada pochodząca z debiutanckiej płyty polskiego piosenkarza Sobla zatytułowanej Pułapka na motyle. Utwór został wydany 13 kwietnia 2021 nakładem wytwórni Def Jam Recordings Poland jako czwarty singiel z albumu. Twórcą tekstu jest Sobel, natomiast muzykę skomponował Piotrek Lewandowski.",
        },
        {
          id: 4,
          authorName: "Lanberry",
          title: "Nocny Express",
          img: "https://kulturalnemedia.pl/wp-content/uploads/2022/01/lanberry-nocny-express-3000x3000-1-scaled.jpg",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-1rPg-6oFq-uY5C_lanberry-i-jej-podroz-nocnym-expressem-20-sekund-teledysku-tylko-u-nas-1920x1080-nocrop.jpg",
          link: "https://www.youtube.com/watch?v=IP7fITuu02o",
          moreInfs:
            "Nocny Express to pierwszy singiel artystki, który wprowadza nas w klimat jej nowej płyty. Album ukaże się na przełomie roku 2022 i 2023. Lanberry twierdzi, że w muzyce pop można mieszać wiele wpływów. - Tak jak często w mojej twórczości, to opowieść o relacjach.",
        },
        {
          id: 5,
          authorName: "Dawid Podsiadło, Daria Zawiałow",
          title: "Za krótki sen",
          img: "https://djpromotion.com.pl/djraport/wp-content/uploads/2021/04/daria-zawialow-za-krotki-sen-podsiadlo.jpg",
          secondImg:
            "https://www.rmf.fm/_files/Short_foto/625/64466c761bbc5975cb40009d79620e62.jpg",
          link: "https://www.youtube.com/watch?v=xagIRaOFfS0",
          moreInfs:
            "Za krótki sen – drugi singel Darii Zawiałow i Dawida Podsiadło wydany w kwietniu 2021 zapowiadający trzeci album Wojny i noce. Piosenka dotarła do 7. miejsca na liście AirPlay, najczęściej odtwarzanych utworów w polskich stacjach radiowych.",
        },
        {
          id: 6,
          authorName: "Mrozu",
          title: "Złoto",
          img: "https://d-art.ppstatic.pl/kadry/k/r/1/06/07/60abb784542fb_o_full.jpg",
          secondImg:
            "https://d-art.ppstatic.pl/kadry/k/r/1/74/2e/60abb77f92936_o_xlarge.jpg",
          link: "https://www.youtube.com/watch?v=mr4_R3qrKEc",
          moreInfs:
            "W swoim najnowszym singlu „Złoto” Mrozu wraca do pierwszej połowy lat 90., czasu beztroski, swobody i przyjemnej ekscytacji związanej z tym, co przyniesie przyszłość. Piosenka narodziła się po dotarciu trzech kumpli do górskiej chaty z zapierającym dech widokiem na Jezioro Czorsztyńskie. Ze sobą zabraliśmy gitary, sprzęt studyjny i rowery. Muzyka do piosenki „Złoto” to efekt pierwszej nocy w głuszy, która wyzwoliła niesamowitą radość z grania i zapomnienie o trudnej sytuacji, która nas muzyków obecnie dotknęła - powiedział o nowym singlu Mrozu.",
        },
        {
          id: 7,
          authorName: "Mrozu",
          title: "Galácticos",
          img: "https://static.ising.pl/songs/9788/cover_640.jpg",
          secondImg: "https://i.ytimg.com/vi/8n3LaDrLV5I/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=8n3LaDrLV5I",
          moreInfs: `"Galacticos" to luzacki numer, który zrobiliśmy razem z Kubą Galińskim i Arkiem Sitarzem w trakcie pierwszych lockdownów w 2020 roku. W czasie, kiedy większość z nas zmuszona była siedzieć w bloku, a rzeczywistość była niepewna, tym numerem poprawialiśmy sobie humory, wspominając osiedlowe akcje. Nie byliśmy jakimiś zagorzałymi fanami Realu, ale pamiętamy czasy "Galactivos", a przede wszystkim wybitnych piłkarzy z tamtej drużyny – z Ronaldo Luiz Nazario de Lima na czele. Jak grać, to inspirować się najlepszymi, czy to w sporcie czy w sztuce, ale przede wszystkim tak, by mieć z tego frajdę. - przyznał Mrozu`,
        },
        {
          id: 8,
          authorName: "Quebonafide",
          title: "BUBBLETEA",
          img: "https://static.ising.pl/songs/9580/cover_640.jpg",
          secondImg: "https://i.ytimg.com/vi/IFAF3NYM_KI/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=IFAF3NYM_KI",
          moreInfs:
            "piąty singiel polskiego rapera Kuby Grabowskiego, znanego pod pseudonimem Quebonafide, z gościnnym udziałem Darii Zawiałow, promujący album zatytułowany Romantic Psycho. Wydawnictwo, w formie digital download ukazało się 1 kwietnia 2020 roku nakładem QueQuality.  Utwór wyprodukowany przez Duita został zarejestrowany w Nobocoto Studio. Jest to jego pierwszy utwór, który zaczął być emitowany w rozgłośniach mainstreamowych. Jest to efekt wcześniejszego sukcesu mainstreamowego Darii Zawiałow, która pojawiła się gościnnie w tym utworze.",
        },
        {
          id: 9,
          authorName: "Taco Hemingway",
          title: "W PIĄTKI LEŻĘ W WANNIE",
          img: "https://images.genius.com/685795d1ab440ba7a5afbfac3725cabc.1000x1000x1.jpg",
          secondImg: "https://i.ytimg.com/vi/3ah4t1P9yFA/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=3ah4t1P9yFA",
          moreInfs:
            "utwór muzyczny polskiego rapera Taco Hemingwaya. Pochodzi z jego trzeciego albumu studyjnego, Pocztówka z WWA, lato ’19, wydanego 23 lipca 2019 roku nakładem Taco Corp i Asfalt Records. Gościnnie wystąpił w nim Dawid Podsiadło. Utwór W piątki leżę w wannie opisujące życie młodych ludzi, Marcin Flint stwierdza, że wokal Dawida Podsiadły to jeden z najlepszych momentów na płycie, krytyk Michał Krawczuk również go zachwala . Rafał Samborski pochwalił tekst piosenki i dodał „...że nikt z głośnych ksywek w polskim rapie tak głośno nie mówił o pułapkach w jaką wpadają mężczyźni próbujący wpisywać się w kulturę maczo.",
        },
        {
          id: 10,
          authorName: "Taco Hemingway",
          title: "Następna Stacja",
          img: "https://i1.sndcdn.com/artworks-000233784444-ywr950-t500x500.jpg",
          secondImg:
            "https://rapowo.pl/wp-content/uploads/2021/07/c17_nyt89.jpg",
          link: "https://www.youtube.com/watch?v=phCnVXHfN-o",
          moreInfs: `Następna Stacja to utwór oparty o warszawski układ metra – Taco zabiera nas w podróż wzdłuż i wszerz Warszawy – od północy na południe i ze wschodu na zachód, każdej ze stacji obydwu linii metra poświęcając kilka wersów.`,
        },
        {
          id: 11,
          authorName: "Kizo",
          title: "DISNEY",
          img: "https://i.ytimg.com/vi/_29dLT6OMTU/maxresdefault.jpg",
          secondImg:
            "https://djpromotion.com.pl/djraport/wp-content/uploads/2021/09/kizo-disney.jpg",
          link: "https://www.youtube.com/watch?v=_29dLT6OMTU",
          moreInfs: `To był bit, który dostałem i od razu, kiedy go usłyszałem, pomyślałem "ale hitowy bit". Ale nie miałem na niego żadnego pomysłu i sobie leżał. Ja potrzebowałem do niego natchnienia. Wracałem co jakiś czas, przez kilka dni go odpalałem, myślałem "to jest zaj***te, ale nie mam pomysłu". Ten bit leżał sobie z miesiąc i ciągle do niego wracałem. Pojawił się później taki bodziec, kiedy nagle wróciłem do domu, odpaliłem go i "wiem". Spędziłem fajny weekend i na koniec niedzielnego wieczoru udało mi się to stworzyć od A do Z - powiedział Kizo`,
        },
        {
          id: 12,
          authorName: "Lanberry",
          title: "Od Zaraz ",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://radiotop.pl/wp-content/uploads/2021/07/Lanberry-scaled.jpg",
          link: "https://www.youtube.com/watch?v=ltsjy_Nyd9Q",
          moreInfs: `To piosenka, która zachęca do życia tu i teraz, w harmonii z tym, co jest naszą prawdą i życiowym powołaniem, do tego, by na chwilę zwolnić w otaczającym chaosie. Za tekst utworu odpowiadają Lanberry i Monika Wydrzyńska z duetu Linia Nocna, natomiast muzykę artystka skomponowała wraz z Cameronem Warrenem.`,
        },
        {
          id: 13,
          authorName: "Lanberry ",
          title: "Tylko Tańczę ",
          img: "https://ecsmedia.pl/c/tylko-tancze-b-iext69381535.jpg",
          secondImg: "https://i.ytimg.com/vi/0VOlesIk-e4/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=0VOlesIk-e4",
          moreInfs: `Ta piosenka ma pozytywny przekaz, ale z nutką czegoś ostatecznego. Ma ten smuteczek: "Ja tylko tutaj tańczę, nie zostanę tu na zawsze" - to jest trochę o śmierci. Bawię się tu i teraz, i robię to, co chcę, bo to daje mi jakość życia, o jaką zawsze mi chodziło.`,
        },
        {
          id: 14,
          authorName: "Happysad",
          title: "Zanim pójdę",
          img: "https://ecsmedia.pl/c/zanim-pojde-dluga-droga-zespolu-happysad-b-iext104551612.jpg",
          secondImg: "https://i.ytimg.com/vi/yLfSPMPBeqw/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=W1jIuwYGIrU",
          moreInfs: `Najpopularniejszy kawałek zespołu Happysad, "Zanim Pójdę" to lekki i przyjemny utwór traktujący o tym, czym tak naprawdę jest dojrzała miłość. Wielu młodych ludzi ceni sobie tekst tej piosenki za prostotę, z jaką przekazuje nam głębszą myśl i skłania do zastanowienia się, co jest ważne w związku dwojga ludzi.`,
        },
        {
          id: 15,
          authorName: "Sanah",
          title: "kolońska i szlugi",
          img: "data:image/jpeg;base64,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",
          secondImg: "https://i.iplsc.com/-/000DMUF08HSI56HW-C122.jpg",
          link: "https://www.youtube.com/watch?v=W4KfEvDutk4&list=PL9Ix-92_e4TDbwoOZvT9BmDhX7gQ1aTMF&index=1",
          moreInfs: `Kolońska i szlugi – szósty singel polskiej piosenkarki Sanah z jej drugiego albumu studyjnego pt. Irenka. Singel został wydany 29 października 2021. Sanah napisała i skomponowała utwór wraz z Jakubem Galińskim.`,
        },
        {
          id: 16,
          authorName: "Mrozu",
          title: "Palę w oknie",
          img: "data:image/jpeg;base64,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",
          secondImg: "https://i.ytimg.com/vi/dSVwmlvGqsg/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=dSVwmlvGqsg&list=PL9Ix-92_e4TDbwoOZvT9BmDhX7gQ1aTMF&index=13",
          moreInfs: `"Palę W Oknie" to wydany 4 lutego 2022 roku trzeci oficjalny singiel, po utworach "Galácticos" z 19 października 2021 roku oraz wydanym 21 maja 2021 roku singlu "Złoto", stanowiący zapowiedź szóstego albumu studyjnego polskiego piosenkarza, producenta muzycznego, kompozytora i autora tekstów Łukasza Mroza, znanego pod pseudonimem scenicznym Mrozu. Utwór "Palę W Oknie" to opowieść o frustrującej sytuacji, gdy bliska nam osoba, będąc w kłopotach, odmawia przyjęcia od nas pomocy. Mężczyzna, choć nie do końca rozumie zachowanie kobiety, akceptuje jej decyzję, podkreślając jednocześnie, że ich historia mogła potoczyć się inaczej.`,
        },
        {
          id: 17,
          authorName: "Taco Hemingway",
          title: "Café Belga",
          img: "http://pudelek.wpcdn.pl/e08e9795f18b43cc9cee65a5592d32b363168f20.jpg",
          secondImg: "http://rondel.pl//files/721/fb/78238.jpg",
          link: "https://www.youtube.com/watch?v=LvE4L1vNOzo&list=OLAK5uy_lQ_VCrKL62iOX3ci6dUcC1EMus2WMwmk8&index=2",
          moreInfs: `Café Belga został nagrany w warszawskim Studio Nagrywarka, a jego produkcją zajęli się wieloletni współpracownicy rapera, Rumak i Borucci. Tytuł wydawnictwa nawiązuje do brukselskiej kawiarni Café Belga. W utwory zostały wplecione fragmenty wywiadu, którego Hemingway udzielił 15 maja 2018 roku w Café Belga dziennikarzowi Markowi Fallowi. Nagrania zakończyły się w czerwcu 2018 roku. Autorami okładki są Łukasz Partyka, Sonia Szóstak i Piotr Dudek`,
        },
        {
          id: 18,
          authorName: "Grzegorz Hyży",
          title: "O Pani !",
          img: "https://www.rmf.fm/_files/Upload/Images/Grzegorz_Hyy_-_O_Pani.jpg",
          secondImg:
            "https://cdn.koncertomania.pl/file/eventmediabackup/11/1/1630889998DD8VfZRYgUgtRbGsj3V3cJZyJRwJCS.jpg",
          link: "https://www.youtube.com/watch?v=3ssoWhPH2eI",
          moreInfs: `Nowy utwór to romantyczna opowieść o zakochanej w sobie parze. Nasz główny bohater posiada wielkie pragnienie bycia pożądanym przez swoją wybrankę. Nie liczy się z konsekwencjami tego uczucia. Dla niego najważniejsza jest siła uczucia i nic więcej.`,
        },
        {
          id: 19,
          authorName: "Taco Hemingway",
          title: "2031",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://www.glamour.pl/media/cache/big/uploads/media/default/0003/83/taco-hemingway-planuje-przerwe-od-muzyki-czyli-dlaczego-zasmucila-nas-plyta-cafe-belga.jpeg",
          link: "https://www.youtube.com/watch?v=eu-hZ1kTA4Q&list=OLAK5uy_lQ_VCrKL62iOX3ci6dUcC1EMus2WMwmk8&index=5",
          moreInfs: `"2031" to muzyczna próba spojrzenia w przyszłość, wyobrażenia sobie tego, jak będzie wyglądało życie za 5, 10, 15 lat. W tekście utworu Taco wciela się w samego siebie z przyszłości. Przeżywa kolejne lata i, z roku na rok, jest coraz mniej ceniony, coraz mniej popularny, coraz mniej kochany.
                      Narrator widzi w sobie upadłego gwiazdora, po którym niewiele w świecie zostało. Jeszcze niedawno wyprzedawał trasy koncertowe, jego utworu były numerami 1 na listach przebojów. Dziś jest cieniem dawnego siebie i musi martwić się o pieniądze, o to, jak je zarobi i na co przeznaczy.
                      Mija czas, wraz z nim przemija sława Taco. Jest coraz starszy i coraz słabiej radzi sobie w biznesie. W tekście tego utworu niejako przewiduje to, jak może wyglądać jego świat w przyszłości. Wie, że sława nie jest wieczna, ma świadomość tego, że kiedyś popularność jego muzyki przeminie. "Upłynęło tyle lat, nie pamięta o mnie świat", powtarza w refrenie piosenki. Piosenki, która w gorzki sposób rozprawia się z celebryckim dążeniem do nieśmiertelności.
                      2031 to rok, w którym wszystko całkiem na runąć. Z drogiego auta Filip przesiada się znów do tramwaju. Ludzie go nie rozpoznają, nikt nie prosi o zdjęcie, o autograf. Jest anonimowy dla świata, który jeszcze niedawno składał mu hołd.`,
        },
        {
          id: 20,
          authorName: "TACONAFIDE",
          title: "Tamagotchi",
          img: "https://i1.sndcdn.com/artworks-000323419796-q10sgh-t500x500.jpg",
          secondImg:
            "https://www.elle.pl/media/cache/big/uploads/media/default/0004/87/e68a6a25022dc9f88d4bc0d65a58b04c0fc7f341.jpeg",
          link: "https://www.youtube.com/watch?v=odWxQ5eEnfE",
          moreInfs: `“Tamagotchi” to drugi singiel z płyty Taco Hemingwaya i Quebonafide pt. “SOMA 0,5 mg". Zarówno tytuł, jak i tekst piosenki odnoszą się do popularnej na przełomie wieków elektronicznej zabawki, która pozwalała na "hodowanie" zwierzaka na ekranie urządzenia. Zwierzak ów potrzebował opieki, jedzenia, zainteresowania. Tak, jak potrzebują go ludzie. 
                    W tekście piosenki narratorzy odnoszą się do Tamagotchi jako czegoś, czym niejako sami się stali. Chcą tylko jeść, pić i spać. Tak najpewniej objawia się ich depresja, potrzeba wycofania się ze świata, z biegu i pogoni, w której przecież uczestniczą. 
                    Utwór to opowieść o smutku i potrzebie uwolnienia się od niego, o poszukiwaniu miłości i spełnienia, o które tak trudno. W swojej zwrotce Taco wspomina kobietę, którą kocha, a która "ma go dosyć". Czuje, że życie wymyka mu się z rąk, że nie będzie w stanie już go poskładać. Jednocześnie korzysta ze swojego sukcesu, wydaje pieniądze i zapija tępy ból po utraconej miłości. 
                    Podobnie jest w przypadku Quebo, który również szuka miłości. Nie "wytapetowanej" laski z Tindera, a kogoś, kto go zrozumie, otworzy się na niego, nauczy go czegoś. Tymczasem jedyne co mu pozostaje to samotność i seriale w pustym mieszkaniu. 
                    Miłość jest dla narratorów nieuchwytnym, wymarzonym staniem, uczuciem, którego szukają, a którego ciągle nie potrafią znaleźć. Czują się oddzieleni od niej szybą - widzą ją, ale nie mogą dosięgnąć. `,
        },
        {
          id: 21,
          authorName: "Mata",
          title: "Szafir",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://goingapp.pl/more/wp-content/uploads/2021/10/mata-anja-1600x697.jpg",
          link: "https://www.youtube.com/watch?v=c1fdZ_FGJe0",
          moreInfs: `Szafir to kolejny singiel z albumu Młody Matczak. I tak, jak w przypadku pozostałych, wyróżnia się on naprawdę mocno dopieszczonym klipem. Tym razem dostajemy wizualny storytelling, który dość luźno koresponduje z tekstem utworu. Klip opowiada o miłosnej historii Maty i Anji Rubik zaklętej w ciało syreny morskiej.`,
        },
        {
          id: 22,
          authorName: "Kizo",
          title: "LOT ale to ALGIDA",
          img: "https://adria-art.pl/storage/5148/kizo.jpg",
          secondImg:
            "https://gfx.dlastudenta.pl/photo_new/80f/b80/c7b/3ec/1563002",
          link: "https://www.youtube.com/watch?v=8rjJcJYK8sU",
          moreInfs: ``,
        },
        {
          id: 23,
          authorName: "BARANOVSKI",
          title: "Lubię być z nią",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://ci4.googleusercontent.com/proxy/uXzeMSfXV1h3Fulvv1XSX7yjOPJgTIXQOqWuVAqeQ3tfRiggNirm_1VeM6GOkIDt4y3M6t6MNWT4RMsQyS9IU6-eVQanNsujYVHDMXvo5YPaJdMXFwkwL0Z4DrG095mnzhIhIrCq1_9h6jEw7DGoEPXZYaxaAQ=s0-d-e1-ft",
          link: "https://www.youtube.com/watch?v=7yHroW3bcDo",
          moreInfs: `Lubię być z nią – drugi singel polskiego piosenkarza Baranovskiego z jego drugiego albumu studyjnego, zatytułowanego Baranovski 2. Singel został wydany 4 września 2020.`,
        },
        {
          id: 24,
          authorName: "BARANOVSKI",
          title: "Tęskno mi do gwiazd",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-DYuz-Nxdv-PpoM_teskno-mi-do-gwiazd-piosenka-baranovskiego-dodaje-energii-wideo-664x442.jpg",
          link: "https://www.youtube.com/watch?v=K3YJmo3tPhk",
          moreInfs: `„Ta piosenka to historia podróży. Opowieść o niszczejącym świecie, który obrał kolizyjny kurs” – mówi o swojej nowej piosence BARANOVSKI. I dodaje: „jedyną szansą na przetrwanie jest powrót – do gwiazd, do marzeń, do domu”.`,
        },
        {
          id: 25,
          authorName: "Budka Suflera",
          title: "Jolka Jolka",
          img: "https://pik.poznan.pl/wp-content/uploads/2020/01/Budka-Suflera-koncert.jpg",
          secondImg:
            "https://static.wikia.nocookie.net/muzyka/images/c/c6/Budka_Suflera.jpg/revision/latest?cb=20140516193651",
          link: "https://www.youtube.com/watch?v=fYKfvvwsoAY",
          moreInfs: `Romans między nim, a tytułową Jolantą naprawdę miał miejsce, historia wydarzyła się late 1982 roku, krótko później powstał ten przebój. Trudno więc żeby Jolka nie pamiętała tego lata. Utwór stanowi miłosną opowieść, w której bohater piosenki opowiada o swoim gorącym, letnim romansie z Jolką właśnie.`,
        },
        {
          id: 26,
          authorName: "Perfect",
          title: "Niepokonani",
          img: "http://images.genius.com/b4b17ac5b726dcead076ab4728d0a6e9.1000x1000x1.jpg",
          secondImg:
            "https://www.terazmuzyka.pl/wp-content/uploads/2020/10/perfect.jpg",
          link: "https://www.youtube.com/watch?v=HZ8qBioPlHE",
          moreInfs: `Piosenka miłosna, która stała się hymnem lat 90. Jej niezwykła moc, silny przekaz i wzruszająca treść sprawiły, że jest dziś jedną z najpopularniejszych polskich piosenek wszechczasów. Markowski opowiada tutaj o miłości pełnej przeciwieństw. Prawdziwym związku, w którym zdarzają się kłótnie, a nawet awantury. Wtedy, kiedy po jednej z takich sprzeczek opadają emocje, widzimy jak niepotrzebne są konflikty między nami.`,
        },
        {
          id: 27,
          authorName: "Kombii",
          title: "Pokolenie",
          img: "data:image/jpeg;base64,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",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-Yewq-zkQV-Jgsv_kombii-664x442.jpg",
          link: "https://www.youtube.com/watch?v=h7ES_rO9bFM",
          moreInfs: `Pokolenie – dziesiąty singel zespołu Kombii z albumu C.D., wydany w 2004 roku.`,
        },
        {
          id: 28,
          authorName: "GOLEC UORKIESTRA",
          title: "Ściernisko",
          img: "https://i1.sndcdn.com/artworks-000343278750-ulvppw-t500x500.jpg",
          secondImg:
            "https://resources.tidal.com/images/e380e5e7/9973/411f/85e5/21d6d002a871/750x750.jpg",
          link: "https://www.youtube.com/watch?v=yrJ_lzYGJdg",
          moreInfs: `singel zespołu Golec uOrkiestra z albumu Golec uOrkiestra 2 wydany w 2000 roku. Utwór był notowany na liście przebojów Polskiego Radia Pomorza i Kujaw (2. miejsce). Był on również wykonywany przez zespół na Konkursie Sopot Festival 2000, w którym zajął 15. miejsce. Promował także film pt. Pieniądze to nie wszystko.`,
        },
        {
          id: 29,
          authorName: "Sławomir",
          title: "Miłość w Zakopanem",
          img: "https://yt3.ggpht.com/ytc/AKedOLToQHvQQI1M3CnUeK24LtckqMO8dBD_uybbYHbYBA=s250-c-k-c0x00ffffff-no-rj",
          secondImg: "https://i.ytimg.com/vi/vN9Opz2F_kU/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=n2hJA78YuWw",
          moreInfs: `„Miłość W Zakopanem” to kawałek, który Sławomir poświęca swojej ukochanej żonie, Magdalenie. Mamy tu do czynienia z miłosnym wyznaniem prawdziwie zakochanego mężczyzny, który chce dać do zrozumienia swej partnerce, że jest ona dla niego tą jedyną.`,
        },
        {
          id: 30,
          authorName: "Sanah",
          title: "Ale jazz!",
          img: "https://cdn.galleries.smcloud.net/t/galleries/gf-fNbm-s8og-CYRh_sanah-664x442.png",
          secondImg:
            "https://www.rmf.fm/_files/Short_foto/625/cbc57ae31e3a3e64e4c85df698399bd1.jpg",
          link: "https://www.youtube.com/watch?v=e4Gu2CsXYjs",
          moreInfs: `Sanah w swojej zwrotce śpiewa o poszukiwaniu miłości, ale nie za wszelką cenę. Cieszy się "z luzu", który ma w głowie będąc solo. Vito Bambino śpiewa głosem chłopaka, który martwi się, że jego ukochana nie pojawiła się na umówionym spotkaniu.`,
        },
        {
          id: 31,
          authorName: "Sylwia Grzeszczak",
          title: "Prawda o nas",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5AOIOV4UYK5H1lSc2nsNnNJkZR6oCyFWpzEtrK7XNqKNF7nGm8WkzsyBPAPg_nZrtFo&usqp=CAU",
          secondImg:
            "data:image/jpeg;base64,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",
          link: "https://www.youtube.com/watch?v=tp6oeL8tIdg",
          moreInfs: `"Prawda o nas" to wydany 9 kwietnia 2021 roku singiel Sylwii Grzeszczak, którym Artystka zapowiada premierę swojego czwartego solowego albumu studyjnego LP. Tytuł i dokładna data ukazania się wydawnictwa nie są jeszcze znane. Wraz z premierą singla do sieci trafiło także promujące go video, które zawiera niepublikowane wcześniej filmy pokazujące prywatne życie piosenkarki oraz filmy z tras koncertowych.`,
        },
        {
          id: 32,
          authorName: "Smolasty",
          title: "Duże Oczy",
          img: "https://ecsmedia.pl/cdn-cgi/image/width=270,height=270,/c/duze-oczy-b-iext75496274.jpg",
          secondImg: "https://i.ytimg.com/vi/o0IMclZOXwc/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=o0IMclZOXwc",
          moreInfs: `Wydany 5 sierpnia 2021 roku utwór zatytułowany "Duże Oczy" to kolejny singiel rapera tworzącego pod aliasem Smolasty. Piosenka jest następcą przebojowego utworu "Oh Daddy", który ukazał się na początku wakacji.
                    Pierwsza zapowiedź singla pojawiła się na platformie TikTok, gdzie przedpremierowo udostępniony został fragment piosenki. Po jej wydaniu natomiast  ramach promocji singla, także za pośrednictwem platformy TikTok, rozpoczął się oficjalny challenge związany z utworem "Duże oczy."
                    Wraz z premierą singla "Duże Oczy" do sieci trafiło także promujące go video, w którym pojawiła się plejada gwiazd. W teledysku można zobaczyć między innymi Janusza Walczuka, Marinę Łuczenko-Szczęsną, Wojciecha Gola czy Oliwkę Brazil..`,
        },
        {
          id: 33,
          authorName: "Sobel",
          title: "Każdego Dnia",
          img: "https://i.scdn.co/image/ab67616d0000b2736c2fd62470ad18ae54586c80",
          secondImg:
            "https://musiclovers.pl/wp-content/uploads/2020/05/Sobel.jpg",
          link: "https://www.youtube.com/watch?v=NrN3DLVpE28",
          moreInfs: ``,
        },
        {
          id: 34,
          authorName: "Sanah",
          title: "CZĄSTKA",
          img: "https://s-trojmiasto.pl/zdj/c/n/3/2478/241x340/2478120__c_96_0_432_576__kr.jpg",
          secondImg:
            "https://muzotakt.pl/wp-content/uploads/2019/05/Sanah-Czastka-PRphoto2.jpg",
          link: "https://www.youtube.com/watch?v=ViVIOQdzYno",
          moreInfs: `W tekście do utworu „Cząstka” wokalistka zawarła historię kobiety, która chciałby porozmawiać na spokojnie ze swoim byłym chłopakiem i spytać, czemu tak łatwo było mu ją zostawić. Piosenka „Koronki” opowiada o dziewczynie, której jedynym życzeniem jest to, żeby chłopak odszedł i zostawił ją w spokoju.`,
        },
        {
          id: 35,
          authorName: "Lady Pank",
          title: "Kryzysowa Narzeczona",
          img: "http://images.genius.com/5beecaac9bde7cba078e93b32a59681d.631x640x1.jpg",
          secondImg:
            "https://lastfm.freetls.fastly.net/i/u/ar0/e3f62662f6793a363ea09e6ea8802429.jpg",
          link: "https://www.youtube.com/watch?v=o71HQWqi68U",
          moreInfs: `"Kryzysowa narzeczona" to legendarny kawałek, godny reprezentant polskiej muzyki rockowej pochodzący z albumu Lady Pank zatytułowanego "Mniej niż zero" wydanego w 1983 roku. Tekst do piosenki napisał Andrzej Mogielnicki. Utwór opisuje historię mężczyzny opuszczonego przez ukochaną kobietę. Sytuacja ma miejsce w czasach Polski komunistycznej, kobieta ponad miłość i związek wybiera wyjazd za granicę i wizję dobrobytu na zachodzie - "Mogłaś być już na dnie/ A nie byłaś/ Nigdy nie dowiesz się/ Co straciłaś." W teledysku do utworu obok muzyków wystąpiła także późniejsza żona Jarosława Szlagowskiego - Katarzyna.
                    "Kryzysowa narzeczona" to swoistego rodzaju próba rozliczenia z PRLowską rzeczywistością, promowanymi przez nią wartościami, które w latach późniejszych przestały mieć jakąkolwiek rację bytu. Utwór w ciekawy sposób wprowadza słuchacza w lata 70., 80. i 90 widziane z perspektywy ówczesnej młodzieży tzw. pokolenia analogowego. Opisuje sposób spędzania przez nie czasu wolnego, rozrywki, którym się oddawało, ale pokazuje także jaki wpływ na życie młodych ludzi wywierał panujący system - "Mogłaś moją być/ Kryzysową narzeczoną/ Pomalutku żyć/ Tak jak nam tu naznaczono/ Mogłaś moją być/ Jakoś ze mną przebiedować/ Zamiast życzyć mi/ Na pocztówce nie wiadomo skąd/ Wesołych świąt."`,
        },
        {
          id: 36,
          authorName: "Taco Hemingway",
          title: "Bakayoko",
          img: "https://images.genius.com/41d606e3a11c18efaf3e49725bde0449.640x640x1.jpg",
          secondImg:
            "https://s-trojmiasto.pl/zdj/c/n/9/2563/1439x0/2563997-Taco-Hemingway-wystapi-w-ramach-cyklu-Letnie-Napiecie-20-sierpnia.jpg",
          link: "https://www.youtube.com/watch?v=IsZNTPluKN4",
          moreInfs: `Tytuł utworu Taco Hemingwaya „Bakayoko” został zaczerpnięty od nazwiska francuskiego piłkarza, który występuje na pozycji defensywnego pomocnika w AC Milan. Znany jest on ze swojej skuteczności w grze obronnej, a w grze Fifa 18 karta z jego nazwiskiem jest jedną z najbardziej pożądanych. – I nie wycofają się jak Bakayoko, Baka-Bakayoko – rapuje Taco. `,
        },
        {
          id: 37,
          authorName: "Sanah i Kwiat Jabłoni ",
          title: "Szary świat",
          img: "https://i.ytimg.com/vi/hgoSlepPeq8/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCrbhX7rX2QEA3fCgzqx2F0hKawxg",
          secondImg: "https://i.ytimg.com/vi/hgoSlepPeq8/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=hgoSlepPeq8",
          moreInfs: `"Szary Świat" to wydany 17 marca 2022 roku drugi singiel, po stworzonym z Igorem Herbutem utworze "Mamo tyś płakała" z 7 marca 2022 roku, który stanowi oficjalną zapowiedź trzeciego pełnowymiarowego albumu studyjnego Zuzanny "Sanah" Jurczak, zatytułowanego "Uczta." Piosenka została nagrana wspólnie przez polską piosenkarkę i autorkę tekstów Sanah oraz duet Kwiat Jabłoni. Utwór mówi o samotności i potrzebie chwilowego oderwania od tytułowej "szarej rzeczywistości", trudów codziennego życia. Piosenka przedstawiana jest z perspektywy kobiety i mężczyzny, którzy w nieco inny sposób czują i przeżywają dane emocje, ale jednocześnie mają to samo pragnienie: "(...) Tańcz ze mną/ Niech ściany się kręcą/ No tańcz/ Ta melodia się skończy i tak/ Tańcz ze mną/ Sekundy pędzą/ No tańcz/ Potem powróci mój szary świat (...)"`,
        },
        {
          id: 38,
          authorName: "Sanah i Artur Rojek",
          title: "Tęsknie sobie",
          img: "https://i.scdn.co/image/ab67616d0000b27388b11ba43118246c5fca7c61",
          secondImg:
            "https://www.cgm.pl/wp-content/uploads/2022/03/sanah-rojek.jpg",
          link: "https://www.youtube.com/watch?v=5mCu2uMYFLg",
          moreInfs: `"Tęsknię sobie" to wydany 24 marca 2022 roku czwarty singiel, po stworzonym z Igorem Herbutem utworze "Mamo tyś płakała" z 7 marca 2022 roku, wydanej 17 marca 2022 roku piosence "Szary Świat" - nagranej wspólnie z duetem Kwiat Jabłoni oraz wydanej 21 marca 2022 roku piosence "Czesława", w której gościnnie pojawia się Natalia Grosiak, który stanowi zapowiedź trzeciego pełnowymiarowego albumu studyjnego Zuzanny "Sanah" Jurczak, zatytułowanego "Uczta." Premiera wydawnictwa została zaplanowana na 15 kwietnia 2022 roku.`,
        },
        {
          id: 39,
          authorName: "Wiktor Dyduła",
          title: "Dobrze Wiesz, Że Tęsknię",
          img: "https://v.wpimg.pl/NDA5MzY2YSUgVztJdklsMGMPbxMwEGJmNBd3WHYKfnQ5GisTNVc8ITFaYx0rRz4lNkVjCjUdLzQoGjtLdlYnNzFZLAN2VyMmJFFiHGlQKCZ0BX1XOwV2d2wBf047HyxxdgJgSm0FfyInDS4Zb1R-Zjw",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-GRJU-5Bj4-AKox_wiktor-dydula-wiek-wzrost-pochodzenie-dziewczyna-piosenka-kim-jest-wiktor-dydula-1920x1080-nocrop.jpg",
          link: "https://www.youtube.com/watch?v=6dW0xhtvNBA",
          moreInfs: `Wiktor spełnił marzenie, jakim było wydanie singla. Do tego jest autorem tej piosenki, którą wykonuje już od dawna, m.in. w restauracjach. Teraz powstała jej nowa wersja, czy stanie się przebojem?`,
        },
        {
          id: 40,
          authorName: "Czesław Niemen",
          title: "Sen o Warszawie",
          img: "https://i.ytimg.com/vi/IiSUk1NR7VY/maxresdefault.jpg",
          secondImg:
            "https://api.culture.pl/sites/default/files/styles/1920_auto/public/images/imported/inne/Polskie_ikony_stylu/czeslaw_niemen.jpg?itok=TRv17lyd",
          link: "https://www.youtube.com/watch?v=ePNUSmH3dMI",
          moreInfs: `Piosenka po raz pierwszy ukazała się w 1966 roku na płycie o tym samym tytule. Od samego początku utwór stał się jednym z ważniejszych w dorobku Czesława Niemena. W utworze Warszawa zostaje w pewien sposób wyidealizowana przez Czesława Niemena, pokazana jako miejsce ze snu, idealne do spełniania swoich marzeń.`,
        },
        {
          id: 41,
          authorName: "Żabson & Young Igi",
          title: "Polski Karnawał",
          img: "https://rytmy.pl/wp-content/uploads/2022/03/zabson-igi-polski-karnawal.jpg",
          secondImg: "https://i.ytimg.com/vi/tO7SbZgmCsE/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=LUPXy3jJCrw",
          moreInfs: `"Polski Karnawał" to utwór, który pojawi się na rozszerzonej wersji wydanego 14 stycznia 2022 roku wspólnego albumu dwójki polskich raperów - Żabsona i Young Igiego. Wydawnictwo zatytułowane "amfisbena" ukazało się w wersji cyfrowej. Zapowiedziana na 3 kwietnia 2022 wersja fizyczna będzie wersją deluxe albumu i oprócz podstawowych ośmiu piosenek, będzie zawierała dodatkowe osiem utworów.
                      Piosenka, co sugeruje sam tytuł, odnosi się do okresu określanego w Polsce jako karnawał. Jest to czas przed Wielkim postem i przygotowaniem do Świąt Wielkiej Nocy, kiedy organizowane są liczne i huczne imprezy.
                      Tytuł projektu pochodzi od nazwy potwora, znanego między innymi z uniwersum "Wiedźmina" Andrzeja Sapkowskiego. Amfisbena to wąż o dwóch głowach, po jednej na każdym końcu, stwory choć ze sobą połączone są zupełnie różne. Tak samo Żabsona i Igiego pomimo wszelakich różnic łączy miłość do muzyki.`,
        },
        {
          id: 42,
          authorName: "Dawid Kwiatkowski",
          title: "Idziesz ze mną",
          img: "https://i.ytimg.com/vi/uC0fLOaQncU/maxresdefault.jpg",
          secondImg: "https://i.ytimg.com/vi/uC0fLOaQncU/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=uC0fLOaQncU",
          moreInfs: `Utwór "Idziesz ze mną" opowiada o celebracji miłość, która może być okazywana na wiele różnych sposobów i pojawiać się w naszym życiu w wielu różnych formach. Jak stwierdził sam Artysta: "Miłość wokół nas ma wiele barw i oblicz, dlatego do teledysku zaprosiłem dosłownie każdego, kto chciał w nim wystąpić, bo sam nie dałbym rady tych wszystkich barw przedstawić. Z miłością bywa też różnie, czasami wręcz bardzo ciężko jest dotrzymać jej kroku, co mam nadzieję uda mi się przedstawić w teledysku, ale mocno wierzę, że bez deszczu nic nie urośnie, a dzięki niemu rodzą się przepiękne rzecz."`,
        },
        {
          id: 43,
          authorName: "Viki Gabor",
          title: "Napad na serce",
          img: "https://i.ytimg.com/vi/F6uYvHke3Kc/maxresdefault.jpg",
          secondImg:
            "https://www.cgm.pl/wp-content/uploads/2022/02/Screenshot-2022-02-05-at-13.02.53-670x390.png",
          link: "https://www.youtube.com/watch?v=lhVyi29xEqc",
          moreInfs: `Wydany 4 lutego 2022 roku utwór Viki Gabor, zatytułowany "Napad na serce" to najnowszy singiel Artystki, który stanowi zapowiedź jej kolejnego albumu studyjnego. Za produkcję piosenki odpowiedzialni są Tim Crudu oraz DJ Katch, którzy znani są ze współpracy z takimi gwiazdami jak Ava Max czy The Chainsmokers. Na zapowiadanym albumie prawdopodobnie znajdą się także dwa wcześniej wydane single – "Moonlight" oraz "Toxic Love."`,
        },
        {
          id: 44,
          authorName: "Antek Smykiewicz",
          title: "Pomimo Burz",
          link: "https://www.youtube.com/watch?v=BtfGG8dhMNc",
          img: "https://a.allegroimg.com/original/114a1d/f0a2cedf4623a75b560c30cc996d/ANTEK-SMYKIEWICZ-POMIMO-BURZ-CD-Opakowanie-w-folii",
          secondImg:
            "https://cennik-artystow.com/wp-content/uploads/2017/10/Antek-Smykiewicz.png",
          moreInfs: `Antek Smykiewicz śpiewa o wielkiej sile miłości, której nie są straszne żadne zjawiska atmosferyczne, przeszkody i przeciwności losu. Mimo, iż na drodze do miłość pojawiają się poważne problemy, artysta wciąż ma dużo energii, którą wykorzystuje do osiągnięcia pełni szczęścia możliwej tylko u boku ukochanej kobiety.`,
        },
        {
          id: 45,
          authorName: "chillwagon",
          title: "3wagon",
          link: "https://www.youtube.com/watch?v=T1ta0YKAmns",
          img: "https://images.genius.com/4393353a076b3917ac971b4b8792a4ec.352x352x1.png",
          secondImg:
            "https://rytmy.pl/wp-content/uploads/2019/10/chillwagon.png",
          moreInfs: `"3wagon" to udostępniony 23 marca 2022 roku singiel grupy chillwagon, w którym wystąpił raper Tede. Artysta dołączył do grupy i w ramach inauguracyjnego utworu wystąpił obok Borixona i ReTo. Wraz z premierą piosenki na kanale YT spacerange, dawniej chillwagon.co, udostępniony został pierwszy wspólny singiel grupy, za którego produkcję odpowiada ich częsty współpracownik, producent SecretRank. 
                      Pierwsze informacje dotyczące dołączenia Tede do chillwagonu pojawiły się już 13 listopada 2021 roku, kiedy to w katowickim Międzynarodowym Centrum Kongresowym odbyła się impreza jubileuszowa z okazji dwudziestolecia artystycznego debiutu Tedego, w czasie której członkowie grupy potwierdzili chęć przyjęcia w swoje szeregi Rapera.
                      Już we wstępie do kawałka Tede tłumaczy swoje dołączenie do chillwagon, wspominając: "Mordo były 3 dźwigi, były 3 kominy/ Wszystko jest 3, H jest 3/ Pewnego dnia jadę moim bike'iem, człowieku/ W nocy wracam ze studia/ I na środku ulicy przecina mi drogę 3WAGON, rozumiesz?/ 3 wagony na lawetach/ Tego dnia pomyślałem, człowieku, ja będę w chillwagon/ A wiesz co jest najlepsze? Ja już tego dnia byłem w chillwagon Maaan (...)"`,
        },
        {
          id: 46,
          authorName: "Dżem",
          title: "Do kołyski",
          link: "https://www.youtube.com/watch?v=vdZUK85318w",
          img: "https://i.ytimg.com/vi/I6GHtiPVnWQ/maxresdefault.jpg",
          secondImg:
            "https://ebilet-media.azureedge.net/media/40719/dzemm700.jpg",
          moreInfs: `Artysta pragnie, aby dziecko w przyszłości kierowało się empatią i miało na względzie dobro innych, równocześnie pozostając sobą („idź własną drogą / bo w tym cały sens istnienia”) oraz zawsze żyjąc pełnią życia, doceniając to, co ma („chwila, która trwa / może być najlepszą z twoich chwil”).`,
        },
        {
          id: 47,
          authorName: "Zbigniew Wodecki",
          title: "Lubie wracać tam gdzie byłem",
          img: "https://i.scdn.co/image/ab6761610000e5ebc9111ed7e2654c28c4723821",
          secondImg:
            "https://bi.im-g.pl/im/f4/b8/18/z25923572AMP,Zbigniew-Wodecki.jpg",
          link: "https://www.youtube.com/watch?v=6LyC_6n0ZHg",
          moreInfs: `"Lubię wracać tam, gdzie byłem" to jeden z najpopularniejszych utworów Zbigniewa Wodeckiego – autorska kompozycja artysty z refleksyjnym tekstem Wojciecha Młynarskiego, opowieścią o wielkiej miłości, ale i kroczeniu w życiu najbliższymi sobie szlakami.`,
        },
        {
          id: 48,
          authorName: "Sanah i Igor Herbut",
          title: "Mamo tyś płakała",
          img: "https://i.ytimg.com/vi/gfqYpunru8I/maxresdefault.jpg",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-wUvq-eYZv-hWuA_wzruszajaca-piosenka-o-wojnie-664x442.jpg",
          link: "https://www.youtube.com/watch?v=gfqYpunru8I",
          moreInfs: `Inspiracją do stworzenia singla była kompozycja Stanisława Moniuszki pt. „Prząśniczka”. Piosenka została nagrana w celu charytatywnym, jej zysk zostanie przekazany dla Stowarzyszenia Siemacha, a tym samym zostanie przekazane na pomoc dzieciom – ofiarom rosyjskiej inwazji na Ukrainę.`,
        },
        {
          id: 49,
          authorName: "Dawid Podsiadło",
          title: "Nieznajomy",
          link: "https://www.youtube.com/watch?v=g4UDeQTjMYk",
          img: "https://i.ytimg.com/vi/g4UDeQTjMYk/maxresdefault.jpg",
          secondImg:
            "https://i.scdn.co/image/ab67616d0000b273b850abbb2b9f745a46d04028",
          moreInfs: `„Nieznajomy” to utwór o kimś kto tak bardzo pragnął szczęścia, że przestał słuchać samego siebie. Człowieku, który zaczął siebie okłamywać i w rezultacie stracił wiarę we wszystko w swoim życiu. Próbował dopasować się do innego świata, jednak ostatecznie nie udało mu się zdobyć tego czego pragnął. Teraz słuchacz poznaje mężczyznę, który na nowo musi spróbować odnaleźć samego siebie - nieznajomego, w którego sam siebie przemienił.`,
        },
        {
          id: 50,
          authorName: "Kortez",
          title: "Hej wy",
          link: "https://www.youtube.com/watch?v=3BnfiJnHXvk",
          img: "https://api.culture.pl/sites/default/files/styles/1920_auto/public/2019-10/kortez_ag_lg180913_901-2.jpg?itok=uRAqn-Ps",
          secondImg:
            "https://grudziadz.pl/uploads/files/Kortez-%2008%202019.JPG",
          moreInfs: `“…Mieliśmy spory problem z wyborem utworów, które ostatecznie miały złożyć się na „Mój dom”. Na szczęście po zakończeniu nagrań okazało się, że kilka piosenek opowiada o podobnych sprawach i to ułatwiło nam dokonanie finalnego wyboru. Wyjątkiem może być utwór “Boję się”, którego społeczno-obyczajowy charakter trochę nie pasował do tego albumu…” (Paweł Jóźwicki).
                    Utwory Korteza zawarte na albumie „Mój dom” często mają charakter retrospektywny. Tak jest również w przypadku utworu „Hej Wy”. Artysta opowiada nam swoją historię ze szkolnych lat, kiedy otoczenie traktowało go jako wyrzutka, cwaniaka czy „zbója".
                    Nikt się nie spodziewał, że tak „dziwny” uczeń będzie w stanie osiągnąć wielki sukces w branży muzycznej. Wszyscy wtem skreślali jego szanse na lepsze życie. Kortez opowiada, że sukces go nie zmienił, wciąż jest pełen rozterek, jak za dawnych lat. Wyraża żal, że ludzie go zostawili,. Wciąż na niego patrzą i oceniają przez pryzmat zachowań z przeszłości.`,
        },
        {
          id: 51,
          authorName: "Kaśka Sochacka + Kortez",
          title: "Dla mnie to już koniec",
          link: "https://www.youtube.com/watch?v=fFt0PT37Zko",
          img: "https://i.ytimg.com/vi/fFt0PT37Zko/maxresdefault.jpg",
          secondImg: "https://i.ytimg.com/vi/fFt0PT37Zko/maxresdefault.jpg",
          moreInfs: `"Dla mnie to już koniec" to utwór pochodzący z wydanego 26 marca 2021 roku debiutanckiego albumu studyjnego LP Kaśki Sochackiej, zatytułowanego "Ciche dni." Wydawnictwo ukazało się nakładem wytwórni Jazzboy. Wcześniej projekt promowały dwa single - tytułowy "Ciche dni" oraz nagrany przy współpracy z Vito Bambino - znanego z występów w zespole Bitamina "Boję się o Ciebie."`,
        },
        {
          id: 52,
          authorName: "Sanah i Grzegorz Turnau ",
          title: "“Sen we śnie”",
          link: "https://www.youtube.com/watch?v=5pS1EQJUVsc",
          img: "https://www.rmf.fm/_files/Upload/Images/sanah_grzegorz_turnau_final_1.jpg",
          secondImg: "https://i.ytimg.com/vi/5pS1EQJUVsc/maxresdefault.jpg",
          moreInfs: `Utwór opisuje utratę szczęścia bądź złudzeń i obudzenie się z tytułowego snu - marzeń o idealnym życiu, związku czy jakimkolwiek innym aspekcie życia. Wydawnictwo, określane przez samą Artystkę jako "najważniejszy projekt w jej życiu", ukaże się w połowie 2022 roku.`,
        },
        {
          id: 53,
          authorName: "Mrozu feat. Vito Bambino",
          title: "Za daleko",
          link: "https://www.youtube.com/watch?v=tCS7wjYdrhY",
          img: "https://i0.wp.com/polskaplyta-polskamuzyka.pl/wp-content/uploads/2020/12/Mrozu_Dagmara_Szewczuk.jpg?fit=1045%2C1044&ssl=1",
          secondImg:
            "https://gfx.rozrywka.radiozet.pl/var/radiozetrozrywka/storage/images/muzyka/mrozu-i-vito-bambino-za-daleko-teledysk-do-nowego-letniego-singla-wideo/19058484-1-pol-PL/Mrozu-i-Vito-Bambino-gotowi-na-wakacje.-Zaprezentowali-teledysk-do-Za-daleko-WIDEO_article.jpg",
          moreInfs: `"Za daleko" to utwór pochodzący z wydanego 1 kwietnia 2022 roku szóstego albumu studyjnego polskiego piosenkarza, producenta muzycznego, kompozytora i autora tekstów Łukasza Mroza, znanego pod pseudonimem scenicznym Mrozu. Wydawnictwo "Złote Bloki" promowały trzy wcześniej wydane single: udostępniony 4 lutego 2022 roku "Palę W Oknie", "Galácticos" z 19 października 2021 roku oraz wydany 21 maja 2021 roku utwór "Złoto." Do współpracy przy "Za daleko" zaproszony został Vito Bambino. Ponad dwa miesiące po premierze albumu do sieci trafiło video promujące utwór "Za daleko." Mrozu tłumaczył: "Przed nami mocno koncertowe wakacje, a numer 'Za daleko' z całej tracklisty 'Złotych bloków' ma największy letni vibe. Tę atmosferę pełną słońca, beztroski i szaleństwa Ajgor oddał znakomicie, dodając do tego jeszcze szczyptę abstrakcyjnego humoru, który też przenika przez mój kawałek z Vito w tekście."`,
        },
        {
          id: 54,
          authorName: "Sanah i Ania Dąbrowska",
          title: "“Baczyński” Pisz do mnie listy",
          link: "https://www.youtube.com/watch?v=qgODpFe0pi4",
          img: "https://images.genius.com/95f7624a066701bf0f39ebf8ceb976c6.1000x1000x1.jpg",
          secondImg:
            "https://radioradom.pl/wp-content/uploads/2021/11/Sanah.jpg",
          moreInfs: `Utwór "Baczyński (Pisz do mnie listy)", który sanah nagrała wspólnie z Anią Dąbrowską, to muzyczna interpretacja wiersza polskiego poety wojennego Krzysztofa Kamila Baczyńskiego. Utwór to pełen tęsknoty zwrot do ukochanej osoby - w interpretacji sanah i Dąbrowskiej jest to mężczyzna określany jako "drogi", w wierszu Baczyńskiego chodzi o kobietę o której mężczyzna mówi "droga" - z prośbą o kontakt, napisanie tytułowego listu, w którym osoba ta opisze jak wygląda jego/jej obecne życie, które toczy z dala od osoby wypowiadającej się w wierszu/utworze.`,
        },
        {
          id: 55,
          authorName: "Mata",
          title: "Patoreakcja",
          link: "https://www.youtube.com/watch?v=t4O1LLk6qlY",
          img: "https://static.ising.pl/songs/32318/cover_300.jpg",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-urwr-wjLJ-JnHE_mata-wypuscil-nowy-utwor-o-czym-jest-patoreakcja-664x442.JPG",
          moreInfs: `"Patoreakcja" to utwór Michała Matczaka, znanego jako Mata, który stanowi swego rodzaju odpowiedź na sukces singla Maty z końca 2019 roku, zatytułowanego "Patointeligencja." Artysta nie tylko odnosi się do samego utworu, ale także realnych jego konsekwencji. Wraz z premierą singla do sieci trafiło także promujące go video, w którym pojawili się Solar, Białas, Kuba Wojewódzki oraz Marta Linkiewicz. Lektorem klipu został natomiast Tomasz Knapik.`,
        },
        {
          id: 56,
          authorName: "Mateusz Ziółko",
          title: "W płomieniach",
          link: "https://www.youtube.com/watch?v=ZxsaYVNkosQ",
          img: "https://i.ytimg.com/vi/ZxsaYVNkosQ/maxresdefault.jpg",
          secondImg:
            "https://obcas.pl/wp-content/uploads/2021/12/mateusz-ziolko.jpg",
          moreInfs: `Wokalista śpiewa w nim o wielkim błędzie, który popełnił będąc w związku z wyjątkową kobietą. Stara się to naprawić i powrócić do dawnego życia, jednak nie jest to takie proste. Wraz z upływem czasu Mateusz zrozumiał, iż brakuje mu ukochanej, która zawsze go wspierała i służyła pomocą.`,
        },
        {
          id: 57,
          authorName: "bryska",
          title: "mam kogoś lepszego",
          link: "https://www.youtube.com/watch?v=iepelRHBIrI",
          img: "https://cdn.galleries.smcloud.net/t/galleries/gf-oJ3j-GBCf-dZJz_bryska-plyta-moja-ciemnosc-5-mocnych-powodow-zeby-czekac-na-ten-album-1920x1080-nocrop.jpg",
          secondImg: "https://i.ytimg.com/vi/iepelRHBIrI/maxresdefault.jpg",
          moreInfs: `Uważni fani wokalistki wiedzą, że popularność oryginalnej wersji „mam kogoś lepszego" wzięła się z TikToka, gdzie użytkownicy chętnie umieszczali swoje filmy z tą piosenką. Dlatego premiera klipu do jej remixu ma miejsce właśnie na tej platformie – tylko tam można zobaczyć oficjalne video do tego utworu, stworzone specjalnie z myślą o użytkownikach TikToka!`,
        },
      ],
      top5: [
        {
          id: 1,
          title: "“Baczyński” Pisz do mnie listy",
          authorName: "sanah i Ania Dąbrowska",
          link: "https://www.youtube.com/watch?v=qgODpFe0pi4",
          img: "https://images.genius.com/95f7624a066701bf0f39ebf8ceb976c6.1000x1000x1.jpg",
          secondImg:
            "https://radioradom.pl/wp-content/uploads/2021/11/Sanah.jpg",
          moreInfs: `Utwór "Baczyński (Pisz do mnie listy)", który sanah nagrała wspólnie z Anią Dąbrowską, to muzyczna interpretacja wiersza polskiego poety wojennego Krzysztofa Kamila Baczyńskiego. Utwór to pełen tęsknoty zwrot do ukochanej osoby - w interpretacji sanah i Dąbrowskiej jest to mężczyzna określany jako "drogi", w wierszu Baczyńskiego chodzi o kobietę o której mężczyzna mówi "droga" - z prośbą o kontakt, napisanie tytułowego listu, w którym osoba ta opisze jak wygląda jego/jej obecne życie, które toczy z dala od osoby wypowiadającej się w wierszu/utworze.`,
        },
        {
          id: 2,
          authorName: "Wiktor Dyduła",
          title: "Dobrze Wiesz, Że Tęsknię",
          img: "https://v.wpimg.pl/NDA5MzY2YSUgVztJdklsMGMPbxMwEGJmNBd3WHYKfnQ5GisTNVc8ITFaYx0rRz4lNkVjCjUdLzQoGjtLdlYnNzFZLAN2VyMmJFFiHGlQKCZ0BX1XOwV2d2wBf047HyxxdgJgSm0FfyInDS4Zb1R-Zjw",
          secondImg:
            "https://cdn.galleries.smcloud.net/t/galleries/gf-GRJU-5Bj4-AKox_wiktor-dydula-wiek-wzrost-pochodzenie-dziewczyna-piosenka-kim-jest-wiktor-dydula-1920x1080-nocrop.jpg",
          link: "https://www.youtube.com/watch?v=6dW0xhtvNBA",
          moreInfs: `Wiktor spełnił marzenie, jakim było wydanie singla. Do tego jest autorem tej piosenki, którą wykonuje już od dawna, m.in. w restauracjach. Teraz powstała jej nowa wersja, czy stanie się przebojem?`,
        },
        {
          id: 3,
          authorName: "Taco Hemingway",
          title: "Bakayoko",
          img: "https://images.genius.com/41d606e3a11c18efaf3e49725bde0449.640x640x1.jpg",
          secondImg:
            "https://s-trojmiasto.pl/zdj/c/n/9/2563/1439x0/2563997-Taco-Hemingway-wystapi-w-ramach-cyklu-Letnie-Napiecie-20-sierpnia.jpg",
          link: "https://www.youtube.com/watch?v=IsZNTPluKN4",
          moreInfs: `Tytuł utworu Taco Hemingwaya „Bakayoko” został zaczerpnięty od nazwiska francuskiego piłkarza, który występuje na pozycji defensywnego pomocnika w AC Milan. Znany jest on ze swojej skuteczności w grze obronnej, a w grze Fifa 18 karta z jego nazwiskiem jest jedną z najbardziej pożądanych. – I nie wycofają się jak Bakayoko, Baka-Bakayoko – rapuje Taco. `,
        },
        {
          id: 4,
          authorName: "Sławomir",
          title: "Miłość w Zakopanem",
          img: "https://yt3.ggpht.com/ytc/AKedOLToQHvQQI1M3CnUeK24LtckqMO8dBD_uybbYHbYBA=s250-c-k-c0x00ffffff-no-rj",
          secondImg: "https://i.ytimg.com/vi/vN9Opz2F_kU/maxresdefault.jpg",
          link: "https://www.youtube.com/watch?v=n2hJA78YuWw",
          moreInfs: `„Miłość W Zakopanem” to kawałek, który Sławomir poświęca swojej ukochanej żonie, Magdalenie. Mamy tu do czynienia z miłosnym wyznaniem prawdziwie zakochanego mężczyzny, który chce dać do zrozumienia swej partnerce, że jest ona dla niego tą jedyną.`,
        },
        {
          id: 5,
          authorName: "bryska",
          title: "mam kogoś lepszego",
          link: "https://www.youtube.com/watch?v=iepelRHBIrI",
          img: "https://cdn.galleries.smcloud.net/t/galleries/gf-oJ3j-GBCf-dZJz_bryska-plyta-moja-ciemnosc-5-mocnych-powodow-zeby-czekac-na-ten-album-1920x1080-nocrop.jpg",
          secondImg: "https://i.ytimg.com/vi/iepelRHBIrI/maxresdefault.jpg",
          moreInfs: `Uważni fani wokalistki wiedzą, że popularność oryginalnej wersji „mam kogoś lepszego" wzięła się z TikToka, gdzie użytkownicy chętnie umieszczali swoje filmy z tą piosenką. Dlatego premiera klipu do jej remixu ma miejsce właśnie na tej platformie – tylko tam można zobaczyć oficjalne video do tego utworu, stworzone specjalnie z myślą o użytkownikach TikToka!`,
        },
      ],
      specialSongs: [],
    };
  },
  methods: {
    changeResults(inputValue) {
      if (inputValue) {
        this.specialSongs = this.songs.filter((song) =>
          song.authorName
            .toLowerCase()
            .includes(inputValue.toLowerCase().trim())
        );
      } else {
        this.specialSongs = [];
      }
    },
    openInfs() {
      this.isOpen = true;
    },
    closeInfs() {
      this.isOpen = false;
    },

    getAllInfs(data) {
      this.isOpen = true;
      this.mySong = data;
    },

    getChosedSong(song) {
      this.currentChosedCart = song;
    },
  },
  mounted() {
    this.changeResults("");
  },
};
</script>
