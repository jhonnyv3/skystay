export interface HotelAutoComplete {
    query: string;
}

export interface search {
    entityId       : string;
    checkin        : string;
    checkout       : string;
    resultsPerPage?: number;
    page          ?: number;
    rooms         ?: number;
    adults        ?: number;
    childrenAges  ?: string;
}

export interface detail {
    id       : string;
    market  ?: string;
    currency?: string;
    locale  ?: string;
}

export interface prices {
    hotelId      : string;
    checkin      : string;
    checkout     : string;
    rooms       ?: number;
    adults      ?: number;
    childrenAges?: string;
    market      ?: string;
    currency    ?: string;
    locale      ?: string;
}

export interface reviews {
    hotelId      : string;
    page        ?: number;
    sort        ?: number;
    market      ?: string;
    currency    ?: string;
    locale      ?: string;
    guestType   ?: string;
    filterLocale?: string;
    tags        ?: string;
}

