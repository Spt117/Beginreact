import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      <Header />
      <hr />
      <ShoppingList />
      <hr />
      <Recipes />
      <hr />
      <Footer />
    </div>
  );
};

export default App;

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const items = [
  { name: 'Carotte', quantity: 12 },
  { name: 'Patate', quantity: 11 },
  { name: 'Haricot', quantity: 54 },
];

const ShoppingItem = ({ item, quantity }) => (
  <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
    <div className={styles.section}>
      <p>{item} !</p>
      <Style data={quantity} />
    </div>
    <div className={styles.section}>
      <input type="checkbox" />
    </div>
  </div>
);

const ShoppingList = () => (
  <div className={clsx(styles['flex-col'])}>
    <h2>Liste de course</h2>
    <div className={styles['shopping-list-items']}>
      {items.map((item, index) => (
        <ShoppingItem item={item.name} quantity={item.quantity} key={index} />
      ))}
    </div>
  </div>
);

const recipes = [
  { name: 'Tarte à la carotte', date: '11.06.22' },
  { name: 'Purée de patate', date: '15.08.23' },
  { name: 'Sauce au haricot', date: '22.09.24' },
];

const Recipe = ({ name, date }) => (
  <li className={clsx(styles['flex'], styles['gap-4'])}>
    <span>{name}</span>
    <Style data={date} />
  </li>
);

const Recipes = () => (
  <div className={clsx(styles['flex-col'])}>
    <h2>Liste de recettes à faire</h2>
    <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.name} />
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
);

const Style = ({ data }) => <p className={styles.badge}>{data}</p>;
