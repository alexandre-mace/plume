import {
  buyingCategory,
  defaultAdministrationCost,
  defaultBankCost,
  defaultBuildCost,
  defaultCarCost,
  defaultClothesCost,
  defaultCultureCost,
  defaultDrinksCost,
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
  defaultOtherFoodCost,
  defaultOtherPublicCost,
  defaultOtherTransportCost,
  defaultTeachingCost,
  defaultThrashCost, defaultTotal,
  defaultVegetablesCost,
  flatVsHouseRatio,
  foodCategory,
  housingCategory,
  keeperRatio,
  longFlightCost,
  mediumFlightCost,
  oneYoutubeStreamingHourForAYear,
  publicCategory,
  publicDecarbRatio,
  sevenMnShower,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

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
  total,
  localFood,
  setLocalFood,
  shortShowers,
  setShortShowers,
  stopYoutubeStreaming,
  setStopYoutubeStreaming,
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
  total: number;
  localFood: boolean;
  setLocalFood: any;
  shortShowers: boolean;
  setShortShowers: any;
  stopYoutubeStreaming: boolean;
  setStopYoutubeStreaming: any;
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
          <div className={"flex items-end justify-between"}>
            <div>
              <div className="me-1 inline-block text-2xl font-bold">
                {transportSize}
              </div>
              <span className={"inline-block text-xs text-slate-600"}>
                kgCO2eq
              </span>
            </div>
            <div className={"text-lg font-bold"}>
              {Math.round((transportSize / total) * 100)}%
            </div>
          </div>
          <div className="mt-2"></div>
          <div className={"mb-1 me-1 text-sm"}>
            Nombre de moyens courriers (3-5h)
          </div>
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
            total={total}
          />
          <div className="mt-1"></div>
          <div className={"mb-1 me-1 text-sm"}>
            Nombre de longs courriers (+5h)
          </div>
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
            total={total}
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
            total={total}
          />
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <h3 className="text-sm font-medium tracking-tight">{foodCategory}</h3>
          <span className={"text-2xl"}>🍛</span>
        </div>
        <div className="p-4 pt-0">
          <div className={"flex items-end justify-between"}>
            <div>
              <div className="me-1 inline-block text-2xl font-bold">
                {foodSize}
              </div>
              <span className={"inline-block text-xs text-slate-600"}>
                kgCO2eq
              </span>
            </div>
            <div className={"text-lg font-bold"}>
              {Math.round((foodSize / total) * 100)}%
            </div>
          </div>
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
            total={total}
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
            total={total}
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
            total={total}
          />
          <CustomSwitch
            id={"local"}
            value={localFood}
            label={"Je mange local"}
            setOnChange={setLocalFood}
          />
          <Gain
            label={`(${localFood ? "-" : "+"}${Math.round(
              (defaultMeatCost +
                defaultFishCost +
                defaultMilkEggsCost +
                defaultVegetablesCost +
                defaultOtherFoodCost +
                defaultDrinksCost) *
                0.13
            )}kgCO2eq) 🐣`}
            greenCondition={localFood}
            additionalClass={"-translate-y-2"}
            total={total}
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
          <div className={"flex items-end justify-between"}>
            <div>
              <div className="me-1 inline-block text-2xl font-bold">
                {housingSize}
              </div>
              <span className={"inline-block text-xs text-slate-600"}>
                kgCO2eq
              </span>
            </div>
            <div className={"text-lg font-bold"}>
              {Math.round((housingSize / total) * 100)}%
            </div>
          </div>
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
            total={total}
          />
          <CustomSwitch
            id={"thrash"}
            value={noThrash}
            label={"Mode de vie zéro déchet"}
            setOnChange={setNoThrash}
          />
          <Gain
            label={`(${noThrash ? "-" : "+"}${defaultThrashCost}kgCO2eq) 🐣`}
            greenCondition={noThrash}
            additionalClass={"-translate-y-2"}
            total={total}
          />
          <CustomSwitch
            id={"flat"}
            value={flat}
            label={"J'habite en appartement"}
            setOnChange={setFlat}
          />
          <Gain
            label={`(${flat ? "-" : "+"}${Math.floor(
              defaultBuildCost + defaultHouseCost / 3
            )}kgCO2eq) 💪`}
            greenCondition={flat}
            additionalClass={"-translate-y-2"}
            total={total}
          />
          <CustomSwitch
            id={"shortShowers"}
            value={shortShowers}
            label={"Je prends des douches courtes"}
            setOnChange={setShortShowers}
          />
          <Gain
            label={`(${shortShowers ? "-" : "+"}${Math.floor(
              sevenMnShower / (noHousingFossile ? 3 : 1)
            )}kgCO2eq) 💪`}
            greenCondition={shortShowers}
            additionalClass={"-translate-y-2"}
            total={total}
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
          <div className={"flex items-end justify-between"}>
            <div>
              <div className="me-1 inline-block text-2xl font-bold">
                {buyingSize}
              </div>
              <span className={"inline-block text-xs text-slate-600"}>
                kgCO2eq
              </span>
            </div>
            <div className={"text-lg font-bold"}>
              {Math.round((buyingSize / total) * 100)}%
            </div>
          </div>
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
            total={total}
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
            total={total}
          />
          <CustomSwitch
            id={"youtube"}
            value={stopYoutubeStreaming}
            label={"1h de moins de streaming par jour"}
            setOnChange={setStopYoutubeStreaming}
          />
          <Gain
            label={`(${stopYoutubeStreaming ? "-" : "+"}${Math.floor(
              oneYoutubeStreamingHourForAYear
            )}kgCO2eq) 💪`}
            greenCondition={stopYoutubeStreaming}
            additionalClass={"-translate-y-2"}
            total={total}
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
          <div className={"flex items-end justify-between"}>
            <div>
              <div className="me-1 inline-block text-2xl font-bold">
                {publicSize}
              </div>
              <span className={"inline-block text-xs text-slate-600"}>
                kgCO2eq
              </span>
            </div>
            <div className={"text-lg font-bold"}>
              {Math.round((publicSize / total) * 100)}%
            </div>
          </div>
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
            total={total}
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
  total,
  additionalClass = "",
  disabled = false,
}: {
  label: string;
  greenCondition: boolean;
  additionalClass?: string;
  disabled?: boolean;
  total: number;
}) => {
  const numbersInLabel = label.match(/^\d+|\d+\b|\d+(?=\w)/g);
  const value =
    numbersInLabel !== null && numbersInLabel.length > 0
      ? numbersInLabel.map(function (v) {
          return +v;
        })[0]
      : 0;
  const percentage = Math.round((value / total) * 100);
  return (
    <span
      className={`inline-block text-xs ${
        disabled
          ? "text-gray-500"
          : greenCondition
          ? "text-green-500"
          : "text-red-500"
      } ${additionalClass}`}
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className={"mr-1 inline-block font-extrabold"}>
              {label.charAt(1)}
              {percentage}%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="inline-block h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <span className={disabled ? 'opacity-30' : ''}>
                {[...Array(Math.min(Math.max((Math.round(Math.round((value / defaultTotal) * 100)/10) * 2), 1), 8)).keys()].map(() => (
                      <>
{/*                        {!greenCondition &&*/}
{/*                            (<span className={""}><svg className={"inline"} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
{/*<path d="M24.8767 1.56153L24.4382 0.662842L23.5395 1.10142C19.7063 2.97212 18.0956 7.59925 19.9694 11.4387L20.0258 11.5544C19.0824 13.9 17.4554 15.953 15.3848 17.408L14.4595 15.5049C16.9207 14.1795 17.9192 11.1492 16.6875 8.61329L14.44 3.99408L13.5411 4.43069C10.9422 5.69302 9.86826 8.82245 11.1285 11.4171L12.666 14.5771C12.6748 14.603 12.6854 14.6287 12.698 14.6539L14.388 18.1298C12.2467 19.8178 10.5976 22.1215 9.70805 24.7101L9.45233 25.45L8.48799 23.4666C11.5326 21.8594 12.7684 18.1177 11.2578 15.0036L8.49833 9.34198L7.59889 9.78163C4.4261 11.3325 3.09573 15.1593 4.64933 18.3386L6.93313 23.0243C6.94266 23.0554 6.95491 23.0862 6.96999 23.1163L8.8924 27.0702L8.01805 29.6001L9.15805 29.99L10.1647 27.0834L13.9655 27.479C13.9897 27.4812 14.0138 27.4819 14.0376 27.4813L18.5742 27.9547C22.0916 28.3219 25.2451 25.7751 25.6127 22.254L25.7165 21.2593L19.4519 20.6056C16.0012 20.2454 12.9008 22.6896 12.4374 26.107L10.5702 25.9123L10.8481 25.1101C11.6223 22.8714 13.0128 20.8665 14.8228 19.3456L18.0565 19.6895L18.0563 19.6907L18.6825 19.7561L19.1897 19.81C19.1945 19.8104 19.1994 19.8108 19.2042 19.8111C19.2086 19.8114 19.213 19.8117 19.2174 19.8119L23.1743 20.2249C26.0402 20.5213 28.6156 18.4459 28.9128 15.5732L29.0156 14.5794L23.9052 14.046L23.9034 14.0458C21.0957 13.7442 18.5937 15.7341 18.1896 18.4906L16.2531 18.2842C18.441 16.6987 20.1643 14.4863 21.1628 11.9688L21.3056 11.8993C25.1516 10.028 26.7496 5.39924 24.8767 1.56153ZM21.4041 9.50218C21.4021 9.50146 21.4001 9.50075 21.398 9.50005C21.3888 9.49689 21.3796 9.49395 21.3704 9.49122C20.7898 7.25943 21.6222 4.87383 23.4685 3.48C24.0632 5.71153 23.2451 8.10035 21.4041 9.50218ZM12.9275 10.5433C12.3008 9.25259 12.6084 7.75141 13.5852 6.80856L14.8887 9.48746C15.5145 10.7762 15.2089 12.2727 14.2296 13.2194L12.9275 10.5433ZM6.44647 17.4609C5.53136 15.5888 6.07235 13.3834 7.62761 12.1204L9.45832 15.8765L9.45877 15.8774C10.3678 17.7526 9.82976 19.9572 8.27829 21.2193L6.44697 17.4619L6.44647 17.4609ZM23.381 18.2356L20.4162 17.9262C20.9715 16.6821 22.2732 15.8817 23.6909 16.0345L23.6943 16.0349L26.6628 16.3447C26.111 17.5822 24.8066 18.3829 23.381 18.2356ZM14.62 25.5312C15.2732 23.6393 17.1644 22.3777 19.2443 22.5947L23.4061 23.0291C22.7529 24.921 20.8617 26.1826 18.7819 25.9655L14.62 25.5312Z" fill="#c6c6c6"/>*/}
{/*</svg></span>)*/}
{/*                        }*/}
{/*                        {greenCondition &&*/}
{/*                            <span className={"ml-1"}><img className={"inline"} src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Herb/3D/herb_3d.png" alt="Herb" width="20" height="20" /></span>*/}
                        {/*}*/}
                        {greenCondition ? <span className="ml-1">🌿 r</span> : <span className="ml-1">🔥</span>}
                      </>
                ))}
              </span>
            </span>
          </TooltipTrigger>
          <TooltipContent className={"px-4 py-3"}>
            ({label.split(label.charAt(1)).pop()}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};

export default Settings;
