import styles from './01.module.css';
import './global.css';

const VariantsStyle = {
  primary: { backgroundColor: '#646cff' },
  secondary: { backgroundColor: '#16a34a' },
  default: { backgroundColor: '#171717' },
};

const SizesStyle = {
  small: { padding: '8px 16px', fontSize: '1rem' },
  large: { padding: '12px 24px', fontSize: '1.2rem' },
};

const Button = ({ variant, size, children }) => {
  let variantStyle = VariantsStyle[variant];
  let sizeStyle = SizesStyle[size];

  function test() {
    return {
      border: 0,
      borderRadius: 4,
      color: 'white',
    };
  }
  return (
    <button style={{ ...test(), ...variantStyle, ...sizeStyle }}>
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div
      className={styles.button}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Primary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;
