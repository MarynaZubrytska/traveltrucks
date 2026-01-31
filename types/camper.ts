export type CamperForm = 'panelTruck' | 'fullyIntegrated' | 'alcove';

export type CamperReview = {
  reviewer_name: string;
  reviewer_rating: number; 
  comment: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form?: CamperForm;

  gallery: { thumb: string; original: string }[];

  transmission?: string;
  engine?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;

  length?: string;
  width?: string;
  height?: string;
  tank?: string;
  consumption?: string;

  reviews?: CamperReview[];
};

export type CampersResponse = {
  total: number;
  items: Camper[];
};

export type FiltersState = {
  location: string;
  form: CamperForm | ''; 
  equipment: {
    AC: boolean;
    automatic: boolean;
    kitchen: boolean;
    TV: boolean;
    bathroom: boolean;
  };
};