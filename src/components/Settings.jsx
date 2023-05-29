import {
  buyingCategory,
  foodCategory,
  housingCategory,
  publicCategory,
  transportCategory,
} from "../domain/data.js";
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
}) => (
  <div className="mx-auto mt-6 px-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
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
          <div className={"mb-1 text-sm"}>Nombre de longs courriers</div>
          <RadioGroup
            options={[0, 1, 2, 3, 4]}
            name={"longFlights"}
            defaultValue={0}
            onChange={(value) => {
              setTotalLongFlights(parseInt(value));
            }}
            value={longFlights}
          />
          <div className="mt-3"></div>
          <CustomSwitch
            id={"no-car"}
            value={noCar}
            label={"Je n'ai pas de voiture"}
            setOnChange={setNoCar}
          />
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
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
            options={[0, 1, 2, 3, 4]}
            name={"meatReduction"}
            defaultValue={0}
            onChange={(value) => {
              setMeatReduction(parseInt(value));
            }}
            value={meatReduction}
          />
          <div className="mt-3"></div>
          <CustomSwitch
            id={"vegetarian"}
            value={vegetarian}
            label={"Je deviens végétarien"}
            setOnChange={setVegetarian}
          />
          <div className="mt-3"></div>
          <CustomSwitch
            id={"vegan"}
            value={vegan}
            label={"Je deviens vegan"}
            setOnChange={setVegan}
          />
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
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
          <div className="mt-3"></div>
          <CustomSwitch
            id={"thrash"}
            value={noThrash}
            label={"Mode de vie zéro déchets"}
            setOnChange={setNoThrash}
          />
          <div className="mt-3"></div>
          <CustomSwitch
            id={"flat"}
            value={flat}
            label={"J'habite en appartemment"}
            setOnChange={setFlat}
          />
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
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
          <div className="mt-3"></div>
          <CustomSwitch
            id={"keep"}
            value={keeper}
            label={"Je conserve mes objets longtemps"}
            setOnChange={setKeeper}
          />
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
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
            label={"Services publics décarbonés"}
            setOnChange={setPublicDecarb}
          />
        </div>
      </div>
    </div>
  </div>
);

function RadioCard(props) {
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
          bg: "teal.500",
          color: "white",
          borderColor: "teal.500",
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

function RadioGroup({ options, name, defaultValue, onChange, value }) {
  console.log(value);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
    onChange: onChange,
    value: value,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function CustomSwitch({ id, label, value, setOnChange }) {
  return (
    <FormControl display="flex" alignItems="center">
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
        colorScheme={"teal"}
        value={value}
        onChange={(e) => {
          setOnChange(e.target.checked);
        }}
      />
    </FormControl>
  );
}

export default Settings;
