import houseOfDragonImage from "./../../../assets/houseOfDragon.webp";
import westworldImage from "./../../../assets/Westworld.jpeg";
import spiderManImage from "./../../../assets/SpiderMan.jpeg";
import LotrImage from "./../../../assets/LOTR.jpg";
import IndyImage from "./../../../assets/indy.jpeg";
import PjdnImage from "./../../../assets/peopleDoNothing.jpg";

export const filmDataArray = [
    {
        title: "Spiderman No Way Home",
        location: {
            name: "New York",
            country: "United States",
            locationType: "CITY",
            cityCode: "NYC"
        },
        image: spiderManImage
    },
    {
        title: "Westworld",
        location: {
            name: "Salt Lake City",
            country: "United States",
            locationType: "CITY",
            cityCode: "SLC"
        },
        image: westworldImage
    },
    {
        title: "House of the Dragon",
        location: {
            name: "Dubrovnik",
            country: "Croatia",
            locationType: "CITY",
            cityCode: "DBV"
        },
        image: houseOfDragonImage
    },
    {
        title: "Indiana Jones and the Last Crusade",
        location: {
            name: "Aqaba",
            country: "Jordan",
            locationType: "CITY",
            cityCode: "AQJ"
        },
        image: IndyImage
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        location: {
            name: "Auckland",
            country: "New Zealand",
            locationType: "CITY",
            cityCode: "AKL"
        },
        image: LotrImage
    },
    {
        title: "People Just do Nothing: Big in Japan",
        location: {
            name: "Tokyo",
            country: "Japan",
            locationType: "CITY",
            cityCode: "TYO"
        },
        image: PjdnImage
    }
];
