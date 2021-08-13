import axios from 'axios';
export const fetchData = async (value) => {
  const url =
    'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-07-24';
  let changeableUrl = url;
  if (value) {
    if (value.indexOf('-') > 0) {
      changeableUrl = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${value}`;
    } else {
      changeableUrl = `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${value[1]}&district_id=&date=2021-07-24`;
    }
  }
  try {
    const { data } = await axios.get(changeableUrl);
    const modifiedData = {
      totalDoses: data.topBlock.vaccination.total_doses,
      dose1: data.topBlock.vaccination.tot_dose_1,
      dose2: data.topBlock.vaccination.tot_dose_2,
      today: data.topBlock.vaccination.today,
      siteConductionVaccination: data.topBlock.sites.total,
      govt: data.topBlock.sites.govt,
      pvt: data.topBlock.sites.pvt,
      totalRegistrations: data.topBlock.registration.total,
      age18to45: data.topBlock.registration.cit_18_45,
      age45plus: data.topBlock.registration.cit_45_above,
    };
    return modifiedData;
  } catch (error) {}
};
export const fetchDailyData = async (value) => {
  try {
    const { data } = await axios.get(
      `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${value[1]}&district_id=&date=2021-07-24`
    );
    return data;
  } catch (error) {
    // alert('error fetching data');
  }
};
export const fetchDistinctData = async (value) => {
  try {
    const { data } = await axios.get(
      `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${value[1]}&district_id=${value[0]}&date=2021-07-24`
    );
    return data;
  } catch (error) {
    // alert('error fetching data');
  }
};
export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-07-24'
    );
    const getStateData = data.getBeneficiariesGroupBy.map((c) => ({
      title: c.title,
      id: c.id,
    }));
    return getStateData;
  } catch (error) {
    // alert('error fetching data');
  }
};
export const fetchDates = async () => {
  try {
    const { data } = await axios.get(
      'https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=2021-07-24'
    );
    const getVaccineDatesData = data.last30DaysVaccination.map(
      (c) => c.vaccine_date
    );
    return getVaccineDatesData;
  } catch (error) {
    // alert('error fetching data');
  }
};
