export interface Propernoun {
  litTrans: LitTrans
  currentName: string
  etymoName: string
  descrFr: string
  descrEng: string
  shortDescrFr: string
  shortDescrEng: string
  wordTheme: number | null
  culturalArea: number | null
  place: string
  country: string
  period: string
  year: number
  image: string
  imgCaption: string | null
  wordStemsPC: PcRadicals[]
}

export interface WordStemDto {
  gender: string
  id?: number
  wordClass: string
  wordStemLanguage: string
  name: string
  parents: relatedWordstemDTO[]
  children: relatedWordstemDTO[]
  firstOccurrence: string
  semanticField: number
  engDescription: string | null
  frDescription: string | null
  phonetic: string
  engTranslation: string
  frTranslation: string
  sources: number[]
}

export interface MiniWordStem {
  id?: number
  name: string
  lang: string
}

export interface WordStemPayload {
  gender: string
  id?: number
  wordClass: string
  wordStemLanguage: string
  name: string
  parents_ids: number[]
  children_ids: number[]
  firstOccurrence: string
  semanticField: number
  engDescription: string | null
  frDescription: string | null
  phonetic: string
  engTranslation: string
  frTranslation: string
  sources: number[]
}

export interface relatedWordstemDTO {
  word_stem_id: number
  word_stem_language: string
  name: string
  firstOccurrence: string
  phonetic: string
  ref_words_eng: string
  ref_words_fr: string
  parent_stems_reverse: relatedWordstemDTO[]
  child_stems: relatedWordstemDTO[]
}

export interface LitTrans {
  litTransFr: string
  litTransEng: string
  litTransBr: string
  litTransType: string
}
export interface SemanticField {
  id: number
  engName: string
  frName: string
}
export interface Source {
  id: number
  date_publication: number
  language: number
  type_source: number
  abbreviation: string
  name: string
  sourceOriginalName: string | null
  description?: string | null
}

export interface PcRadicals {
  id: number
  name: string
  fr: string
}
