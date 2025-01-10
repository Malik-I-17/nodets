import { ObjectId } from 'mongoose';

export interface Gallery {
  _id?: mongoose.Types.ObjectId;
  url: string;
  title: string;
  file_name: string;
  caption: string;
  all_text: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
  city:string;
  state:string;
  country:string;
}

export interface LocationSchema {
  primary_location: Location;
  secondary_location: Location;
}

export interface UserLocationSchema {
  primary_location: Location;
}

export interface Availability {
  in_person: boolean;
  virtual_consultation: boolean;
  intro: string;
}

export interface Finance {
  cost: number;
  payment_method: string[];
  insurance_method: string[];
  out_of_network: boolean;
}

export interface AddLink {
  _id: mongoose.Types.ObjectId;
  url: string;
  text_to_display: string;
  type: 'free' | 'paid';
  buying_date: Date;
  expired_date: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface homeFeedDetails {
  category: array;
  subcategory: array;
}

export interface Education {
  school: string;
  degree: string;
  year_graduated: string;
  year_began_practice: string;
}

export interface bunnyCredentials {
  library_id: number;
  library_api_key: string;
}

export interface Internship {
  program_type: string;
  program_institution: string;
  year_graduation: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface BroadCertificate {
  certificate_name: string;
  specialty: string;
  year_obtained: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface ClinicalSpecialties {
  clinical_specialties: string[];
  clinical_expertise: string[];
  clinical_experience: string[];
}

export interface ITreatmentModality {
  treatment_modality: string[];
  treatment_expertise: string[];
  treatment_experience: string[];
}

export interface CommunitiesServed {
  participants: string[];
  age: string[];
  ethnicity_of_your_client: string[];
  languages_spoken: string[];
  gender_preferenced: string[];
}

export interface TagsForFilter {
  for: string[];
  conditions: string[];
  indended_audience: string[];
  therapies: string[];
  category: string;
  subcategory: string;
}

export interface cardDetails {
  card_number: string;
  card_holder_name: string;
  expired_date: string;
  status: string;
  billing_address: object;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface billing_address {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  city: string;
  country: string;
  state: string;
  phone: string;
  zipCode: string;
}
export interface License {
  license_number: string;
  license_state: string;
  license_expiration_month: string;
  license_expiration_year: string;
}
export interface supervisorLicense {
  license_number?: string;
  // license_expiration_date?: string;
  license_state?: string;
  license?: string;
  license_expiration_month?: string;
  license_expiration_year?: string;
  credential_type?: string;
  // clinical_role?: string;
  provider_role: ObjectId;
  credential_agree_terms: string;
  uploaded_documents: array;
  other_dropdown?: string;
  supervisor_name?: string;
  pre_license_info?: boolean;
  credential_terms_check?: boolean;
  pre_license_number?: string;
  certification_type?: string;
  reuse_company_check?: boolean;
}

export interface professionalInsuranceDetails {
  npi: string;
  license_number: string;
  certificate_number: string;
  expiration_date: string;
}

export interface parentalSettings {
  age_group: string;
  parental_settings_access: string;
}

export interface InterfaceOtp {
  userId: string;
  otp_value: number;
  createdAt: Date;
}

export interface UserData {
  email: string;
  fullname: string;
  password?: string; // Optional, for regular registration
  otp_value?: number; // Optional, for OTP verification
  is_verified?: boolean; // Optional, for Google registration
}

export interface subscriptionDetails {
  plan_name: string | null;
  price_id: string | null;
  stripe_subscription_id: string | null;
  recurring_interval: 'day' | 'week' | 'month' | 'year' | null;
  amount: number;
  currency: string | null;
  transaction_id?: string | null;
  is_featured?: boolean;
  expiredAt: Date | null;
  subscribedAt: Date;
}

export interface stripeCredentials {
  customer_id: string | null;
  account_id: string | null;
  stripe_verification: string | null;
}
export interface followUser {
  user_id: ObjectId;
  follow_status: boolean;
}


export interface IProviderSubscriptionPlans {
  plan_name: string;
  plan_duration: 'one month' | 'six months' | 'one year';
  plan_in_days: number;
  price: number;
  discount_percentage: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted_at?: Date;
}



export interface InterfaceUser {
  // username: string;
  password: string;
  document_verification:boolean,
  reset_password_timestamp: date;
  reset_password_check: boolean;
  reset_password_code: string;
  wallet_balance_amount: number;
  mail_code: string;
  dob: string;
  ssn_number:string;
  intro: string;
  verification_image:string;
  mail_timestamp: date;
  mail_verified: boolean;
  verified_email: string;
  email: string;
  additional_email: string;
  fullname: string;
  profile_image: string;
  google_uid: string;
  total_video: number;
  total_blog: number;
  live_stream: number;
  isLive: boolean;
  liked_video: number;
  min_watch: string;
  average_rating: number;
  provider_role: ObjectId;
  provider_subscription_plans: IProviderSubscriptionPlans[]
  // mental_health_role: ObjectId;
  user_role: 'client' | 'provider' | 'facility' | 'super-admin';
  payment_status: 'unpaid' | 'paid';
  status: 'online' | 'offline' | 'invisible';
  title: string;
  credential_agree_terms: string;
  first_name: string;
  last_name: string;
  deactivate_reason: string;
  is_deactivated: boolean;
  account_restricted: boolean;
  company_name: string;
  primary_address: string;
  country: string;
  country_code: string;
  country_language: string;
  phone: string;
  extension: string;
  // dropdown: string;
  use_company_name: boolean;
  credential_type?: string;
  certification_number: string;
  is_verified: boolean;
  otp_value?: number;
  library_id?: number;
  library_api_key?: string;
  promo_code: string;
  two_factor_enabled: boolean;
  standard_account: ObjectId;
  enhanced_account: ObjectId;
  designation: ObjectId;
  appointment_mode: array;
  personal_statement: string;
  gallery: Gallery[];
  my_identity: IMyIdendity;
  bunny_credentials: bunnyCredentials;
  location: LocationSchema;
  availability: Availability;
  finance: Finance;
  billing_address: billing_address;
  add_link: AddLink[];
  home_feed_details: homeFeedDetails;
  education: Education[];
  internship: Internship[];
  residency: Internship[];
  fellow_ships: Internship[];
  card_details: cardDetails[];
  broad_certificate: BroadCertificate[];
  clinical_specialties: ClinicalSpecialties;
  other_clinical_specialties: ClinicalSpecialties;
  communities_served: CommunitiesServed;
  tags_for_filter: TagsForFilter;
  shared_experience: string;
  treatment_modality_specialty: ClinicalSpecialties;
  other_treatment_modality_specialty: ClinicalSpecialties;
  // license: License;
  parental_settings: parentalSettings;
  primary_credential_setting: supervisorLicense[];
  professional_insurance_details: professionalInsuranceDetails;
  stripe_credentials: stripeCredentials;
  subscription_details: subscriptionDetails;
  followers: followUser;
  account_flag: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface InterfaceOtp {
  userId: string;
  otp_value: number;
  createdAt: Date;
}

export interface IMyIdendity {
  age: string;
  gender: string;
  race: string;
  faith: string;
  sexuality: string;
  other: string;
  deletedAt?: string;
}

export interface UserData {
  email: string;
  fullname: string;
  password?: string; // Optional, for regular registration
  otp_value?: number; // Optional, for OTP verification
  is_verified?: boolean; // Optional, for Google registration
}
