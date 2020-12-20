//main
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { Form, Button, Select, message } from "antd";

//actions
import Actions from "redux/actions";

//lodash
import _ from "lodash";

//loader
import { IN_PROGRESS } from "constants/loader";

//scss
import "./SelectForm.scss";

const {
  //get all countries
  getAllCountryInProgress,

  //get country regions
  getCountryRegionsInProgress,

  //get region Cities
  getRegionCitiesInProgress,

  //get weather info
  getWeatherDataInProgress,
} = Actions;

const { Option } = Select;

const SelectForm = () => {
  const [form] = Form.useForm();
  const {
    countries,
    regions,
    cities,
    uiStateCountries,
    uiStateRegions,
    uiStateCities,
    error,
  } = useSelector((state) => state.Countries);
  const { uiState, error: weatherError } = useSelector((state) => state.Weather);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { city } = values;
    const obj = {
      city: "Jacobabad District",
      country: "pk",
      latitude: "28.22209930",
      longitude: "68.49019623",
      region: "Sindh",
    };
    const currentCityData = cities?.filter((el) => el.city === city)[0];
    dispatch(getWeatherDataInProgress(currentCityData));
  };

  const countryHandler = (countryCode) => {
    dispatch(getCountryRegionsInProgress(countryCode));
  };

  const regionHandler = (region) => {
    const countryCode = form.getFieldValue("country");
    dispatch(getRegionCitiesInProgress(countryCode, region));
  };
  useEffect(() => {
    dispatch(getAllCountryInProgress());
  }, []);

  if (error) {
    message.error(error.message);
  }
  if (weatherError) {
    message.error(weatherError.message);
  }
  return (
    <Form layout="vertical" form={form} className="form-wrapper" onFinish={onFinish}>
      <Form.Item name="country" label="Country:" rules={[{ required: true }]}>
        <Select
          loading={uiStateCountries === IN_PROGRESS}
          disabled={uiStateCountries === IN_PROGRESS}
          showSearch
          onChange={countryHandler}
          style={{ width: 300 }}
          placeholder="Select a Country"
          optionFilterProp="children"
          filterSort={(a, b) => a - b}
          allowClear
          filterOption={(input, { children }) =>
            children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {countries?.map((el, index) => (
            <Option value={el.code} key={index}>
              {el.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="region" label="Region:" rules={[{ required: true }]}>
        <Select
          loading={uiStateRegions === IN_PROGRESS}
          disabled={uiStateRegions === IN_PROGRESS}
          showSearch
          onChange={regionHandler}
          style={{ width: 300 }}
          placeholder="Select a Region"
          optionFilterProp="children"
          filterSort={(a, b) => a - b}
          allowClear
          filterOption={(input, { children }) =>
            children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {regions?.map((el, index) => (
            <Option value={el.region} key={index}>
              {el.region}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="city" label="City:" rules={[{ required: true }]}>
        <Select
          loading={uiStateCities === IN_PROGRESS}
          disabled={uiStateCities === IN_PROGRESS}
          showSearch
          style={{ width: 300 }}
          placeholder="Select a City"
          optionFilterProp="children"
          filterSort={(a, b) => a - b}
          allowClear
          filterOption={(input, { children }) =>
            children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {cities?.map((el, index) => (
            <Option value={el.city} key={index}>
              {el.city}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="form-btn"
          loading={uiState === IN_PROGRESS}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SelectForm;
