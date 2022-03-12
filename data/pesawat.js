const maskapai = [
    {
        maskapai_id: "DR",
        maskapai_nama: "Dragon Air",
        maskapai_logo: require('../logo/dragon.png'),
    },
    {
        maskapai_id: "FO",
        maskapai_nama: "Forest Cat Air",
        maskapai_logo: require('../logo/forest.png'),
    },
    {
        maskapai_id: "MO",
        maskapai_nama: "Moon Air",
        maskapai_logo: require('../logo/moon.png'),
    },
    {
        maskapai_id: "SU",
        maskapai_nama: "Sun Air",
        maskapai_logo: require('../logo/sun.png'),
    },
    {
        maskapai_id: "WH",
        maskapai_nama: "White Air",
        maskapai_logo: require('../logo/white.png'),
    },
    {
        maskapai_id: "WA",
        maskapai_nama: "Warrior Air",
        maskapai_logo: require('../logo/warrior.png'),
    }
]

const bandara = [
    {
        bandara_code: "TLG",
        bandara_nama: "Talang Airport",
    },
    {
        bandara_code: "JBG",
        bandara_nama: "Jabung Airport",
    },
    {
        bandara_code: "BWS",
        bandara_nama: "Belwis Airport",
    },
    {
        bandara_code: "ITR",
        bandara_nama: "ITERA Airport",
    }
]

const jadwal =[
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan:"TLG",
        bandara_kode_tujuan:"JBG",
        maskapai_id:"WH",

    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan:"TLG",
        bandara_kode_tujuan:"BWS",
        maskapai_id:"SU",

    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan:"TLG",
        bandara_kode_tujuan:"ITR",
        maskapai_id:"WA",

    },
    {
        jadwal_id: "004",
        bandara_kode_keberangkatan:"BWS",
        bandara_kode_tujuan:"ITR",
        maskapai_id:"MO",

    },
    {
        jadwal_id: "005",
        bandara_kode_keberangkatan:"BWS",
        bandara_kode_tujuan:"ITR",
        maskapai_id:"FO",

    },
    {
        jadwal_id: "006",
        bandara_kode_keberangkatan:"BWS",
        bandara_kode_tujuan:"ITR",
        maskapai_id:"DR",

    },
    {
        jadwal_id: "007",
        bandara_kode_keberangkatan:"BWS",
        bandara_kode_tujuan:"ITR",
        maskapai_id:"WH",

    },
    {
        jadwal_id: "008",
        bandara_kode_keberangkatan:"ITR",
        bandara_kode_tujuan:"JBG",
        maskapai_id:"DR",

    }
]

export {maskapai,bandara,jadwal}