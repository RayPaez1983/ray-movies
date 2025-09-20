import './App.css';
import CustomButton from './components/Button/CustomButtom';

function App() {
  return (
    <>
      Ramymond code
      <CustomButton
        title="Add to Wish List"
        backgroundColor="#ff6b6b"
        onClick={() => console.log('added')}
      />
    </>
  );
}

export default App;
