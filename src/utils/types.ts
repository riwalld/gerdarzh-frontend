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
export interface WordStemDto {
  gender: string;
  id: number;
  wordClass: string;
  wordStemLanguage: string;
  wordStemName: string;
  firstOccurrence: string;
  semanticField: SemanticField;
  descrEng: string | null;
  descrFr: string | null;
  phonetic: string;
  engTranslation: string;
  frTranslation: string;
  sources: string[];
}

export interface PcRadicals {

  id: number;
  name: string;
}