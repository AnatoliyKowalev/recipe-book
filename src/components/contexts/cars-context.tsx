import { getCars } from "@/lib/contentfulConfig";
import { EnumBrand } from "@/types/brands";
import { EnumFuelType, TypeContentfulCar } from "@/types/cars";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import { DEFAULT_STATE, LOAD_CARS_LIMIT } from "./constants";

type CarFilterContextType = {
  data: State;
  loading: boolean;
  isDirty: boolean;
  brand: EnumBrand;
  fuelTypes: EnumFuelType[];
  setBrand: (value: EnumBrand) => void;
  setFuelTypes: (value: EnumFuelType[]) => void;
  loadMore: () => void;
};

type State = {
  cars: TypeContentfulCar[];
  total: number;
  hasMore: boolean;
  brand: EnumBrand;
  fuelTypes: EnumFuelType[];
};

const CarFilterContext = createContext<CarFilterContextType | undefined>(
  undefined
);

export const CarFilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [brand, setBrand] = useState<EnumBrand>(DEFAULT_STATE.brand);
  const [fuelTypes, setFuelTypes] = useState<EnumFuelType[]>(
    DEFAULT_STATE.fuelTypes
  );
  const [data, setData] = useState<State>(DEFAULT_STATE);
  const [loading, setLoading] = useState(true);

  const page = Math.floor(data.cars.length / LOAD_CARS_LIMIT) + 1;

  const isDirty = data.brand !== brand || data.fuelTypes !== fuelTypes;

  const loadMore = async () => {
    setLoading(true);

    await getCars(brand, fuelTypes, isDirty ? 1 : page, LOAD_CARS_LIMIT).then(
      (res) => {
        setData((prev) => ({
          ...res,
          brand,
          fuelTypes,
          cars: isDirty ? res.cars : [...prev.cars, ...res.cars],
        }));
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <CarFilterContext.Provider
      value={{
        loading,
        isDirty,
        fuelTypes,
        data,
        brand,
        setBrand,
        loadMore,
        setFuelTypes,
      }}
    >
      {children}
    </CarFilterContext.Provider>
  );
};

export const useCarFilter = () => {
  const context = useContext(CarFilterContext);
  if (!context) {
    throw new Error("useCarFilter must be used within CarFilterProvider");
  }
  return context;
};
