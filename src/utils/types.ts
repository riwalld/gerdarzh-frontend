export interface Propernoun {
  litTrans: LitTrans;
  currentName: string;
  etymoName: string;
  descrFr: string;
  descrEng: string;
  shortDescrFr: string;
  shortDescrEng: string;
  wordTheme: number | null;
  culturalArea: number | null;
  place: string;
  country: string;
  period: string;
  year: number;
  image: string;
  imgCaption: string | null;
  wordStemsPC: PcRadicals[];
}


export interface WordStemDto {
  gender: string;
  id: number;
  wordClass: string;
  wordStemLanguage: string;
  wordStemName: string;
  wordStemParents: parentWordstemDTO[];
  firstOccurrence: string;
  semanticField: number;
  descrEng: string | null;
  descrFr: string | null;
  phonetic: string;
  engTranslation: string;
  frTranslation: string;
  sources: Source[];
}
export interface parentWordstemDTO {
  id: number;
  wordStemLanguage: string;
  wordStemName: string;
  wordStemParents: parentWordstemDTO[];
  firstOccurrence: string;
  phonetic: string;
  engTranslation: string;
  frTranslation: string;
}
export interface LitTrans {
  litTransFr: string;
  litTransEng: string;
  litTransType: string;
}
export interface SemanticField {
  id: number;
  engName: string;
  frName: string;
}
export interface Source {
  source_id: number;
  date_publication: number;
  language: number;
  type_source: number;
  abbreviation: string;
  sourceEngName: string;
  sourceOriginalName: string | null;
  description?: string | null;
}

export interface PcRadicals {
  id: number;
  name: string;
}