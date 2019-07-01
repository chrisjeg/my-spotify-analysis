export enum Term {
    Short = "short_term",
    Medium = "medium_term",
    Long = "long_term"
}

export interface TrackRequest{
    term: Term;
}