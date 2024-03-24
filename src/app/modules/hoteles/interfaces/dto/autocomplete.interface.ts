export interface Autocomplete {
    hierarchy:  string;
    location:   string;
    score:      number;
    entityName: string;
    entityId:   string;
    entityType: string;
    highlight:  Highlight;
    class:      string;
    pois:       Pois[];
}

export interface Highlight {
    entityName: string;
    hierarchy:  string;
}

export interface Pois {
    entityName: string;
    entityId:   string;
    class:      string;
}

export interface searchForm {
    search: Autocomplete;
    llegada: string;
    salida: string;
}