import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface Driver {
  id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
}

declare interface MarkerData {
  latitude: number;
  longitude: number;
  id: number;
  title: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
  first_name: string;
  last_name: string;
  time?: number;
  price?: string;
}

declare interface MapProps {
  destinationLatitude?: number;
  destinationLongitude?: number;
  onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
  selectedDriver?: number | null;
  onMapReady?: () => void;
}

declare interface Ride {
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success" | "outline";
  IconLeft?: any
  IconRight?: any
  className?: string;
  loading? : boolean
}

declare interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  icon? : any
}

declare interface PaymentProps {
  fullName: string;
  email: string;
  amount: string;
  driverId: number;
  rideTime: number;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface DriverStore {
  drivers: MarkerData[];
  selectedDriver: number | null;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: MarkerData[]) => void;
  clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
  item: MarkerData;
  selected: number;
  setSelected: () => void;
}


declare interface TopHeadline {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: {
    id: string | null;
    name: string | null;
  };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
  onPress : () => void;
}

declare interface SignupFormType {
  name : string;
  email : string;
  password : string
}

declare interface SigninFormType {
  // name : string;
  email : string;
  password : string
}

declare interface TabIconProps {
    focused: boolean;
    icon: any;
    title?: string;
    size?: number;
}

declare interface TripResult  {
    name: string;
    description: string;
    estimatedPrice: string;
    duration: number;
    budget: string;
    travelStyle: string;
    country: string;
    interests: string;
    groupType: string;
    bestTimeToVisit: string[];
    weatherInfo: string[];
    location: TripLocation;
    itinerary: TripItineraryDay[];
};

declare interface Trip  {
    id: number;
    country: string;
    group_type: string;
    travel_style: string;
    interest: string;
    budget_estimate: string;
    images: string; // comma-separated URLs
    result: string; // JSON string of TripResult
    created_at: string; // ISO date string
    userId: string;
    is_published : number
};