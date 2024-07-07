import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Lists',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: '/conquer-cbr',
    description: (
      <>All lists submitted for viewing.</>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Link to={link}>
        <div className="text--left">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
      
    </div>
  );
}

export default function HomepageFeatures(props): JSX.Element {
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
