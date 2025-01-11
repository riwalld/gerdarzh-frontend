export interface Propernoun {
  litTrans: {
    litTransFr: string;
    litTransEng: string;
    litTransType: number;
  };
  currentName: string;
  etymoName: string;
  descrFr: string;
  descrEng: string;
  wordTheme: number;
  culturalArea: number;
  place: string;
  country: string;
  period: string;
  year: number;
  image: string;
  imgCaption: string | null;
}