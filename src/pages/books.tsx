import { Grid } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import AppHeader from "./components/Header";

type Props = {};

type Book = {
  name: string;
  englishName: string;
  author: string;
  genre: string;
};

const Books = (props: Props) => {
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

  const books = [
    {
      name: "Nutuk",
      englishName: "Speech",
      author: "Mustafa Kemal Atatürk",
      genre: "Speech",
    },
    {
      name: "Timurlenk - Bozkırların Son Göçebe Fatihi",
      englishName: "The Rise and Rule of Tamerlane",
      author: "Beatrice Forbes Manz",
      genre: "History",
    },
    {
      name: "Devlet-i Aliyye 1 - Klasik Dönem",
      englishName: "Devlet-i Aliyye 1 - Klasik Dönem",
      author: "Halil İnalcık",
      genre: "History",
    },
    {
      name: "Devlet-i Aliyye 2 - Bozuluş ve Kargaşa Dönemi",
      englishName: "Devlet-i Aliyye 2 - Bozuluş ve Kargaşa Dönemi",
      author: "Halil İnalcık",
      genre: "History",
    },
    {
      name: "Türklerin Tarihi - Orta Asya'nın Bozkırlarından Avrupa'nın Kapılarına",
      englishName:
        "Türklerin Tarihi - Orta Asya'nın Bozkırlarından Avrupa'nın Kapılarına",
      author: "İlber Ortaylı",
      genre: "History",
    },
    {
      name: "Türklerin Tarihi 2 - Anadolu'nun Bozkırlarından Avrupa'nın İçlerine",
      englishName:
        "Türklerin Tarihi 2 - Anadolu'nun Bozkırlarından Avrupa'nın İçlerine",
      author: "İlber Ortaylı",
      genre: "History",
    },
    {
      name: "Moğolların Gizli Tarihçesi",
      englishName: "Moğolların Gizli Tarihçesi",
      author: "Mehmet Levent Kaya",
      genre: "History",
    },
    {
      name: "Moğol Kanunları",
      englishName: "Moğol Kanunları",
      author: "Curt Alinge",
      genre: "History",
    },
    {
      name: "Zeytindağı",
      englishName: "Zeytindağı",
      author: "Falih Rıfkı Atay",
      genre: "History",
    },
    {
      name: "Semerkant",
      englishName: "Samarkand",
      author: "Amin Maalouf",
      genre: "Historical Fiction",
    },
    {
      name: "Prens",
      englishName: "The Prince",
      author: "Niccola Machiavelli",
      genre: "Non-Fiction",
    },
    {
      name: "Senin Cahilliğin Benim Yaşamımı Etkiliyor",
      englishName: "Senin Cahilliğin Benim Yaşamımı Etkiliyor",
      author: "A. M. Celal Şengör",
      genre: "Self İmprovement",
    },
    {
      name: "Hasan Ali Yücel ve Türk Aydınlanması",
      englishName: "Hasan Ali Yücel ve Türk Aydınlanması",
      author: "A. M. Celal Şengör",
      genre: "Non-Fiction",
    },
    {
      name: "Dikkate Değer Mevzular",
      englishName: "Dikkate Değer Mevzular",
      author: "A. M. Celal Şengör",
      genre: "Research-Review",
    },
    {
      name: "Bir Ömür Nasıl Yaşanır?",
      englishName: "Bir Ömür Nasıl Yaşanır?",
      author: "İlber Ortaylı",
      genre: "Self İmprovement",
    },
    {
      name: "İnsan Geleceğini Nasıl Kurar?",
      englishName: "İnsan Geleceğini Nasıl Kurar?",
      author: "İlber Ortaylı",
      genre: "Self İmprovement",
    },
    {
      name: "Çankaya",
      englishName: "Çankaya",
      author: "Falih Rıfkı Atay",
      genre: "Memory",
    },
    {
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Lord Kinross",
      genre: "Biography",
    },
    {
      name: "Martin Eden",
      englishName: "Martin Eden",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      name: "Suç ve Ceza",
      englishName: "Crime and Punishment",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      name: "Sapiens - Hayvanlardan Tanrılara İnsan Türünün Kısa Bir Tarihi",
      englishName: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
    },
    {
      name: "Iki Şehrin Hikâyesi",
      englishName: "A Tale of Two Cities",
      author: "Charles Dickens",
      genre: "Fiction / Novel",
    },
    {
      name: "Gurur ve Önyargı",
      englishName: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Fiction / Novel",
    },
    {
      name: "Ezilenler",
      englishName: "Humiliated and Insulted",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      name: "Babalar ve Oğullar",
      englishName: "Fathers and Sons",
      author: "Ivan Turgenyev",
      genre: "Fiction / Novel",
    },
    {
      name: "Bir Idam Mahkmunun Son Günü",
      englishName: "The Last Day of a Condemned Man",
      author: "Victor Hugo",
      genre: "Fiction / Novel",
    },
    {
      name: "Kumarbaz",
      englishName: "The Gambler",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      name: "Atatürk",
      englishName: "Atatürk",
      author: "İlber Ortaylı",
      genre: "Biography",
    },
    {
      name: "Atatürk Hakkında Hatıralar ve Belgeler",
      englishName: "Memories and Documents About Atatürk",
      author: "Afet Inan",
      genre: "Memory",
    },
    {
      name: "Yeraltından Notlar",
      englishName: "Notes From The Underground ",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      name: "Insan Ne ile Yaşar?",
      englishName: "What Men Live By",
      author: "Lev Tolstoy",
      genre: "Fiction / Novel",
    },
    {
      name: "Yaban",
      englishName: "The Stranger",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Historical Fiction",
    },
    {
      name: "Kiralık Konak",
      englishName: "Mansion for Rent",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Fiction / Novel",
    },
    {
      name: "1984",
      englishName: "1984",
      author: "George Orwell",
      genre: "Fiction / Novel",
    },
    {
      name: "Serenad",
      englishName: "Serenade for Nadia",
      author: "Zülfü Livaneli",
      genre: "Fiction / Novel",
    },
    {
      name: "Son Ada",
      englishName: "Last Island",
      author: "Zülfü Livaneli",
      genre: "Fiction / Novel",
    },
    {
      name: "Leyla'nın Evi",
      englishName: "Leyla's House",
      author: "Zülfü Livaneli",
      genre: "Fiction / Novel",
    },
    {
      name: "Simyacı",
      englishName: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction / Novel",
    },
    {
      name: "Ozan Beedle'ın Hikayeleri",
      englishName: "The Tales of Beedle the Bard",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Insancıklar",
      englishName: "Poor Folk",
      author: "Fyodor Mihayloviç Dostoyevski",
      genre: "Fiction / Novel",
    },
    {
      name: "Üç Büyük Usta",
      englishName: "Master Builders of the Spirit",
      author: "Stefan Zweig",
      genre: "Biography",
    },
    {
      name: "Karmaşık Duygular",
      englishName: "Confusion of Feelings",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Clarissa",
      englishName: "Clarissa",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Bir Kadının Hayatından Yirmi Dört Saat",
      englishName: "Twenty-Four Hours in the Life of a Woman",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Olağanüstü Bir Gece",
      englishName: "Fantastic Night",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Satranç",
      englishName: "Chess",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Bir Çöküşün Öyküsü",
      englishName: "A Story of a Collapse",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Yakıcı Sır",
      englishName: "Burning Secret",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Bir Kuzey Macerası",
      englishName: "Northland stories",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Andrew Mango",
      genre: "Biography",
    },
    {
      name: "Mustafa Kemal",
      englishName: "Mustafa Kemal",
      author: "Yılmaz Özdil",
      genre: "Biography",
    },
    {
      name: "Steve Jobs Olmak",
      englishName: "Becoming Steve Jobs",
      author: "Rick Tetzeli , Brent Schlender",
      genre: "Biography",
    },
    {
      name: "Çalıkuşu",
      englishName: "The Wren",
      author: "Reşat Nuri Güntekin",
      genre: "Fiction / Novel",
    },
    {
      name: "Uçurtma Avcısı",
      englishName: "Kite Runner",
      author: "Khaled Hosseini",
      genre: "Fiction / Novel",
    },
    {
      name: "Su Adamı",
      englishName: "Amphibian Man",
      author: "Aleksandr Belyayev",
      genre: "Fiction / Novel",
    },
    {
      name: "Çağlar Boyu Quidditch",
      englishName: "Quidditch Through the Ages",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Medyum",
      englishName: "The Shining",
      author: "Stephen King",
      genre: "Horror",
    },
    {
      name: "Yazılımcılar için İş Başvuru Zamanı",
      englishName: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      genre: "Reference Work",
    },
    {
      name: "Bir Zanaatla Beklenmedik Karşılaşma",
      englishName: "Unexpected Acquaintance with a Craft",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Rahel Tanrıyla Hesaplaşıyor",
      englishName: "Rahel Rechnet mit Gott",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Korku",
      englishName: "Fear",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Ay Işığı Sokağı",
      englishName: "The Street in Moonlight",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Geçmişe Yolculuk",
      englishName: "Journey into the Past",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Mecburiyet",
      englishName: "Obligation",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Hayatın Mucizeleri",
      englishName: "The Miracles of Life",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Amok Koşucusu",
      englishName: "Amok Runner",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Bilinmeyen Bir Kadının Mektubu",
      englishName: "Letter from an Unknown Woman",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Lyonda Düğün",
      englishName: "A wedding in Lyon",
      author: "Stefan Zweig",
      genre: "Fiction / Novel",
    },
    {
      name: "Sineklerin Tanrısı",
      englishName: "Lord of the Flies",
      author: "William Golding",
      genre: "Fiction / Novel",
    },
    {
      name: "Aya Yolculuk",
      englishName: "From the Earth to the Moon",
      author: "Jules Verne",
      genre: "Sci-Fi",
    },
    {
      name: "Dokuzla Dokuz Arasinda",
      englishName: "Between Nine and Nine",
      author: "Leo Perutz",
      genre: "Fiction / Novel",
    },
    {
      name: "Dava",
      englishName: "The Trial",
      author: "Franz Kafka",
      genre: "Fiction / Novel",
    },
    {
      name: "Dönüşüm",
      englishName: "The Metamorphosis",
      author: "Franz Kafka",
      genre: "Fiction / Novel",
    },
    {
      name: "Altıncı Koğuş",
      englishName: "Ward No. 6",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      name: "Arayışlar",
      englishName: "Arayislar",
      author: "Lou Andreas Salome",
      genre: "Fiction / Novel",
    },
    {
      name: "Sokak Kizi Maggie Bir New York Hikayesi",
      englishName: "Maggie: A Girl of the Streets",
      author: "Stephen Crane",
      genre: "Fiction / Novel",
    },
    {
      name: "Üç Yıl",
      englishName: "Three Years",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      name: "Muhteşem Gatsby",
      englishName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction / Novel",
    },
    {
      name: "Benjamin Button'ın Tuhaf Hikayesi",
      englishName: "The Curious Case of Benjamin Button",
      author: "F. Scott Fitzgerald",
      genre: "Fiction / Novel",
    },
    {
      name: "Kızıl Veba",
      englishName: "The Scarlet Plague",
      author: "Jack London",
      genre: "Fiction / Novel",
    },
    {
      name: "Karanlığın Yüreği",
      englishName: "Heart of Darkness",
      author: "Joseph Conrad",
      genre: "Fiction / Novel",
    },
    {
      name: "Otomatik Portakal",
      englishName: "A Clockwork Orange",
      author: "Anthony Burgess",
      genre: "Fiction / Novel",
    },
    {
      name: "Çukurda",
      englishName: "In the Pit",
      author: "Anton Çehov",
      genre: "Fiction / Novel",
    },
    {
      name: "Dalgalar",
      englishName: "The Waves",
      author: "Virginia Woolf",
      genre: "Fiction / Novel",
    },
    {
      name: "Hayvan Çiftliği",
      englishName: "Animal Farm",
      author: "George Orwell",
      genre: "Fiction / Novel",
    },
    {
      name: "Kiracı",
      englishName: "The Tenant",
      author: "Javier Cercas",
      genre: "Fiction / Novel",
    },
    {
      name: "Ankara",
      englishName: "Ankara",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Fiction / Novel",
    },
    {
      name: "Atatürk",
      englishName: "Atatürk",
      author: "Yakup Kadri Karaosmanoğlu",
      genre: "Biography",
    },
    {
      name: "On Kişiydiler",
      englishName: "And Then There Were None",
      author: "Agatha Christie",
      genre: "Fiction / Novel",
    },
    {
      name: "Gece Yarısı Kütüphanesi",
      englishName: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fantastic Fiction",
    },
    {
      name: "Harry Potter ve Felsefe Taşı",
      englishName: "Harry Potter and the Philosopher’s Stone",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Sırlar Odası",
      englishName: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Azkaban Tutsağı",
      englishName: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Ateş Kadehi",
      englishName: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Zümrüdüanka Yoldaşlığı",
      englishName: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Melez Prens",
      englishName: "Harry Potter and the Half-Blood Prince",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Ölüm Yadigarları",
      englishName: "Harry Potter and the Deathly Hallows",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Harry Potter ve Lanetli Çocuk",
      englishName: "Harry Potter and the Cursed Child",
      author: "J. K. Rowling",
      genre: "Fantasy",
    },
    {
      name: "Son Dilek",
      englishName: "The Last Wish",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Kader Kılıcı",
      englishName: "Sword of Destiny",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },

    {
      name: "Elflerin Kanı",
      englishName: "Blood of Elves",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Nefret Çağı",
      englishName: "Time Of Contempt",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Ateşle İmtihan",
      englishName: "Baptism of Fire",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Kırlangıç Kulesi",
      englishName: "The Tower of the Swallow",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Gölün Hanımı",
      englishName: "Lady of the Lake",
      author: "Andrzej Sapkowski",
      genre: "Fantasy",
    },
    {
      name: "Yüzüklerin Efendisi: Yüzük Kardeşliği",
      englishName: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      name: "Yüzüklerin Efendisi: İki Kule",
      englishName: "The Lord of the Rings: The Two Towers",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      name: "Yüzüklerin Efendisi: Kralın Dönüşü",
      englishName: "The Lord of the Rings: The Return of the King",
      author: "J. R. R. Tolkien",
      genre: "Fantasy",
    },
    {
      name: "Ucubeler Sirki",
      englishName: "Cirque Du Freak",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Vampirin Asistanı",
      englishName: "The Vampire’s Assistant",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Kan Tünelleri",
      englishName: "Tunnels of Blood",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Vampirler Dağı",
      englishName: "Vampire Mountain",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Ölümcül Sınav",
      englishName: "Trials of Death",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Vampir Prensi",
      englishName: "The Vampire Prince",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Gün Batımı Avcıları",
      englishName: "Hunters of the Dusk",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Gecenin Müttefikleri",
      englishName: "Allies of the Night",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Şafak Katilleri",
      englishName: "Killers of the Dawn",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Ruhlar Gölü",
      englishName: "The Lake of Souls",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Gölgelerin Hükümdarı",
      englishName: "Lord of the Shadows",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Kaderin Çocukları",
      englishName: "Sons of Destiny",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Koyasan",
      englishName: "Koyasan",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Bir Katilin Doğuşu",
      englishName: "Birth of a Killer",
      author: "Darren Shan",
      genre: "Fantasy",
    },
    {
      name: "Arsen Lüpen: Kibar Hırsız",
      englishName: "Arsen Lüpen: Gentleman-Thief",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
    {
      name: "Arsen Lüpen: 813",
      englishName: "Arsen Lüpen: 813",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
    {
      name: "Arsen Lüpen: Kristal Tıpa",
      englishName: "Arsen Lüpen: The Crystal Stopper",
      author: "Maurice Leblanc",
      genre: "Crime",
    },
    {
      name: "Kaplumbağalar",
      englishName: "The Turtles",
      author: "Fakir Baykurt",
      genre: "Fiction / Novel",
    },
    {
      name: "Şimşek Hırsızı",
      englishName: "The Lightning Thief",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Canavarlar Denizi",
      englishName: "The Sea of Monsters",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Titan'ın Laneti",
      englishName: "The Titan’s Curse",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Labirent Savaşı",
      englishName: "The Battle of the Labyrinth",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Son Olimposlu",
      englishName: "The Last Olympian",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Kayıp Kahraman",
      englishName: "The Lost Hero",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Neptün'ün Oğlu",
      englishName: "The Son of Neptune",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Athena'nın İşareti",
      englishName: "The Mark of Athena",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Hades'in Evi",
      englishName: "The House of Hades",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Olimpos'un Kanı",
      englishName: "The Blood of Olympus",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Melez Dosyaları",
      englishName: "The Demigod Files",
      author: "Rick Riordan",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Çırağı",
      englishName: "The Spook's Apprentice",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Laneti",
      englishName: "The Spook's Curse",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Sırrı",
      englishName: "The Spook's Secret",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Savaşı",
      englishName: "The Spook's Battle",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Hatası",
      englishName: "The Spook's Mistake",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Kurbanı",
      englishName: "The Spook's Sacrifice",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Kabusu",
      englishName: "The Spook's Nightmare",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Kaderi",
      englishName: "The Spook's Destiny",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "I am Grimalkin",
      englishName: "The Spook's Apprentice",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Kanı",
      englishName: "The Spook's Blood",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayalet: Benim Adım Slither",
      englishName: "I am Slither",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayalet: Benim Adım Alice",
      englishName: "I am Alice",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin İntikamı",
      englishName: "The Spook's Revenge",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Yedinci Oğul",
      englishName: "Seventh Apprentice",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Cadıları",
      englishName: "The Spook's Witches",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Hayaletin Yaratıkları",
      englishName: "The Spook's Bestiary",
      author: "Joseph Delaney",
      genre: "Fantasy",
    },
    {
      name: "Ölümcül Kaçış",
      englishName: "The Maze Runner",
      author: "James Dashner",
      genre: "Fantasy",
    },
    {
      name: "Alev Deneyleri",
      englishName: "The Scorch Trials",
      author: "James Dashner",
      genre: "Fantasy",
    },
    {
      name: "Son İsyan",
      englishName: "The Death Cure",
      author: "James Dashner",
      genre: "Fantasy",
    },
    {
      name: "Ölüm Emri",
      englishName: "The Kill Order",
      author: "James Dashner",
      genre: "Fantasy",
    },
    {
      name: "Açlık Oyunları",
      englishName: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Fantasy",
    },
    {
      name: "Ateşi Yakalamak",
      englishName: "Catching Fire",
      author: "Suzanne Collins",
      genre: "Fantasy",
    },
    {
      name: "Alaycı Kuş",
      englishName: "Mockingjay",
      author: "Suzanne Collins",
      genre: "Fantasy",
    },
    {
      name: "Cadı Avcısı",
      englishName: "The Witch Hunter",
      author: "Virginia Boecker",
      genre: "Fantasy",
    },
    {
      name: "Kral Katili",
      englishName: "The King Slayer",
      author: "Virginia Boecker",
      genre: "Fantasy",
    },
    {
      name: "Uyumsuz",
      englishName: "Divergent",
      author: "Veronico Roth",
      genre: "Sci-Fi",
    },
    {
      name: "Kuralsız",
      englishName: "Insurgent",
      author: "Veronico Roth",
      genre: "Sci-Fi",
    },
    {
      name: "Yandaş",
      englishName: "Allegiant",
      author: "Veronico Roth",
      genre: "Sci-Fi",
    },
    {
      name: "Şu Çılgın Türkler",
      englishName: "Those Crazy Turks",
      author: "Turgut Özakman",
      genre: "History",
    },
    {
      name: "Diriliş - Çanakkale 1915",
      englishName: "Resurrection - Çanakkale 1915",
      author: "Turgut Özakman",
      genre: "History",
    },
    {
      name: "Yörünge",
      englishName: "Gravity",
      author: "Tess Gerritsen",
      genre: "Sci-Fi",
    },
    {
      name: "Diriliş",
      englishName: "Resurrection",
      author: "Tess Gerritsen",
      genre: "Crime",
    },
    {
      name: "Siliniş",
      englishName: "The Silent Girl",
      author: "Tess Gerritsen",
      genre: "Drama",
    },
    {
      name: "Cerrah",
      englishName: "Surgeon",
      author: "Tess Gerritsen",
      genre: "Drama",
    },
    {
      name: "Çırak",
      englishName: "The Apprentice",
      author: "Tess Gerritsen",
      genre: "Drama",
    },
    {
      name: "Her Temas İz Bırakır",
      englishName: "Her Temas İz Bırakır",
      author: "Emrah Serbes",
      genre: "Crime",
    },
    {
      name: "Olasılıksız",
      englishName: "Improbable",
      author: "Adam Fawer",
      genre: "Fiction",
    },
    {
      name: "İki Cami Arasında Aşk",
      englishName: "İki Cami Arasında Aşk",
      author: "Mürvet Sarıyıldız",
      genre: "Fiction / Novel",
    },
    {
      name: "İki Cami Arasında Aşk 2",
      englishName: "İki Cami Arasında Aşk 2",
      author: "Mürvet Sarıyıldız",
      genre: "Fiction / Novel",
    },
    {
      name: "Sherlock Holmes - Sır Perdesi Aralanıyor",
      englishName: "Sherlock Holmes - Sır Perdesi Aralanıyor",
      author: "Sir Arthur Conan Doyle",
      genre: "Crime",
    },
    {
      name: "Sherlock Holmes - Kayıp Hikayenin İzinde",
      englishName: "Sherlock Holmes - Kayıp Hikayenin İzinde",
      author: "Sir Arthur Conan Doyle",
      genre: "Crime",
    },
    {
      name: "Sherlock Holmes - Takip",
      englishName: "Sherlock Holmes - Pursuit",
      author: "Sir Arthur Conan Doyle",
      genre: "Crime",
    },
    {
      name: "Kusursuz",
      englishName: "Flawless",
      author: "Edgar Wallace",
      genre: "Crime",
    },
    {
      name: "Sürgün",
      englishName: "Exile",
      author: "Edgar Wallace",
      genre: "Crime",
    },
    {
      name: "Temas",
      englishName: "Contact",
      author: "Edgar Wallace",
      genre: "Crime",
    },
    {
      name: "Saplantı",
      englishName: "Obsession",
      author: "L. J. Sellers",
      genre: "Crime",
    },
    {
      name: "Kusursuz İçgüdü",
      englishName: "Perfect Instinct",
      author: "Nicci French",
      genre: "Crime",
    },
    {
      name: "Cankurtaran",
      englishName: "Lifeguard",
      author: "James Patterson",
      genre: "Drama",
    },
    {
      name: "Kuşku",
      englishName: "Doubt",
      author: "Jeff Abbott",
      genre: "Fiction",
    },
    {
      name: "Mahzen",
      englishName: "Collision",
      author: "Jeff Abbott",
      genre: "Drama",
    },
    {
      name: "Kayıp Gül",
      englishName: "Kayıp Gül",
      author: "Serdar Özkan",
      genre: "Emotional Fiction",
    },
    {
      name: "Ölümsüz Kalp",
      englishName: "Ölümsüz Kalp",
      author: "Serdar Özkan",
      genre: "Emotional Fiction",
    },
    {
      name: "Ekim Yağmurları",
      englishName: "Ekim Yağmurları",
      author: "Serdar Özkan",
      genre: "Emotional Fiction",
    },
    {
      name: "Beyoğlu'nun En Güzel Abisi",
      englishName: "Beyoğlu'nun En Güzel Abisi",
      author: "Ahmet Ümit",
      genre: "Crime",
    },
    {
      name: "Bir Ses Böler Geceyi",
      englishName: "Bir Ses Böler Geceyi",
      author: "Ahmet Ümit",
      genre: "Fiction",
    },
    {
      name: "Telepati",
      englishName: "Multiverse",
      author: "Leonardo Patrignani",
      genre: "Fiction",
    },
    {
      name: "Hafıza",
      englishName: "Memory",
      author: "Leonardo Patrignani",
      genre: "Fiction",
    },
    {
      name: "Ateş Hırsızı",
      englishName: "The Fire Thief",
      author: "Terry Deary",
      genre: "Fantasy",
    },
  ];
  const rows = books.map((book: Book, index: number) => ({
    id: index + 1,
    name: book.name,
    englishName: book.englishName,
    author: book.author,
    genre: book.genre,
  }));
  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "left", height: 50 }}
      >
        <GridToolbarColumnsButton sx={{ color: "#89ABE3" }} />
        <GridToolbarFilterButton sx={{ color: "#89ABE3" }} />
        <GridToolbarDensitySelector sx={{ color: "#89ABE3" }} />
        {/* <GridToolbarExport sx={{ color: "#89ABE3" }} /> */}

        <GridToolbarQuickFilter sx={{ ml: "auto", width: "15%" }} />
      </GridToolbarContainer>
    );
  }

  return (
    <>
      {/* // -------------------Header---------------------- */}
      <AppHeader />
      {/* // -------------------Header----------------------  */}
      {/* // -------------------Desc----------------------  */}
      <div>
        <div className="py-24">
          <div className="container m-auto px-6">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-medium leading-tight mb-5 capitalize">
                  <span className="text-[#89ABE3] underline">Reading:</span> The
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
                  src="/static/images/rb-cover.jpg"
                  alt=""
                  className="rounded transform scale-100 perspective-1040 h-[40rem]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <p className="font-medium text-justify mt-8 lg:ml-8 mx-4">
          ==&gt; Here is my <span className="text-[#ff4081] ">Bookshelf.</span>{" "}
          You can examine it as you wish!
        </p> */}
      </div>
      {/* // -------------------Desc----------------------  */}
      {/* // -------------------Table----------------------  */}
      {/* <Grid container padding={2}>
        <Grid item xs={12}>
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
                color: "#89ABE3",
              },
              ".MuiDataGrid-columnHeader": {
                backgroundColor: "#D6EAF8",
                color: "#ff4081",
                fontWeight: "bold",
              },
              ".MuiDataGrid-columnSeparator": {
                color: "#89ABE3",
              },
            }}
            pageSizeOptions={[10, 20, 50, 100]}
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid> */}
      {/* // -------------------Table----------------------  */}
    </>
  );
};

export default Books;
