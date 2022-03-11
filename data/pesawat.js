const flight = [
    {
        flight_id: "DR",
        flight_name: "Dragon Air",
        flight_logo: require('../logo/dragon.png'),
    },
    {
        flight_id: "FO",
        flight_name: "Forest Cat Air",
        flight_logo: require('../logo/forest.png'),
    },
    {
        flight_id: "MO",
        flight_name: "Moon Air",
        flight_logo: require('../logo/moon.png'),
    },
    {
        flight_id: "SU",
        flight_name: "Sun Air",
        flight_logo: require('../logo/sun.png'),
    },
    {
        flight_id: "WH",
        flight_name: "White Air",
        flight_logo: require('../logo/white.png'),
    },
    {
        flight_id: "WA",
        flight_name: "Warrior Air",
        flight_logo: require('../logo/warrior.png'),
    }
]

const airport = [
    {
        airp_code: "TLG",
        airp_name: "Talang Airport",
    },
    {
        airp_code: "JBG",
        airp_name: "Jabung Airport",
    },
    {
        airp_code: "BWS",
        airp_name: "Belwis Airport",
    },
    {
        airp_code: "ITR",
        airp_name: "ITERA Airport",
    }
]

const schedule =[
    {
        schedule_id: "001",
        dept_airp:"TLG",
        dest_airp:"JBG",
        flight_id:"WH",

    },
    {
        schedule_id: "002",
        dept_airp:"TLG",
        dest_airp:"BWS",
        flight_id:"SU",

    },
    {
        schedule_id: "003",
        dept_airp:"ITR",
        dest_airp:"JBG",
        flight_id:"WA",

    },
    {
        schedule_id: "004",
        dept_airp:"BWS",
        dest_airp:"ITR",
        flight_id:"MO",

    },
    {
        schedule_id: "005",
        dept_airp:"JBG",
        dest_airp:"ITR",
        flight_id:"FO",

    },
    {
        schedule_id: "006",
        dept_airp:"ITR",
        dest_airp:"JBG",
        flight_id:"DR",

    },
    {
        schedule_id: "007",
        dept_airp:"TLG",
        dest_airp:"JBG",
        flight_id:"WH",

    },
    {
        schedule_id: "008",
        dept_airp:"TLG",
        dest_airp:"ITR",
        flight_id:"DR",

    }
]

export {flight,airport,schedule}