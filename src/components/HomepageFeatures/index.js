import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collaborative',
    Svg: require('@site/static/img/undraw_team_up.svg').default,
    description: (
      <>
        Partagez vos recherches sur les thèmes du Grand Oral, pour avoir une base exploitable le jour de l'examen.
      </>
    ),
  },
  {
    title: 'Ready To Use',
    Svg: require('@site/static/img/undraw_exams.svg').default,
    description: (
      <>
        Chaque page de la documentation expose un concept, une idée de façon clair et compréhensible.
      </>
    ),
  },
  {
    title: 'Editable',
    Svg: require('@site/static/img/undraw_editable.svg').default,
    description: (
      <>
        Contribuer avec le langage <code>Markdown</code> depuis le dépôt Github.
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
