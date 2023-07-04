import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  GridValueGetterParams,
} from "@mui/x-data-grid";

type Props = {};

const Books = (props: Props) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [isShowing, setIsShowing] = useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "englishName",
      headerName: "English Name",
      flex: 1,
      editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
      editable: true,
    },
    {
      field: "genre",
      headerName: "Genre",
      // type: "number",
      flex: 1,
      editable: true,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const rows = [
    {
      id: 1,
      name: "Nutuk",
      englishName: "Speech",
      author: "Mustafa Kemal Atatürk",
      genre: "Address",
    },
    {
      id: 2,
      name: "Martin Eden",
      englishName: "Martin Eden",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      id: 3,
      name: "Suç ve Ceza",
      englishName: "Crime and Punishment",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      id: 4,
      name: "Iki Şehrin Hikâyesi",
      englishName: "A Tale of Two Cities",
      author: "Charles Dickens",
      genre: "Fiction / Novel",
    },
    {
      id: 5,
      name: "Çankaya",
      englishName: "Çankaya",
      author: "Falih Rıfkı Atay",
      genre: "Memory",
    },
    {
      id: 6,
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Lord Kinross",
      genre: "Biography",
    },
    {
      id: 7,
      name: "Gurur ve Önyargı",
      englishName: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Fiction / Novel",
    },
    {
      id: 8,
      name: "Ezilenler",
      englishName: "Humiliated and Insulted",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      id: 9,
      name: "Babalar ve Oğullar",
      englishName: "Fathers and Sons",
      author: "Ivan Turgenyev",
      genre: "Fiction / Novel",
    },
    {
      id: 10,
      name: "Bir Idam Mahkmunun Son Günü",
      englishName: "The Last Day of a Condemned Man",
      author: "Victor Hugo",
      genre: "Fiction / Novel",
    },
    {
      id: 11,
      name: "Kumarbaz",
      englishName: "The Gambler",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      id: 12,
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Ilber Ortaylı",
      genre: "Biography",
    },
    {
      id: 13,
      name: "Atatürk Hakkında Hatıralar ve Belgeler",
      englishName: "Memories and Documents About Atatürk",
      author: "Afet Inan",
      genre: "Memory",
    },
    {
      id: 14,
      name: "Yeraltından Notlar",
      englishName: "Notes From The Underground ",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      id: 15,
      name: "Insan Ne ile Yaşar?",
      englishName: "What Men Live By",
      author: "Lev Tolstoy",
      genre: "Fiction / Novel",
    },
    {
      id: 16,
      name: "Yaban",
      englishName: "The Stranger",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Historical Fiction",
    },
    {
      id: 17,
      name: "Kiralık Konak",
      englishName: "Mansion for Rent",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Fiction / Novel",
    },
    {
      id: 18,
      name: "1984",
      englishName: "1984",
      author: "George Orwell",
      genre: "Fiction / Novel",
    },
    {
      id: 19,
      name: "Serenad",
      englishName: "Serenade for Nadia",
      author: "Zülfü Livaneli",
      genre: "Fiction / Novel",
    },
    {
      id: 20,
      name: "Simyacı",
      englishName: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction / Novel",
    },
    {
      id: 21,
      name: "Ozan Beedle'ın Hikayeleri",
      englishName: "The Tales of Beedle the Bard",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 22,
      name: "Insancıklar",
      englishName: "Poor Folk",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      id: 23,
      name: "Üç Büyük Usta",
      englishName: "Master Builders of the Spirit",
      author: "Stefan Zweig",
      genre: "Biography",
    },
    {
      id: 24,
      name: "Karmaşık Duygular",
      englishName: "Confusion of Feelings",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 25,
      name: "Clarissa",
      englishName: "Clarissa",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 26,
      name: "Bir Kadının Hayatından Yirmi Dört Saat",
      englishName: "Twenty-Four Hours in the Life of a Woman",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 27,
      name: "Olağanüstü Bir Gece",
      englishName: "Fantastic Night",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 28,
      name: "Satranç",
      englishName: "Chess",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 29,
      name: "Bir Çöküşün Öyküsü",
      englishName: "A Story of a Collapse",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 30,
      name: "Yakıcı Sır",
      englishName: "Burning Secret",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 31,
      name: "Bir Kuzey Macerası",
      englishName: "Northland stories",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      id: 32,
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Andrew Mango",
      genre: "Biography",
    },
    {
      id: 33,
      name: "Mustafa Kemal",
      englishName: "Mustafa Kemal",
      author: "Yılmaz Özdil",
      genre: "Biography",
    },
    {
      id: 34,
      name: "Steve Jobs Olmak",
      englishName: "Becoming Steve Jobs",
      author: "Rick Tetzeli , Brent Schlender",
      genre: "Biography",
    },
    {
      id: 35,
      name: "Su Adamı",
      englishName: "Amphibian Man",
      author: "Aleksandr Belyayev",
      genre: "Fiction / Novel",
    },
    {
      id: 36,
      name: "Çağlar Boyu Quidditch",
      englishName: "Quidditch Through the Ages",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 37,
      name: "Medyum",
      englishName: "The Shining",
      author: "Stephen King",
      genre: "Horror",
    },
    {
      id: 38,
      name: "Yazılımcılar için İş Başvuru Zamanı",
      englishName: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      genre: "Reference Work",
    },
    {
      id: 39,
      name: "Bir Zanaatla Beklenmedik Karşılaşma",
      englishName: "Unexpected Acquaintance with a Craft",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 40,
      name: "Rahel Tanrıyla Hesaplaşıyor",
      englishName: "Rahel Rechnet mit Gott",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 41,
      name: "Korku",
      englishName: "Fear",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 42,
      name: "Ay Işığı Sokağı",
      englishName: "The Street in Moonlight",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 43,
      name: "Geçmişe Yolculuk",
      englishName: "Journey into the Past",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 44,
      name: "Mecburiyet",
      englishName: "Obligation",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 45,
      name: "Hayatın Mucizeleri",
      englishName: "The Miracles of Life",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 46,
      name: "Amok Koşucusu",
      englishName: "Amok Runner",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 47,
      name: "Bilinmeyen Bir Kadının Mektubu",
      englishName: "Letter from an Unknown Woman",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 48,
      name: "Lyonda Düğün",
      englishName: "A wedding in Lyon",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      id: 49,
      name: "Sineklerin Tanrısı",
      englishName: "Lord of the Flies",
      author: "William Golding",
      genre: "Fiction / Novel",
    },
    {
      id: 50,
      name: "Aya Yolculuk",
      englishName: "From the Earth to the Moon",
      author: "Jules Verne",
      genre: "Sci-Fi",
    },
    {
      id: 51,
      name: "Dokuzla Dokuz Arasinda",
      englishName: "Between Nine and Nine",
      author: "Leo Perutz",
      genre: "Fiction / Novel",
    },
    {
      id: 52,
      name: "Dava",
      englishName: "The Trial",
      author: "Franz Kafka",
      genre: "Fiction / Novel",
    },
    {
      id: 53,
      name: "Dönüşüm",
      englishName: "The Metamorphosis",
      author: "Franz Kafka",
      genre: "Fiction / Novel",
    },
    {
      id: 54,
      name: "Altıncı Koğuş",
      englishName: "Ward No. 6",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      id: 55,
      name: "Arayışlar",
      englishName: "Arayislar",
      author: "Lou Andreas Salome",
      genre: "Fiction / Novel",
    },
    {
      id: 56,
      name: "Sokak Kizi Maggie Bir New York Hikayesi",
      englishName: "Maggie: A Girl of the Streets",
      author: "Stephen Crane",
      genre: "Fiction / Novel",
    },
    {
      id: 57,
      name: "Üç Yıl",
      englishName: "Three Years",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      id: 58,
      name: "Muhteşem Gatsby",
      englishName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction / Novel",
    },
    {
      id: 59,
      name: "Benjamin Button'ın Tuhaf Hikayesi",
      englishName: "The Curious Case of Benjamin Button",
      author: "F. Scott Fitzgerald",
      genre: "Fiction / Novel",
    },
    {
      id: 60,
      name: "Kızıl Veba",
      englishName: "The Scarlet Plague",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      id: 61,
      name: "Karanlığın Yüreği",
      englishName: "Heart of Darkness",
      author: "Joseph Conrad",
      genre: "Fiction / Novel",
    },
    {
      id: 62,
      name: "Otomatik Portakal",
      englishName: "A Clockwork Orange",
      author: "Anthony Burgess",
      genre: "Fiction / Novel",
    },
    {
      id: 63,
      name: "Çukurda",
      englishName: "In the Pit",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      id: 64,
      name: "Dalgalar",
      englishName: "The Waves",
      author: "Virginia Woolf",
      genre: "Fiction / Novel",
    },
    {
      id: 65,
      name: "Hayvan Çiftliği",
      englishName: "Animal Farm",
      author: "George Orwell",
      genre: "Fiction / Novel",
    },
    {
      id: 66,
      name: "Kiracı",
      englishName: "The Tenant",
      author: "Javier Cercas",
      genre: "Fiction / Novel",
    },
    {
      id: 67,
      name: "Son Ada",
      englishName: "Last Island",
      author: "Zülfü Livaneli",
      genre: "Fiction / Novel",
    },
    {
      id: 68,
      name: "Ankara",
      englishName: "Ankara",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Fiction / Novel",
    },
    {
      id: 69,
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Biography",
    },
    {
      id: 70,
      name: "On Kişiydiler",
      englishName: "And Then There Were None",
      author: "Agatha Christie",
      genre: "Fiction / Novel",
    },
    {
      id: 71,
      name: "Harry Potter ve Felsefe Taşı",
      englishName: "Harry Potter and the Philosopher’s Stone",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 72,
      name: "Harry Potter ve Sırlar Odası",
      englishName: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 73,
      name: "Harry Potter ve Azkaban Tutsağı",
      englishName: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 74,
      name: "Harry Potter ve Ateş Kadehi",
      englishName: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 75,
      name: "Harry Potter ve Zümrüdüanka Yoldaşlığı",
      englishName: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 76,
      name: "Harry Potter ve Melez Prens",
      englishName: "Harry Potter and the Half-Blood Prince",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 77,
      name: "Harry Potter ve Ölüm Yadigarları",
      englishName: "Harry Potter and the Deathly Hallows",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 78,
      name: "Harry Potter ve Lanetli Çocuk",
      englishName: "Harry Potter and the Cursed Child",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      id: 79,
      name: "Son Dilek",
      englishName: "The Last Wish",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 80,
      name: "Kader Kılıcı",
      englishName: "Sword of Destiny",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },

    {
      id: 81,
      name: "Elflerin Kanı",
      englishName: "Blood of Elves",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 82,
      name: "Nefret Çağı",
      englishName: "Time Of Contempt",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 83,
      name: "Ateşle İmtihan",
      englishName: "Baptism of Fire",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 84,
      name: "Kırlangıç Kulesi",
      englishName: "The Tower of the Swallow",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 85,
      name: "Gölün Hanımı",
      englishName: "Lady of the Lake",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      id: 86,
      name: "Yüzüklerin Efendisi: Yüzük Kardeşliği",
      englishName: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: 87,
      name: "Yüzüklerin Efendisi: İki Kule",
      englishName: "The Lord of the Rings: The Two Towers",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: 88,
      name: "Yüzüklerin Efendisi: Kralın Dönüşü",
      englishName: "The Lord of the Rings: The Return of the King",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: 89,
      name: "Ucubeler Sirki",
      englishName: "Cirque Du Freak",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 90,
      name: "Vampirin Asistanı",
      englishName: "The Vampire’s Assistant",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 91,
      name: "Kan Tünelleri",
      englishName: "Tunnels of Blood",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 92,
      name: "Vampirler Dağı",
      englishName: "Vampire Mountain",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 93,
      name: "Ölümcül Sınav",
      englishName: "Trials of Death",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 94,
      name: "Vampir Prensi",
      englishName: "The Vampire Prince",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 95,
      name: "Gün Batımı Avcıları",
      englishName: "Hunters of the Dusk",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 96,
      name: "Gecenin Müttefikleri",
      englishName: "Allies of the Night",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 97,
      name: "Şafak Katilleri",
      englishName: "Killers of the Dawn",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 98,
      name: "Ruhlar Gölü",
      englishName: "The Lake of Souls",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 99,
      name: "Gölgelerin Hükümdarı",
      englishName: "Lord of the Shadows",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 100,
      name: "Kaderin Çocukları",
      englishName: "Sons of Destiny",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 101,
      name: "Koyasan",
      englishName: "Koyasan",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 102,
      name: "Bir Katilin Doğuşu",
      englishName: "Birth of a Killer",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      id: 103,
      name: "Arsen Lüpen: Kibar Hırsız",
      englishName: "Arsen Lüpen: Gentleman-Thief",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
    {
      id: 104,
      name: "Arsen Lüpen: 813",
      englishName: "Arsen Lüpen: 813",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
    {
      id: 105,
      name: "Arsen Lüpen: Kristal Tıpa",
      englishName: "Arsen Lüpen: The Crystal Stopper",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
  ];
  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "left", height: 50 }}
      >
        <GridToolbarColumnsButton sx={{ color: "#0077b6" }} />
        <GridToolbarFilterButton sx={{ color: "#0077b6" }} />
        <GridToolbarDensitySelector sx={{ color: "#0077b6" }} />
        {/* <GridToolbarExport sx={{ color: "#0077b6" }} /> */}

        <GridToolbarQuickFilter sx={{ ml: "auto", width: "15%" }} />
      </GridToolbarContainer>
    );
  }

  const about = [
    {
      name: "Story",
      description: "Learn about my way and see my thoughts",
      onClick: () => router.push("/about"),
      icon: AutoStoriesOutlinedIcon,
    },
    {
      name: "Working Path",
      description: "Lets see my steps on working",
      onClick: () => router.push("/about#timeline"),
      icon: RouteOutlinedIcon,
    },
    {
      name: "Passions",
      description: "Discover my passions",
      onClick: () => router.push("/about#passions"),
      icon: CelebrationOutlinedIcon,
    },
    {
      name: "Contact",
      description: "Connect me anytime",
      onClick: () => console.log("xdxdxd"),
      icon: ConnectWithoutContactOutlinedIcon,
    },
  ];

  const handleMenuItem = (path: string | undefined) => {
    if (path) router.push(path);
  };
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleClickAboutUs = (
    section: string | undefined,
    isMobile: boolean
  ) => {
    if (isMobile) {
      setMobileMenuOpen(false);
      router.push(`/about#${section}`);
    } else {
      setIsShowing((isShowing) => !isShowing);

      router.push(`/aboutUs#${section}`);
    }
  };
  const handleClickMobileMenuItem = (section: string | undefined) => {
    setMobileMenuOpen(false);
    handleMenuItem(section);
  };
  return (
    <>
      {/* // -------------------Header---------------------- */}
      <header
        className={`fixed w-full  inset-x-0 top-0 z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <nav
          className="flex items-center justify-between p-3 lg:px-8 lg:container lg:mx-auto"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <button onClick={() => router.push("/")} className="-m-1.5 p-1.5">
              <img
                className="md:h-9 sm: h-8 w-auto"
                src="/static/logos/main-logo.svg"
                alt=""
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <button
              className="text-sm font-medium leading-6 text-[#0077b6] hover:text-[#ff4081] "
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>

            <ClickAwayListener onClickAway={() => setIsShowing(false)}>
              <Popover className="relative">
                <Popover.Button
                  className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-sm font-medium leading-6 text-[#0077b6]"
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <span>About</span>
                  {isShowing === true ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[#0077b6]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[#0077b6]"
                      aria-hidden="true"
                    />
                  )}
                </Popover.Button>

                <Transition
                  show={isShowing}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {about.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-[#0077b6]"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <button
                                onClick={item.onClick}
                                className="font-medium text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </button>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </ClickAwayListener>
            <button
              className="text-sm font-medium leading-6 text-[#0077b6] hover:text-[#ff4081] "
              onClick={() => router.push("/#contact")}
            >
              Work
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button className="-m-1.5 p-1.5" onClick={() => router.push("/")}>
                <img
                  className="h-10 w-auto"
                  src="/static/logos/main-logo.svg"
                  alt=""
                  onClick={() => setMobileMenuOpen(false)}
                />
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickMobileMenuItem("/")}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Story
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("timeline", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Journey
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("passions", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Passions
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAboutUs("contact", true)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => handleClickMobileMenuItem("/my-work")}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Work
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Desc----------------------  */}
      <div>
        <div className="py-24">
          <div className="container m-auto px-6">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-medium leading-tight mb-5 capitalize">
                  <span className="text-[#ff4081] underline">Reading:</span> The
                  artful lifestyle, the passionate pursuit.
                </h1>
                <p className="font-medium text-justify">
                  Reading books is not merely a hobby for me; it is a way of
                  life that I wholeheartedly embrace. The scent of fresh pages
                  and the gentle rustle as I turn them transport me to different
                  worlds and immerse me in diverse perspectives. With each book,
                  I embark on a journey of self-discovery and intellectual
                  growth, savoring the words that awaken my imagination and
                  expand my horizons. Reading is not just an activity; it is an
                  integral part of who I am, a lifelong passion that continually
                  nourishes my soul and inspires me to see the world through the
                  eyes of countless authors.
                </p>
              </div>
              <div className="lg:w-5/12 order-2">
                <img
                  src="/static/images/books.jpg"
                  alt=""
                  className="rounded transform scale-100 perspective-1040 rotate-y-11 rotate-x-2 rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="font-medium text-justify mt-8 underline lg:ml-8 mx-4">
          ==&gt; Below, you can find a list of{" "}
          <span className="text-[#0077b6] underline">
            all the books I have read.
          </span>{" "}
          Perhaps it can also be a source of inspiration for you!
        </p>
      </div>
      {/* // -------------------Desc----------------------  */}
      {/* // -------------------Table----------------------  */}
      <Box sx={{ height: 800, width: "95%", mt: 4, mx: "auto", mb: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          sx={{
            boxShadow: 5,
            border: 1,
            borderColor: "#D6EAF8",
            "& .MuiDataGrid-row:hover": {
              background: "#EBF5FB",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "#0077b6",
            },
            ".MuiDataGrid-columnHeader": {
              backgroundColor: "#D6EAF8",
              color: "#ff4081",
              fontWeight: "bold",
            },
            ".MuiDataGrid-columnSeparator": {
              color: "#0077b6",
            },
          }}
          pageSizeOptions={[10, 20, 50, 100]}
          disableRowSelectionOnClick
        />
      </Box>
      {/* // -------------------Table----------------------  */}
    </>
  );
};

export default Books;
