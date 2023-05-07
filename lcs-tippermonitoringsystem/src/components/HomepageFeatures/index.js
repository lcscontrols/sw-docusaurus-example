import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dumper',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Monitor the performance of all your heavy vehicles on the go. Monitor your most important KPI's
        such as Productivity, Tons/hr, Cycle time/trip, Payload efficiency of your vehicle, Availability
        of your vehicle and overall equipment efficiency..
      </>
    ),
  },
  {
    title: 'Tipper',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Monitor the performance of all your heavy vehicles on the go. Monitor your most important KPI's
        such as Productivity, Tons/hr, Cycle time/trip, Payload efficiency of your vehicle, Availability
        of your vehicle and overall equipment efficiency..
      </>
    ),
  },
  {
    title: 'Wheel Loader',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Monitor the performance of all your heavy vehicles on the go. Monitor your most important KPI's
        such as Productivity, Tons/hr, Cycle time/trip, Payload efficiency of your vehicle, Availability
        of your vehicle and overall equipment efficiency.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
