import {
  buyingCategory,
  defaultAdministrationCost,
  defaultBankCost,
  defaultBuildCost,
  defaultCarCost,
  defaultClothesCost,
  defaultCultureCost,
  defaultElectricityHouseCost,
  defaultElectronicCost,
  defaultFishCost,
  defaultFossileHeatingCost,
  defaultHealthCost,
  defaultHealthEducationCost,
  defaultHouseCost,
  defaultInfrastructureCost,
  defaultLeisureCost,
  defaultMeatCost,
  defaultMilkEggsCost,
  defaultOtherBuyingCost,
  defaultOtherPublicCost,
  defaultOtherTransportCost,
  defaultTeachingCost,
  defaultThrashCost,
  flatVsHouseRatio,
  foodCategory,
  housingCategory,
  keeperRatio,
  longFlightCost,
  mediumFlightCost,
  publicCategory,
  publicDecarbRatio,
  transportCategory,
} from "../domain/data";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

const Settings = ({
  transportSize,
  foodSize,
  housingSize,
  publicSize,
  buyingSize,
  meatReduction,
  setMeatReduction,
  longFlights,
  setTotalLongFlights,
  noCar,
  setNoCar,
  setVegan,
  vegan,
  setNoHousingFossile,
  noHousingFossile,
  setNoThrash,
  noThrash,
  secondHandClothes,
  setSecondHandClothes,
  setVegetarian,
  vegetarian,
  flat,
  setFlat,
  keeper,
  setKeeper,
  publicDecarb,
  setPublicDecarb,
  mediumFlights,
  setTotalMediumFlights,
}: {
  transportSize: number;
  foodSize: number;
  housingSize: number;
  publicSize: number;
  buyingSize: number;
  meatReduction: number;
  setMeatReduction: any;
  longFlights: number;
  setTotalLongFlights: any;
  noCar: boolean;
  setNoCar: any;
  setVegan: any;
  vegan: boolean;
  setNoHousingFossile: any;
  noHousingFossile: boolean;
  setNoThrash: any;
  noThrash: boolean;
  secondHandClothes: boolean;
  setSecondHandClothes: any;
  setVegetarian: any;
  vegetarian: boolean;
  flat: boolean;
  setFlat: any;
  keeper: boolean;
  setKeeper: any;
  publicDecarb: boolean;
  setPublicDecarb: any;
  mediumFlights: number;
  setTotalMediumFlights: any;
}) => (
  <div className="mx-auto mt-6 px-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">
            {transportCategory}
          </h3>
          <span className={"text-2xl"}>✈️</span>
        </div>
        <div className="p-4 pt-0">
          <div className="me-1 inline-block text-2xl font-bold">
            {transportSize}
          </div>
          <span className={"inline-block text-xs text-slate-600"}>kgCO2eq</span>
          <div className="mt-2"></div>
          <div className={"mb-1 me-1 text-sm"}>Nombre de moyens courriers</div>
          <RadioGroup
            options={[0, 1, 2, 3, 4]}
            name={"longFlights"}
            defaultValue={0}
            onChange={(value: any) => {
              setTotalMediumFlights(parseInt(value));
            }}
            value={mediumFlights}
          />
          <Gain
            label={`(${mediumFlights > 0 ? "+" : "-"}${
              mediumFlights * mediumFlightCost > 0
                ? mediumFlights * mediumFlightCost
                : mediumFlightCost
            }kgCO2eq) 🚀`}
            greenCondition={mediumFlights === 0}
          />
          <div className="mt-1"></div>
          <div className={"mb-1 me-1 text-sm"}>Nombre de longs courriers</div>
          <RadioGroup
            options={[0, 1, 2, 3, 4]}
            name={"longFlights"}
            defaultValue={0}
            onChange={(value: any) => {
              setTotalLongFlights(parseInt(value));
            }}
            value={longFlights}
          />
          <Gain
            label={`(${longFlights > 0 ? "+" : "-"}${
              longFlights * longFlightCost > 0
                ? longFlights * longFlightCost
                : longFlightCost
            }kgCO2eq) 🚀`}
            greenCondition={longFlights === 0}
          />
          <div className="mt-1"></div>
          <CustomSwitch
            id={"no-car"}
            value={noCar}
            label={"Je n'ai pas de voiture"}
            setOnChange={setNoCar}
          />
          <Gain
            label={`(${noCar ? "-" : "+"}${defaultCarCost}kgCO2eq) 🚀`}
            greenCondition={noCar}
            additionalClass={`-translate-y-2`}
          />
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">{foodCategory}</h3>
          <span className={"text-2xl"}>🍛</span>
        </div>
        <div className="p-4 pt-0">
          <div className="me-1 inline-block text-2xl font-bold">{foodSize}</div>
          <span className={"inline-block text-xs text-slate-600"}>kgCO2eq</span>
          <div className="mt-2"></div>
          <div className={"mb-1 text-sm"}>
            Divise ma consommation de viande par
          </div>
          <RadioGroup
            options={[0, 2, 3, 4]}
            name={"meatReduction"}
            defaultValue={0}
            onChange={(value: any) => {
              setMeatReduction(parseInt(value));
            }}
            disabled={vegetarian || vegan}
            value={meatReduction}
          />{" "}
          <Gain
            label={`(${meatReduction >= 2 ? "-" : "+"}${
              meatReduction
                ? defaultMeatCost - Math.floor(defaultMeatCost / meatReduction)
                : defaultMeatCost
            }kgCO2eq) 💪`}
            disabled={vegetarian || vegan}
            greenCondition={meatReduction >= 2}
          />
          <div className="mt-1"></div>
          <CustomSwitch
            id={"vegetarian"}
            value={vegetarian}
            label={"Je deviens végétarien"}
            setOnChange={setVegetarian}
            disabled={vegan}
          />
          <Gain
            label={`(${vegetarian ? "-" : "+"}${
              defaultMeatCost + defaultFishCost
            }kgCO2eq) 🚀`}
            greenCondition={vegetarian}
            disabled={vegan}
            additionalClass={"-translate-y-2"}
          />
          <CustomSwitch
            id={"vegan"}
            value={vegan}
            label={"Je deviens vegan"}
            setOnChange={setVegan}
          />
          <Gain
            label={`(${vegan ? "-" : "+"}${
              defaultMeatCost + defaultFishCost + defaultMilkEggsCost
            }kgCO2eq) 🚀`}
            greenCondition={vegan}
            additionalClass={"-translate-y-2"}
          />
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">
            {housingCategory}
          </h3>
          <span className={"text-2xl"}>🏠</span>
        </div>
        <div className="p-4 pt-0">
          <div className="me-1 inline-block text-2xl font-bold">
            {housingSize}
          </div>
          <span className={"inline-block text-xs text-slate-600"}>kgCO2eq</span>
          <div className="mt-2"></div>
          <CustomSwitch
            id={"housing-fossile"}
            value={noHousingFossile}
            label={"Je me chauffe sans énergie fossile (PAC, électrique, etc)"}
            setOnChange={setNoHousingFossile}
          />
          <Gain
            label={`(${noHousingFossile ? "-" : "+"}${
              defaultFossileHeatingCost - defaultElectricityHouseCost
            }kgCO2eq) 🚀`}
            greenCondition={noHousingFossile}
            additionalClass={"-translate-y-2"}
          />
          <CustomSwitch
            id={"thrash"}
            value={noThrash}
            label={"Mode de vie zéro déchets"}
            setOnChange={setNoThrash}
          />
          <Gain
            label={`(${noThrash ? "-" : "+"}${defaultThrashCost}kgCO2eq) 🐣`}
            greenCondition={noThrash}
            additionalClass={"-translate-y-2"}
          />
          <CustomSwitch
            id={"flat"}
            value={flat}
            label={"J'habite en appartemment"}
            setOnChange={setFlat}
          />
          <Gain
            label={`(${flat ? "-" : "+"}${Math.floor(
              defaultBuildCost + defaultHouseCost / 3
            )}kgCO2eq) 💪`}
            greenCondition={flat}
            additionalClass={"-translate-y-2"}
          />
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">
            {buyingCategory}
          </h3>
          <span className={"text-2xl"}>🎁</span>
        </div>
        <div className="p-4 pt-0">
          <div className="me-1 inline-block text-2xl font-bold">
            {buyingSize}
          </div>
          <span className={"inline-block text-xs text-slate-600"}>kgCO2eq</span>
          <div className="mt-2"></div>
          <CustomSwitch
            id={"clothes"}
            value={secondHandClothes}
            label={"Vêtements de seconde main"}
            setOnChange={setSecondHandClothes}
          />
          <Gain
            label={`(${
              secondHandClothes ? "-" : "+"
            }${defaultClothesCost}kgCO2eq) 🐣`}
            greenCondition={secondHandClothes}
            additionalClass={"-translate-y-2"}
          />
          <CustomSwitch
            id={"keep"}
            value={keeper}
            label={"Je conserve mes objets longtemps"}
            setOnChange={setKeeper}
          />
          <Gain
            label={`(${keeper ? "-" : "+"}${Math.floor(
              defaultOtherBuyingCost / keeperRatio +
                defaultLeisureCost / keeperRatio +
                defaultElectronicCost / keeperRatio +
                (flat
                  ? defaultHouseCost / flatVsHouseRatio / keeperRatio
                  : defaultHouseCost / keeperRatio)
            )}kgCO2eq) 💪`}
            greenCondition={keeper}
            additionalClass={"-translate-y-2"}
          />
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">
            {publicCategory}
          </h3>
          <span className={"text-2xl"}>🏢</span>
        </div>
        <div className="p-4 pt-0">
          <div className="me-1 inline-block text-2xl font-bold">
            {publicSize}
          </div>
          <span className={"inline-block text-xs text-slate-600"}>kgCO2eq</span>
          <div className="mt-3"></div>
          <CustomSwitch
            id={"public"}
            value={publicDecarb}
            label="Services publics décarbonés"
            setOnChange={setPublicDecarb}
          />
          <Gain
            label={`(${publicDecarb ? "-" : "+"}${Math.floor(
              defaultInfrastructureCost -
                defaultInfrastructureCost / publicDecarbRatio +
                defaultCultureCost -
                defaultCultureCost / publicDecarbRatio +
                defaultTeachingCost -
                defaultTeachingCost / publicDecarbRatio +
                defaultHealthCost -
                defaultHealthCost / publicDecarbRatio +
                defaultHealthEducationCost -
                defaultHealthEducationCost / publicDecarbRatio +
                defaultOtherTransportCost -
                defaultOtherTransportCost / publicDecarbRatio +
                defaultBankCost -
                defaultBankCost / publicDecarbRatio +
                defaultAdministrationCost -
                defaultAdministrationCost / publicDecarbRatio +
                defaultOtherPublicCost -
                defaultOtherPublicCost / publicDecarbRatio
            )}kgCO2eq) 🚀`}
            greenCondition={publicDecarb}
            additionalClass={"-translate-y-2"}
          />
        </div>
      </div>
    </div>
  </div>
);

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: `${props.disabled ? "gray.500" : "teal.500"}`,
          color: "white",
          borderColor: `${props.disabled ? "gray.500" : "teal.500"}`,
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function RadioGroup({
  options,
  name,
  defaultValue,
  onChange,
  value,
  disabled = false,
}: {
  options: Array<any>;
  name: string;
  defaultValue: any;
  onChange: any;
  value: any;
  disabled?: boolean;
}) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
    onChange: onChange,
    value: value,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value: any) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio} disabled={disabled}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function CustomSwitch({
  id,
  label,
  value,
  setOnChange,
  disabled = false,
}: {
  id: string;
  label: string;
  value: any;
  setOnChange: any;
  disabled?: boolean;
}) {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
    >
      <FormLabel
        htmlFor={id}
        mb="0"
        fontSize={"0.875rem"}
        fontWeight={"normal"}
      >
        {label}
      </FormLabel>
      <Switch
        id={id}
        colorScheme={disabled ? "gray" : "teal"}
        value={value}
        onChange={(e) => {
          setOnChange(e.target.checked);
        }}
      />
    </FormControl>
  );
}

const Gain = ({
  label,
  greenCondition,
  additionalClass = "",
  disabled = false,
}: {
  label: string;
  greenCondition: boolean;
  additionalClass?: string;
  disabled?: boolean;
}) => (
  <span
    className={`inline-block text-xs ${
      disabled
        ? "text-gray-500"
        : greenCondition
        ? "text-green-500"
        : "text-red-500"
    } ${additionalClass}`}
  >
    {label}
  </span>
);

export default Settings;
