import React from 'react';
import CountUp from 'react-countup';
const Cards = (props) => {
  const {
    totalDoses,
    dose1,
    dose2,
    siteConductionVaccination,
    govt,
    pvt,
    totalRegistrations,
    age18to45,
    age45plus,
  } = props.data;
  return (
    <div class="row">
      <div
        className="card"
        style={{ width: '25rem', padding: '10px', margin: '10px' }}
      >
        <div className="card-body">
          <h5 className="card-title">Total Vaccination Doses</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={totalDoses} duration={2.5} separator="," />
          </h6>
          <h5 className="card-title">Dose1</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={dose1} duration={2.5} separator="," />
          </h6>
          <h5 className="card-title">Dose2</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={dose2} duration={2.5} separator="," />
          </h6>
        </div>
      </div>
      <div
        className="card"
        style={{ width: '25rem', padding: '10px', margin: '10px' }}
      >
        <div className="card-body">
          <h5 className="card-title">Sites Conduction Vaccination</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp
              start={0}
              end={siteConductionVaccination}
              duration={2.5}
              separator=","
            />
          </h6>
          <h5 className="card-title">Goverment</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={govt} duration={2.5} separator="," />
          </h6>
          <h5 className="card-title">Private</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={pvt} duration={2.5} separator="," />
          </h6>
        </div>
      </div>
      <div
        className="card"
        style={{ width: '25rem', padding: '10px', margin: '10px' }}
      >
        <div className="card-body">
          <h5 className="card-title">Total Registration</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp
              start={0}
              end={totalRegistrations}
              duration={2.5}
              separator=","
            />
          </h6>
          <h5 className="card-title">age 18 to 45</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={age18to45} duration={2.5} separator="," />
          </h6>
          <h5 className="card-title">age 45 +</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={age45plus} duration={2.5} separator="," />
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Cards;
